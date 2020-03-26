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
  let ausConfirmedCases = [];
  html(".health-table__responsive")
    .filter((_, el) => {
      const tbody = el.children[0].children[2];
      ausConfirmedCases = [3, 5, 7, 9, 11, 13, 15, 17, 19]
        .reduce((acc, index) => {
          const location = tbody.children[index].children[1].children[1].children[0].data || 'Total';
          const cases =  index === 3 ?
            tbody.children[index].children[3].children[1].children[0].data
            : tbody.children[index].children[3].children[0].data;
          acc.push({ location, cases });
          return acc;
      }, []);

  });
  write('./data/aus_confirmed.json', JSON.stringify(ausConfirmedCases));
}

module.exports = getAusConfirmedData();