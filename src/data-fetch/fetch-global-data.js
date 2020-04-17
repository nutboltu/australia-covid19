const axios = require('axios');
const { write } = require('./file-manager');

const fetchLatestGlobalCases = async () => {
  const data = await axios.get(`https://corona.lmao.ninja/v2/all?yesterday=false`);
  const globalCases = {
    confirmed: data.data.cases,
    deaths: data.data.deaths,
    recovered: data.data.recovered,
  }
  write('./src/data/global_cases.json', JSON.stringify(globalCases));
}

module.exports = fetchLatestGlobalCases;

