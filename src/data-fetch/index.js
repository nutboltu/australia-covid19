const fetchAustraliaData = require('./fetch-aus-data');
const fetchNSWData = require('./fetch-nsw-data');
const fetchQLDData = require('./fetch-qld-data');
const fetchSAData = require('./fetch-sa-data');
const fetchACTData = require('./fetch-act-data');
const fetchWAData = require('./fetch-wa-data');
const fetchLatestGlobalData = require('./fetch-global-data');
const fetchAusHistoricalData = require('./fetch-aus-historical-data');

const fetchAll = async () => {
  await fetchAustraliaData();
  await fetchLatestGlobalData();
  await fetchAusHistoricalData();
  await fetchQLDData();
  await fetchSAData();
  await fetchWAData();
  await fetchACTData();
  await fetchNSWData();
}

module.exports = fetchAll();