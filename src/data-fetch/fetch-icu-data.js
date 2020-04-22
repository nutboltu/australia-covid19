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
const fetchICUData = async () => {
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
  const arr = [2,4,6,8,10,12,14,16,18];
  const activeCases = {
    NSW: {},
    VIC: {},
    ACT: {},
    SA: {},
    WA: {},
    NT: {},
    QLD: {},
    TAS: {},
    AUS: {}
  };
  html('.ACTIVE-CASES')
  .filter((i, el) => {
    arr.forEach(index => {
      const stateName = el.children[0].children[index].children[0].children[0].children[0].data.trim();
      activeCases[stateMap[stateName]]['active'] = toNumber(el.children[0].children[index].children[1].children[0].data);
    });
  });
  html('table')
  .filter((i, el) => {
    if (i == 9) {
      arr.forEach(index => {
        const stateName = el.children[0].children[index].children[0].children[0].children[0].data.trim();
        activeCases[stateMap[stateName]]['icu'] = toNumber(el.children[0].children[index].children[1].children[0].data);
        activeCases[stateMap[stateName]]['icu_beds'] = toNumber(el.children[0].children[index].children[4].children[0].data);
      });
    }
  });
  write('./src/data/aus_active_cases.json', JSON.stringify(activeCases));

};

// module.exports = fetchICUData();
module.exports = fetchICUData;