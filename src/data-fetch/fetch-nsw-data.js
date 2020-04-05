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
  try {
    response = await axios.get("https://www.health.nsw.gov.au/Infectious/diseases/Pages/covid-19-latest.aspx#statistics");
    if (response.status !== 200) {
      console.log("ERROR");
    }
  } catch (err) {
    return null;
  }
  const html = cheerio.load(response.data);
  let nswCases = {};
  let nswTested = [];
  let nswConfirmedCases = [];
  let sourcesOfInfection = [];
  let sexAndAgeGroup = [];
  let localDistrictCases = [];

  html(".moh-rteTable-6")
    .filter((i, el) => {
      const tbody = el.children[0];
    // if ( i != 4) {
    //   return;
    // }
    if ( i == 0 ) {
      const totalConfirmed = toNumber(tbody.children[2].children[2].children[0].data);
      const totalTested= toNumber(tbody.children[6].children[2].children[0].data);
      nswTested = getTestedFormat(totalConfirmed, totalTested);
    }
    if ( i == 1 ) {
      nswConfirmedCases.push({
        label: tbody.children[2].children[0].children[0].data,
        value: tbody.children[2].children[2].children[0].data,
      })
      nswConfirmedCases.push({
        label: tbody.children[8].children[0].children[0].data,
        value: tbody.children[8].children[2].children[0].data,
      })
    }
    if ( i == 2 ) {
      sexAndAgeGroup = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20].reduce((acc, index) => {
        const item = {
          age: tbody.children[index].children[1].children[0].data,
          female: toNumber(tbody.children[index].children[3].children[0].data),
          male: toNumber(tbody.children[index].children[5].children[0].data),
          total: toNumber(tbody.children[index].children[7].children[0].data),
        }
        acc.push(item);
        return acc;
      }, [])
    }
    if ( i == 3) {
      sourcesOfInfection = [2, 4, 6, 8].reduce((acc, index, i) => {
        const value = toNumber(tbody.children[index].children[2].children[0].data);
        acc.push({ id: sources[i], label: sources[i], value});
        return acc;
      }, [])
    }
    if ( i == 4 ) {
      localDistrictCases = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30].reduce((acc, index) => {
        const item = {
          district: el.children[0].children[index].children[0].children[0].data.replace('\n ', ''),
          cases: toNumber(el.children[0].children[index].children[2].children[0].data),
          test: toNumber(el.children[0].children[index].children[4].children[0].data),
          positive_percentage: el.children[0].children[index].children[6].children[0].data,
        }
        acc.push(item);
        return acc;
      }, []);
    }
  });
  nswCases = {
    confirmed: toNumber(nswConfirmedCases[0].value),
    deaths: toNumber(nswConfirmedCases[1].value),
  }
  // console.log(nswCases, nswTested, nswConfirmedCases, sourcesOfInfection, sexAndAgeGroup, localDistrictCases)
  write('./src/data/nsw/cases.json', JSON.stringify(nswCases));
  write('./src/data/nsw/tested.json', JSON.stringify(nswTested));
  write('./src/data/nsw/confirmed.json', JSON.stringify(nswConfirmedCases));
  write('./src/data/nsw/sources_of_infection.json', JSON.stringify(sourcesOfInfection));
  write('./src/data/nsw/sex_age_group.json', JSON.stringify(sexAndAgeGroup));
  write('./src/data/nsw/local_district_cases.json', JSON.stringify(localDistrictCases));
}

// module.exports = fetchNSWData();
module.exports = fetchNSWData;