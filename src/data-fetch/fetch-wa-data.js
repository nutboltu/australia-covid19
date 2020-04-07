const axios = require("axios");
const cheerio = require("cheerio");
const { write } = require('./file-manager');
const { toNumber, getTestedFormat } = require('./utils');

const fetchWAData = async () => {
  let response;
  try {
    response = await axios.get("https://ww2.health.wa.gov.au/Articles/A_E/Coronavirus/COVID19-statistics");
    if (response.status !== 200) {
      console.log("ERROR");
    }
  } catch (err) {
    return null;
  }
  const html = cheerio.load(response.data);
  let waTested = [];
  let localDistrictCases = [];

  html("table")
    .filter((i, el) => {
      if (i == 0 ) {
        const testedNegative = toNumber(el.children[1].children[3].children[3].children[0].data);
        const confirmed = toNumber(el.children[1].children[5].children[3].children[0].data);
        waTested = getTestedFormat(confirmed, confirmed + testedNegative);
      }
      if (i == 1) {
        localDistrictCases = [3,5,7,9,11,13,15]
        .reduce((acc, index) => {
          acc.push({
            district: el.children[1].children[index].children[1].children[0].data.trim(),
            cases: toNumber(el.children[1].children[index].children[3].children[0].data.trim()),
          })
          return acc;
        }, []);
      }
  });
  write('./src/data/wa/tested.json', JSON.stringify(waTested));
  write('./src/data/wa/local_district_cases.json', JSON.stringify(localDistrictCases));
};

module.exports = fetchWAData;