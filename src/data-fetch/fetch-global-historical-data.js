const { NovelCovid } = require('novelcovid');
const { write } = require('./file-manager');
const {getHistoricalData } = require('./utils');
const axios = require('axios');
const csv = require('csvtojson');
var base = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/"

const getDayData = (obj) => {
  const keys = Object.keys(obj);
  return keys.map((key, index) => ({
      x: key,
      y: obj[key].y,
  }));
};

const fetchTop5GlobalHistoricalData = async () => {
  try {
    confirmedResponse = await axios.get(`${base}time_series_covid19_confirmed_global.csv`);
  } catch (err) {
      console.log(err)
      return null;
  }
 
  const confirmedCases = await csv({
    noheader:true,
    output: "csv"
  }).fromString(confirmedResponse.data);

  const dailyData = [];
  const timelineKey = confirmedCases[0].splice(4);

  for (let b = 0; b < confirmedCases.length;) {
    const timeline = {
      cases: {},
      deaths: {},
      recovered: {}
    }
    const c = confirmedCases[b].splice(4);
    for (let i = 0; i < c.length; i++) {
      timeline.cases[timelineKey[i]] = c[i]
    }
    dailyData.push({
      country: confirmedCases[b][1],
      province: confirmedCases[b][0] === "" ? null : confirmedCases[b][0],
      timeline
    })
    b++;
  }
  const globalHistoricalDailyData = [];
  
  const top5 = dailyData.sort((a, b) => {
    const aKey = Object.keys(a.timeline.cases);
    const bKey = Object.keys(b.timeline.cases);
    return b.timeline.cases[bKey[bKey.length - 1]] - a.timeline.cases[aKey[aKey.length - 1]];
  }).slice(1, 6);

  top5.forEach(function(obj){
    globalHistoricalDailyData.push({
      country: obj.country,
      data: getDayData(getHistoricalData(obj.timeline).filter( 
        x => x.id === "confirmed")[0].data.filter(
          obj => obj.y>100))
      });
  });

  write('./src/data/global_historical_data.json', JSON.stringify(globalHistoricalDailyData));
}


module.exports = fetchTop5GlobalHistoricalData();