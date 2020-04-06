const axios = require("axios");
const cheerio = require("cheerio");
const { write } = require('./file-manager');
const { toNumber, getTestedFormat } = require('./utils');

const sources = [
  'Travel overseas',
  'Contact with a confirmed case',
  'Locally acquired – unknown source',
  'Under investigation'
]
const fetchNSWData = async () => {
  let response;
  let responseLD;
  try {
    response = await axios.get("https://www.health.nsw.gov.au/Infectious/diseases/Pages/covid-19-latest.aspx#statistics");
    responseLD = await axios.get("https://www.health.nsw.gov.au/Infectious/diseases/Pages/covid-19-lhd.aspx");
    if (response.status !== 200) {
      console.log("ERROR");
    }
  } catch (err) {
    return null;
  }
  const html = cheerio.load(response.data);
  const ldHtml = cheerio.load(responseLD.data);
  let nswCases = {};
  let nswTested = [];
  let nswConfirmedCases = [];
  let sourcesOfInfection = [];
  let sexAndAgeGroup = [];
  let localDistrictCases = [];
  html(".moh-rteTable-6")
    .filter((i, el) => {
    if ( i == 0 ) {
      const confirmed = toNumber(el.children[1].children[2].children[2].children[0].data);
      const totalNegative= toNumber(el.children[1].children[8].children[3].children[0].data);
      const deaths = toNumber(el.children[1].children[10].children[2].children[0].data);
      nswTested = getTestedFormat(confirmed, totalNegative + confirmed);
      nswCases = {
        confirmed,
        deaths,
      }
    }
    if ( i == 1 ) {
      sexAndAgeGroup = [3,5,7,9,11,13,15,17,19,21].reduce((acc, index) => {
        const item = {
          age: el.children[1].children[index].children[1].children[0].data,
          female: toNumber(el.children[1].children[index].children[3].children[0].data),
          male: toNumber(el.children[1].children[index].children[5].children[0].data),
        }
        acc.push(item);
        return acc;
      }, [])
    }
    if ( i == 2) {
      sourcesOfInfection = [3,5,7,9].reduce((acc, index, i) => {
        const value = toNumber(el.children[1].children[index].children[3].children[0].data);
        acc.push({ id: sources[i], label: sources[i], value});
        return acc;
      }, [])
    }
  });

  ldHtml(".moh-rteTable-6")
  .filter((i, el) => {
      if (i == 0) {
          localDistrictCases = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30].reduce((acc, index) => {
            const item = {
              district: el.children[0].children[index].children[1].children[0].data.replace('\n ', ''),
              cases: toNumber(el.children[0].children[index].children[3].children[0].data),
              test: toNumber(el.children[0].children[index].children[5].children[0].data),
              positive_percentage: el.children[0].children[index].children[7].children[0].data,
            }
            acc.push(item);
            return acc;
          }, []);
      }
  })

  // console.log(nswCases, nswTested, nswConfirmedCases, sourcesOfInfection, sexAndAgeGroup, localDistrictCases)
  write('./src/data/nsw/cases.json', JSON.stringify(nswCases));
  write('./src/data/nsw/tested.json', JSON.stringify(nswTested));
  write('./src/data/nsw/sources_of_infection.json', JSON.stringify(sourcesOfInfection));
  write('./src/data/nsw/sex_age_group.json', JSON.stringify(sexAndAgeGroup));
  write('./src/data/nsw/local_district_cases.json', JSON.stringify(localDistrictCases));
}

// module.exports = fetchNSWData();
module.exports = fetchNSWData;