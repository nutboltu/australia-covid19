const axios = require("axios");
const cheerio = require("cheerio");
const { write } = require('./file-manager');

const toNumber = (str) => parseInt(str.replace(',', ''));

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
  let nswCases = [];
  let nswConfirmedCases = [];
  let sourcesOfInfection = [];
  let sexAndAgeGroup = [];
  let localDistrictCases = [];

  html(".moh-rteTable-6")
    .filter((i, el) => {
      const tbody = el.children[0];
   if ( i == 0 ) {
      nswCases = [2, 4, 6].reduce((acc, index) => {
        const label = tbody.children[index].children[0].children[0].data;
        const value = tbody.children[index].children[2].children[0].data;
        acc.push({ label, value});
        return acc;
      }, [])
    }
    if ( i == 1 ) {
      // nswConfirmedCases = [2, 4, 6, 8, 10, 12].reduce((acc, index) => {
      //   let label, value;
      //   if (index === 4) {
      //     label = tbody.children[4].children[1].children[0].data;
      //     value = tbody.children[4].children[3].children[0].data;
      //   } else {
      //     label = tbody.children[index].children[0].children[0].data;
      //     value = tbody.children[index].children[2].children[0].data;

      //   }
      //   acc.push({ label, value});
      //   return acc;
      // }, []);
    }
    if ( i == 2 ) {
      sexAndAgeGroup = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20].reduce((acc, index) => {
        const item = {
          age: el.children[1].children[index].children[1].children[0].data,
          female: toNumber(el.children[1].children[index].children[3].children[0].data),
          male: toNumber(el.children[1].children[index].children[5].children[0].data),
          total: toNumber(el.children[1].children[index].children[7].children[0].data),
        }
        acc.push(item);
        return acc;
      }, [])
    }
    if ( i == 3) {
      sourcesOfInfection = [2, 4, 6, 8, 10].reduce((acc, index) => {
        const label = el.children[1].children[index].children[1].children[0].data;
        const value = el.children[1].children[index].children[3].children[0].data;
        acc.push({ label, value});
        return acc;
      }, [])
    }
    if ( i == 4 ) {
      localDistrictCases = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32].reduce((acc, index) => {
        const item = {
          district: el.children[1].children[index].children[1].children[1].children[0].children[0].data.replace('\n ', ''),
          cases: parseInt(el.children[1].children[index].children[3].children[1].children[0].children[0].data),
          test: parseInt(el.children[1].children[index].children[5].children[1].children[0].children[0].data),
          positive_percentage: el.children[1].children[index].children[7].children[1].children[0].children[0].data,
        }
        acc.push(item);
        return acc;
      }, [])
    }
  });
  write('./src/data/nsw/cases.json', JSON.stringify(nswCases));
  // write('./src/data/nsw/confirmed.json', JSON.stringify(nswConfirmedCases));
  write('./src/data/nsw/sources_of_infection.json', JSON.stringify(sourcesOfInfection));
  write('./src/data/nsw/sex_age_group.json', JSON.stringify(sexAndAgeGroup));
  write('./src/data/nsw/local_district_cases.json', JSON.stringify(localDistrictCases));
}

module.exports = fetchNSWData;