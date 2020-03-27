

const axios = require('axios');
const csv = require('csvtojson');
const { stateNames } = require('../constants/states');
const fetchLast24hAusCases = require('./fetch-last-24h-aus-cases');
const { write } = require('./file-manager');

var base = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports";

const fetchLatestAusCases = async () => {
  let dailyReport;
  const date = '03-26-2020'
  try {
    dailyReport = await axios.get(`${base}/${date}.csv`);
 
  } catch (err) {
      console.log(err)
      return null;
  }

  const dailyReportData = await csv({
    noheader:true,
    output: "csv"
  }).fromString(dailyReport.data);
  
    const last24hAusCasesData = await fetchLast24hAusCases();
   const ausDailyReportData = dailyReportData.filter((item) => stateNames.includes(item[2]));

  const ausCases = ausDailyReportData.reduce((acc, item) => {
    acc.push({
        location: item[2],
        confirmed: parseInt(item[7]),
        deaths: parseInt(item[8]),
        recovered: parseInt(item[9]),
        ...last24hAusCasesData[item[2]],
    })
    return acc;
  }, []);
  write('./src/data/aus_cases.json', JSON.stringify(ausCases));
}

module.exports = fetchLatestAusCases;