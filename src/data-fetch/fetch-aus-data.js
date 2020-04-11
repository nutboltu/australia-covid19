

const axios = require('axios');
const { write } = require('./file-manager');
const { dateFormat, getHistoricalData } = require('./utils');

const provinces = [
  'australian capital territory',
  'new south wales',
  'northern territory',
  'queensland',
  'south australia',
  'tasmania',
  'victoria',
  'western australia'
];

const mapProvincestoStateName = {
  'australian capital territory': 'Australian Capital Territory',
  'new south wales': 'New South Wales',
  'northern territory': 'Northern Territory',
  'queensland': 'Queensland',
  'south australia': 'South Australia',
  'tasmania': 'Tasmania',
  'victoria': 'Victoria',
  'western australia': 'Western Australia',
};

const mapProvincestoStateCode = {
  'australian capital territory': 'ACT',
  'new south wales': 'NSW',
  'northern territory': 'NT',
  'queensland': 'QLD',
  'south australia': 'SA',
  'tasmania': 'TAS',
  'victoria': 'VIC',
  'western australia': 'WA',
};


const getDailyReport = (obj) => {
  const keys = Object.keys(obj);
  return keys.reduce((acc, key, index) => {
    const i = Math.max(index-1, 0);
    const d = obj[key] - obj[[keys[i]]];
    if (d) {
      acc.push({ day: dateFormat(key), value: d});
    }
    return acc;
  }, []);
}
const fetchAustraliaData = async () => {
  const statesHistoricalData = {};
  const dailyReportArray = await Promise.all(provinces.map(async province => {
    const { data } = await axios.get(`https://corona.lmao.ninja/v2/historical/australia/${province}`);
    const code = mapProvincestoStateCode[province];
    
    statesHistoricalData[code] = getHistoricalData(data.timeline);
    return getDailyReport(data.timeline.cases);
  }));

  const dailyReport = provinces.reduce((acc, province, index) => {
    acc[mapProvincestoStateName[province]] = dailyReportArray[index];
    return acc;
  }, {});
  
  write('./src/data/states_historical_data.json', JSON.stringify(statesHistoricalData));
  write('./src/data/daily_reports.json', JSON.stringify(dailyReport));
}


module.exports = fetchAustraliaData;