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
  let saCases = {};
  let sexAndAgeGroup = [];
  let sourcesOfInfection = [];
  let saTested = [];
  
  html("table")
    .filter((i, el) => {
      if (i == 0 ) {
        saCases = {
          confirmed: toNumber(el.children[1].children[3].children[3].children[1].children[0].data.trim()),
          deaths: toNumber(el.children[1].children[9].children[3].children[1].children[0].data.trim()),
        };
      }
      if (i ==1) {
        sexAndAgeGroup = [3, 5, 7, 9, 11, 13, 15, 17, 19, 21]
        .reduce((acc, index) => {
          const item = {
            age: el.children[3].children[index].children[1].children[0].data,
            female: toNumber(el.children[3].children[index].children[3].children[0].data),
            male: toNumber(el.children[3].children[index].children[5].children[0].data),
          }
          acc.push(item);
          return acc;
        }, [])
      }
       if (i == 2) {
         const overseas = el.children[1].children[3].children[3].children[1].children[0].data;
         const contacted = el.children[1].children[5].children[3].children[1].children[0].data;
         const local = el.children[1].children[9].children[3].children[1].children[0].data;
         const underInvestigation = el.children[1].children[11].children[3].children[1].children[0].data;
         sourcesOfInfection = getSourceOfInfectionFormat({
           overseas,
           contacted,
           local,
           underInvestigation,
         });
       }
  });
  html('.wysiwyg')
  .filter((i, el) => {
    const ulEl = el.children.filter((i) => i.name =='ul');
    const totalTested = ulEl[4].children[1].children[0].data.split(' ')[4];
    saTested = getTestedFormat(saCases.confirmed, toNumber(totalTested));
  })
  write('./src/data/sa/cases.json', JSON.stringify(saCases));
  write('./src/data/sa/tested.json', JSON.stringify(saTested));
  write('./src/data/sa/sources_of_infection.json', JSON.stringify(sourcesOfInfection));
  write('./src/data/sa/sex_age_group.json', JSON.stringify(sexAndAgeGroup));
};

module.exports = fetchSAData;