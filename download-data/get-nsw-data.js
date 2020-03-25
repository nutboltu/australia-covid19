const axios = require("axios");
const cheerio = require("cheerio");
const { write } = require('./file-manager');

const getNSWData = async () => {
  let response;
  try {
    response = await axios.get("https://www.health.nsw.gov.au/news/Pages/20200325_00.aspx");
    if (response.status !== 200) {
      console.log("ERROR");
    }
  } catch (err) {
    return null;
  }
  const html = cheerio.load(response.data);
  let nswCases = [];
  let sourcesOfInfection = [];
  let sexAndAgeGroup = [];

  html(".moh-rteTable-6")
    .filter((i, el) => {
    if ( i == 0 ) {
      nswCases = [2, 4, 6].reduce((acc, index) => {
        const name = el.children[1].children[index].children[1].children[0].data;
        const value = el.children[1].children[index].children[3].children[0].data
        acc.push({ name, value});
        return acc;
      }, [])
    }
    if ( i == 1 ) {
      sourcesOfInfection = [2, 4, 6, 8].reduce((acc, index) => {
        const name = el.children[1].children[index].children[1].children[0].data;
        const value = el.children[1].children[index].children[3].children[0].data
        acc.push({ name, value});
        return acc;
      }, [])
    }
    if ( i == 2 ) {
      sexAndAgeGroup = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20].reduce((acc, index) => {
        const item = {
          age: el.children[1].children[index].children[1].children[0].data,
          female: el.children[1].children[index].children[3].children[0].data,
          male: el.children[1].children[index].children[5].children[0].data,
          total: el.children[1].children[index].children[7].children[0].data,
        }
        acc.push(item);
        return acc;
      }, [])
    }
  });
  write('./data/australia//nsw/cases.json', JSON.stringify(nswCases));
  write('./data/australia//nsw/sources-of-infection.json', JSON.stringify(sourcesOfInfection));
  write('./data/australia//nsw/sex-age-group.json', JSON.stringify(sexAndAgeGroup));
}

module.exports = getNSWData;