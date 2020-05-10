const fetchAustraliaData = require('./fetch-aus-data');
const fetchCDRTData = require('./fetch-cdrt-data');
const fetchICUData = require('./fetch-icu-data');
const fetchTestConductedData = require('./fetch-test-conducted-data');
const fetchNSWData = require('./fetch-nsw-data');
const fetchQLDData = require('./fetch-qld-data');
const fetchVICData = require('./fetch-vic-data');
const fetchWAData = require('./fetch-wa-data');
const fetchLatestGlobalData = require('./fetch-global-data');
const fetchAusHistoricalData = require('./fetch-aus-historical-data');
const fetchTop5GlobalHistoricalData = require('./fetch-global-historical-data');
const fetch24hData = require('./fetch-24h-data');
const fetchAll = async () => {
  await fetchAustraliaData();
  await fetchLatestGlobalData();
  await fetchAusHistoricalData();
  await fetchTop5GlobalHistoricalData();
  await fetchCDRTData();
  await fetchTestConductedData();
  await fetchICUData();
  await fetch24hData();

  await fetchQLDData();
  await fetchWAData();
  await fetchNSWData();
  await fetchVICData();
}

module.exports = fetchAll();