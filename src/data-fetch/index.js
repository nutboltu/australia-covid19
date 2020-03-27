const fetchLatestAusCases = require('./fetch-aus-cases');
const fetchNSWData = require('./fetch-nsw-data');

const fetchAll = async () => {
  await fetchLatestAusCases();
  await fetchNSWData();
}

module.exports = fetchAll();