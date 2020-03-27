const downloadTimeSeries = require('./download-time-series-report');
const updateAustraliaStateData = require('./update-australia-state-data');
const downloadDailyReport = require('./download-daily-report');
const getNSWData = require('./get-nsw-data');

const downloadAllData = async () => {
  await downloadTimeSeries();
  await downloadDailyReport();
  updateAustraliaStateData();
  getNSWData();
}

module.exports = downloadAllData();
