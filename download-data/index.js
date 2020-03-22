const downloadTimeSeries = require('./download-time-series-report');
const updateAustraliaStateData = require('./update-australia-state-data');
const downloadDailyReport = require('./download-daily-report');

const downloadAllData = async () => {
  await downloadTimeSeries();
  await downloadDailyReport();
  updateAustraliaStateData();
}

module.exports = downloadAllData();
