const axios = require("axios");
const cheerio = require("cheerio");
const { write } = require('./file-manager');
const { toNumber, getTestedFormat } = require('./utils');

const fetchQLDData = async () => {
  let response;
  try {
    response = await axios.get("https://www.qld.gov.au/health/conditions/health-alerts/coronavirus-covid-19/current-status/statistics#testbyhhs");
    if (response.status !== 200) {
      console.log("ERROR");
    }
  } catch (err) {
    return null;
  }
  const html = cheerio.load(response.data);
  let localDistrictCases = [];
  let sexAndAgeGroup = [];

  html("#QLD_Cases_By_HHS")
    .filter((i, el) => {
      localDistrictCases = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33]
      .reduce((acc, index) => {
        acc.push({
          district: el.children[7].children[index].children[1].children[0].data.replace('\n ', '').trim(),
          cases: toNumber(el.children[7].children[index].children[3].children[0].data.trim()),
        })
        return acc;
      }, []);
  });
  html('#QLD_CasesByAgeAndGender')
  .filter((i, el) => {
    sexAndAgeGroup = [1,3,5,7,9,11,13,15,17].reduce((acc, index) => {
      const item = {
        age: el.children[3].children[index].children[1].children[0].data,
        female: toNumber(el.children[3].children[index].children[3].children[0].data),
        male: toNumber(el.children[3].children[index].children[5].children[0].data),
      }
      acc.push(item);
      return acc;
    }, [])
  });
  write('./src/data/qld/sex_age_group.json', JSON.stringify(sexAndAgeGroup));
  write('./src/data/qld/local_district_cases.json', JSON.stringify(localDistrictCases));
};

// module.exports = fetchQLDData();
module.exports = fetchQLDData;