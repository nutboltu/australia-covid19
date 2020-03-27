

const axios = require('axios');
const csv = require('csvtojson');
const { write } = require('./file-manager');

var base = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/03-20-2020.csv"

const downloadDailyReport = async () => {
  let dailyReport;
  try {
    dailyReport = await axios.get(base);
 
  } catch (err) {
      console.log(err)
      return null;
  }

  const dailyReportData = await csv({
    noheader:true,
    output: "csv"
  }).fromString(dailyReport.data);
  
  const data = JSON.stringify(dailyReportData);
  write('./data/daily_report.json', data);
  console.log(`Updated JHU CSSE Historical: ${dailyReportData.length} locations`);
}

module.exports = downloadDailyReport;