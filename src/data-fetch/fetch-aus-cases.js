

const axios = require('axios');
const csv = require('csvtojson');
const { mapToStateName } = require('../constants/states');
const fetchLast24hAusCases = require('./fetch-last-24h-aus-cases');
const { write } = require('./file-manager');

// const base = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports";

const fetchLatestAusCases = async () => {
  let dailyReport;
  // const date = '03-26-2020';
  try {
    dailyReport = await axios.get(`https://bing.com/covid/data`);

  } catch (err) {
      console.log(err)
      return null;
  }

  // const dailyReportData = await csv({
  //   noheader:true,
  //   output: "csv"
  // }).fromString(dailyReport.data);
  const { data } = dailyReport;
  const ausDailyReportData = data.areas.find(item => item.id == 'australia').areas;
  
  const last24hAusCasesData = await fetchLast24hAusCases();
  // const ausDailyReportData = dailyReportData.filter((item) => stateNames.includes(item[2]));

  const ausCases = ausDailyReportData.reduce((acc, item) => {
    const displayName = mapToStateName[item.id];
    acc.push({
        location: displayName,
        confirmed: item.totalConfirmed || 0,
        deaths: item.totalDeaths || 0,
        recovered: item.totalRecovered || 0,
        ...last24hAusCasesData[displayName],
    })
    return acc;
  }, []);
  write('./src/data/aus_cases.json', JSON.stringify(ausCases));
}


module.exports = fetchLatestAusCases;