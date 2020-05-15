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
const fetchTestConductedData = async () => {
  let response;
  let responseState;
  try {
    response = await axios.get("https://covidlive.com.au");
    if (response.status !== 200) {
      console.log("ERROR");
    }
  } catch (err) {
    console.log(err)
    return null;
  }
  const html = cheerio.load(response.data);
  const arr = [2,4,6,8,10,12,14,16,18];
  const testConducted = {
    NSW: {
      population: 8118000,
    },
    VIC: {
      population: 6629900,
    },
    ACT: {
      population: 428100,
    },
    SA: {
      population: 1756500,
    },
    WA: {
      population: 2630600,
    },
    NT: {
      population: 245600,
    },
    QLD: {
      population: 5115500,
    },
    TAS: {
      population: 535500,
    },
    AUS: {
      population: 25464100,
    }
  };

  html('.POSITIVE-TEST-RATE')
  .filter((i, el) => {
    if (i == 1) {
     arr.forEach(index => {
        const stateName = el.children[0].children[index].children[0].children[0].children[0].data.trim();
        testConducted[stateMap[stateName]]['confirmed'] = toNumber(el.children[0].children[index].children[1].children[0].data);
        // testConducted[stateMap[stateName]]['tested'] = toNumber(el.children[0].children[index].children[2].children[0].data);
        testConducted[stateMap[stateName]]['positive'] = el.children[0].children[index].children[3].children[0].data.trim();
      });
    }
  });
  html('table')
  .filter((i, el) => {
    if (i == 4) {
      arr.forEach(index => {
        const stateName = el.children[0].children[index].children[0].children[0].children[0].data.trim();
        testConducted[stateMap[stateName]]['tested'] = toNumber(el.children[0].children[index].children[1].children[0].data);
      });
    }
  })
 
  write('./src/data/aus_test_conducted.json', JSON.stringify(testConducted));
};

module.exports = fetchTestConductedData;