const fetchAustraliaData = require('./fetch-aus-data');
const fetchNSWData = require('./fetch-nsw-data');
const fetchQLDData = require('./fetch-qld-data');
const fetchLatestGlobalData = require('./fetch-global-data');
const fetchAusHistoricalData = require('./fetch-aus-historical-data');

const fetchAll = async () => {
  await fetchAustraliaData();
  await fetchQLDData();
  await fetchLatestGlobalData();
  await fetchAusHistoricalData();
  await fetchNSWData();
}

module.exports = fetchAll();