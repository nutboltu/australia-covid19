const axios = require("axios");
const cheerio = require("cheerio");
const { write } = require('./file-manager');
const { toNumber } = require('./utils');

const stateMap = {
  'New South Wales': 'NSW',
  'Victoria': 'VIC',
  'South Australia': 'SA',
  'Western Australia': 'WA',
  'Northern Territory': 'NT',
  'Tasmania': 'TAS',
  'Queensland': 'QLD',
  'ACT': 'ACT',
  'Australia': 'AUS'
}
const fetch24hData = async () => {
  let response;
  try {
    response = await axios.get("https://covidlive.com.au");
    if (response.status !== 200) {
      console.log("ERROR");
    }
  } catch (err) {
    return null;
  }
  const html = cheerio.load(response.data);
  const arr = [2, 4, 6, 8, 10, 12, 14, 16];
  const last24hData = {
    NSW: {},
    VIC: {},
    ACT: {},
    SA: {},
    WA: {},
    NT: {},
    QLD: {},
    TAS: {},
   //  Total: {}
  };
  html('table')
  .filter((i, el) => {
    if (i == 1) {
       arr.forEach(index => {
        const stateName = el.children[0].children[index].children[0].children[0].children[0].data.trim();
        const a = el.children[0].children[index].children[3].children[0];
        const b = a.data || a.children[0].data;
        const value = b === '-' ? '0' : b;
        last24hData[stateMap[stateName]]['confirmed'] = toNumber(value);
      });
    }
    if (i == 3) {
      arr.forEach(index => {
        const stateName = el.children[0].children[index].children[0].children[0].children[0].data.trim();
        const a = el.children[0].children[index].children[3].children[0];
        const b = a.data || a.children[0].data;
        const value = b === '-' ? '0' : b;
        last24hData[stateMap[stateName]]['tested'] = toNumber(value);
      });
    }
  });
  write('./src/data/aus_last_24h_cases.json', JSON.stringify(last24hData));

};

// module.exports = fetch24hData();
module.exports = fetch24hData;