const fetchLatestAusCases = require('./fetch-aus-cases');
const fetchNSWData = require('./fetch-nsw-data');
const fetchLatestGlobalCases = require('./fetch-global-cases');

const fetchAll = async () => {
  await fetchLatestAusCases();
  // await fetchNSWData();
  await fetchLatestGlobalCases();
}

module.exports = fetchAll();