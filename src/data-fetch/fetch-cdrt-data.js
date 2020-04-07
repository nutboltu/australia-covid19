const axios = require("axios");
const cheerio = require("cheerio");
const { write } = require('./file-manager');
const { toNumber, getTestedFormat, getSourceOfInfectionFormat } = require('./utils');

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
const fetchCDRTData = async () => {
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
  const CDRT = {
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
  html('table')
  .filter((i, el) => {
    if (i == 1) {
      arr.forEach(index => {
        const stateName = el.children[0].children[index].children[0].children[0].children[0].data.trim();
        CDRT[stateMap[stateName]]['confirmed'] = toNumber(el.children[0].children[index].children[1].children[0].data);
      });
    }
    if (i == 2) {
      arr.forEach(index => {
        const stateName = el.children[0].children[index].children[0].children[0].children[0].data.trim();
        CDRT[stateMap[stateName]]['tested'] = toNumber(el.children[0].children[index].children[1].children[0].data);
      });
    }
    if (i == 7) {
      arr.forEach(index => {
        const stateName = el.children[0].children[index].children[0].children[0].children[0].data.trim();
        CDRT[stateMap[stateName]]['deaths'] = toNumber(el.children[0].children[index].children[1].children[0].data);
      });
    }
    if (i == 8) {
      arr.forEach(index => {
        const stateName = el.children[0].children[index].children[0].children[0].children[0].data.trim();
        CDRT[stateMap[stateName]]['recovered'] = toNumber(el.children[0].children[index].children[1].children[0].data);
      });
      write('./src/data/aus_cdrt.json', JSON.stringify(CDRT));
    }
  });

};

module.exports = fetchCDRTData;