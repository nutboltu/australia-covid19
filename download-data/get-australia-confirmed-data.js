const axios = require("axios");
const cheerio = require("cheerio");
const { write } = require('./file-manager');

const getAusConfirmedData = async () => {
  let response;
  try {
    response = await axios.get("https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert/coronavirus-covid-19-current-situation-and-case-numbers");
    if (response.status !== 200) {
      console.log("ERROR");
    }
  } catch (err) {
    return null;
  }
  const html = cheerio.load(response.data);
  
  html(".health-table__responsive")
    .filter((i, el) => {
      console.log('i', i, 'el', el.children[0].children[2].children[3].children[1].children[1].children[0].data)
      console.log('i', i, 'el', el.children[0].children[2].children[3].children[3].children[1].children[0].data)

      console.log('i', i, 'el', el.children[0].children[2].children[5].children[1].children[1].children[0].data)
      console.log('i', i, 'el', el.children[0].children[2].children[5].children[3].children[0].data)
      console.log('i', i, 'el', el.children[0].children[2].children[7].children[1].children[1].children[0].data)
      console.log('i', i, 'el', el.children[0].children[2].children[7].children[3].children[0].data)
      console.log('i', i, 'el', el.children[0].children[2].children[9].children[1].children[1].children[0].data)
      console.log('i', i, 'el', el.children[0].children[2].children[9].children[3].children[0].data)
      console.log('i', i, 'el', el.children[0].children[2].children[11].children[1].children[1].children[0].data)
      console.log('i', i, 'el', el.children[0].children[2].children[11].children[3].children[0].data)
      console.log('i', i, 'el', el.children[0].children[2].children[13].children[1].children[1].children[0].data)
      console.log('i', i, 'el', el.children[0].children[2].children[13].children[3].children[0].data)
      console.log('i', i, 'el', el.children[0].children[2].children[15].children[1].children[1].children[0].data)
      console.log('i', i, 'el', el.children[0].children[2].children[15].children[3].children[0].data)
      console.log('i', i, 'el', el.children[0].children[2].children[17].children[1].children[1].children[0].data)
      console.log('i', i, 'el', el.children[0].children[2].children[17].children[3].children[0].data)
      console.log('i', i, 'el', el.children[0].children[2].children[19].children[1].children[1].children[0].data)
      console.log('i', i, 'el', el.children[0].children[2].children[19].children[3].children[0].data)
      
  });
  // write('./data/australia//nsw/cases.json', JSON.stringify(nswCases));
  // write('./data/australia//nsw/sources-of-infection.json', JSON.stringify(sourcesOfInfection));
  // write('./data/australia//nsw/sex-age-group.json', JSON.stringify(sexAndAgeGroup));
}

module.exports = getAusConfirmedData();