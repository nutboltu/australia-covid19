const fetchAustraliaData = require('./fetch-aus-data');
const fetchNSWData = require('./fetch-nsw-data');
const fetchLatestGlobalData = require('./fetch-global-data');

const fetchAll = async () => {
  await fetchAustraliaData();
  await fetchNSWData();
  await fetchLatestGlobalData();
}

module.exports = fetchAll();