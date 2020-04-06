const axios = require("axios");
const cheerio = require("cheerio");
const { write } = require('./file-manager');
const { toNumber, getTestedFormat } = require('./utils');

const fetchVICData = async () => {
  let response;
  try {
    response = await axios.get("https://www.dhhs.vic.gov.au/coronavirus-update-victoria-6-april-2020");
    if (response.status !== 200) {
      console.log("ERROR");
    }
  } catch (err) {
    return null;
  }
  const html = cheerio.load(response.data);
  let localDistrictCases = [];
  
  html("table")
    .filter((i, el) => {
    if (i ==0) {
          localDistrictCases = [3,5,7,9,11,13,15,17,19,21,23,
            25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,
            57,59,61,63, 65,67,69,71,73,75,77,79,81
            ]
            .reduce((acc, index) => {
                acc.push({
                district: el.children[1].children[index].children[1].children[0].data.trim(),
                cases: toNumber(el.children[1].children[index].children[3].children[0].data.trim()),
                })
                return acc;
            }, []);
    }
  });
  

  write('./src/data/vic/local_district_cases.json', JSON.stringify(localDistrictCases));
};

module.exports = fetchVICData;