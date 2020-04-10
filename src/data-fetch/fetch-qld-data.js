const axios = require("axios");
const cheerio = require("cheerio");
const { write } = require('./file-manager');
const { toNumber, getTestedFormat } = require('./utils');

const fetchQLDData = async () => {
  let response;
  try {
    response = await axios.get("https://www.qld.gov.au/health/conditions/health-alerts/coronavirus-covid-19/current-status/current-status-and-contact-tracing-alerts");
    if (response.status !== 200) {
      console.log("ERROR");
    }
  } catch (err) {
    return null;
  }
  const html = cheerio.load(response.data);
  let localDistrictCases = [];
  
  html("#table92250")
    .filter((i, el) => {
      localDistrictCases = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
      .reduce((acc, index) => {
        acc.push({
          district: el.children[1].children[index].children[0].children[0].data.trim(),
          cases: toNumber(el.children[1].children[index].children[4].children[0].data.trim()),
        })
        return acc;
      }, []);
  });
  write('./src/data/qld/local_district_cases.json', JSON.stringify(localDistrictCases));
};

// module.exports = fetchQLDData();
module.exports = fetchQLDData;