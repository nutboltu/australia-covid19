const fetchAustraliaData = require('./fetch-aus-data');
const fetchNSWData = require('./fetch-nsw-data');
const fetchQLDData = require('./fetch-qld-data');
const fetchVICData = require('./fetch-vic-data');
const fetchSAData = require('./fetch-sa-data');
const fetchACTData = require('./fetch-act-data');
const fetchWAData = require('./fetch-wa-data');
const fetchLatestGlobalData = require('./fetch-global-data');
const fetchAusHistoricalData = require('./fetch-aus-historical-data');
const fetchTop5GlobalHistoricalData = require('./fetch-global-historical-data');

const fetchAll = async () => {
  await fetchAustraliaData();
  await fetchLatestGlobalData();
  await fetchAusHistoricalData();
  await fetchTop5GlobalHistoricalData();
  await fetchQLDData();
  await fetchSAData();
  await fetchWAData();
  await fetchACTData();
  await fetchNSWData();
  await fetchVICData();
}

module.exports = fetchAll();