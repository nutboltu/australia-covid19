const { NovelCovid } = require('novelcovid');
const { write } = require('./file-manager');

const fetchLatestGlobalCases = async () => {
  const track = new NovelCovid();

  const data = await track.all();
  const globalCases = {
    confirmed: data.cases,
    deaths: data.deaths,
    recovered: data.recovered,
  }
  write('./src/data/global_cases.json', JSON.stringify(globalCases));
}

module.exports = fetchLatestGlobalCases;

