const axios = require("axios");
const cheerio = require("cheerio");
const { write } = require('./file-manager');
const { toNumber, getTestedFormat, getSourceOfInfectionFormat } = require('./utils');

const fetchSAData = async () => {
  let response;
  try {
    response = await axios.get("https://www.sahealth.sa.gov.au/wps/wcm/connect/public+content/sa+health+internet/health+topics/health+topics+a+-+z/covid+2019/latest+updates/confirmed+and+suspected+cases+of+covid-19+in+south+australia");
    if (response.status !== 200) {
      console.log("ERROR");
    }
  } catch (err) {
    return null;
  }
  const html = cheerio.load(response.data);
  let sexAndAgeGroup = [];
  let sourcesOfInfection = [];

  html("table")
    .filter((i, el) => {
      // if (i != 2) {
      //   return;
      // }
      if (i ==1) {
        sexAndAgeGroup = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]
        .reduce((acc, index) => {
          const item = {
            age: el.children[5].children[index].children[1].children[0].data,
            female: toNumber(el.children[5].children[index].children[3].children[0].data),
            male: toNumber(el.children[5].children[index].children[5].children[0].data),
          }
          acc.push(item);
          return acc;
        }, [])
       // console.log(el.children[5])
      }
       if (i == 2) {
         const overseas = el.children[5].children[1].children[3].children[0].data;
         const contacted = el.children[5].children[3].children[3].children[0].data;
         const local = el.children[5].children[5].children[3].children[0].data;
         const underInvestigation = el.children[5].children[9].children[3].children[0].data;
         sourcesOfInfection = getSourceOfInfectionFormat({
           overseas,
           contacted,
           local,
           underInvestigation,
         });
       }
  });
  //console.log(sexAndAgeGroup, sourcesOfInfection)
  write('./src/data/sa/sources_of_infection.json', JSON.stringify(sourcesOfInfection));
  write('./src/data/sa/sex_age_group.json', JSON.stringify(sexAndAgeGroup));
};

// module.exports = fetchSAData();
module.exports = fetchSAData;