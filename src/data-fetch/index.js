const fetchAustraliaData = require('./fetch-aus-data');
const fetchNSWData = require('./fetch-nsw-data');
const fetchQLDData = require('./fetch-qld-data');
const fetchLatestGlobalData = require('./fetch-global-data');

const fetchAll = async () => {
  await fetchAustraliaData();
  await fetchNSWData();
  await fetchQLDData();
  await fetchLatestGlobalData();
}

module.exports = fetchAll();