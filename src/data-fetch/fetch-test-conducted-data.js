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
const fetchTestConductedData = async () => {
  let response;
  let responseState;
  try {
    response = await axios.get("https://covidlive.com.au");
    responseState = await axios.get('https://covidlive.com.au/state');
    if (response.status !== 200 || responseState.status !==200) {
      console.log("ERROR");
    }
  } catch (err) {
    console.log(err)
    return null;
  }
  const html = cheerio.load(response.data);
  const htmlState = cheerio.load(responseState.data);
  const arr = [2,4,6,8,10,12,14,16,18];
  const testConducted = {
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
    if (i == 2) {
      arr.forEach(index => {
        const stateName = el.children[0].children[index].children[0].children[0].children[0].data.trim();
        testConducted[stateMap[stateName]]['tested'] = toNumber(el.children[0].children[index].children[1].children[0].data);
        testConducted[stateMap[stateName]]['positive'] = el.children[0].children[index].children[4].children[0].data.trim();

      });
    }
  });
 
  htmlState('.CASES-PER-CAPITA')
  .filter((i, el) => {
    arr.forEach(index => {
      const stateName = el.children[0].children[index].children[0].children[0].children[0].data.trim();
      testConducted[stateMap[stateName]]['confirmed'] = toNumber(el.children[0].children[index].children[1].children[0].data);
      testConducted[stateMap[stateName]]['population'] = toNumber(el.children[0].children[index].children[2].children[0].data);
    });
  });
  write('./src/data/aus_test_conducted.json', JSON.stringify(testConducted));

};

module.exports = fetchTestConductedData;