const axios = require("axios");
const cheerio = require("cheerio");
const { write } = require('./file-manager');
const { toNumber, getSourceOfInfectionFormat } = require('./utils');

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
    NSW: {
      icu_beds: 874,
    },
    VIC: {
      icu_beds: 476,
    },
    ACT: {
      icu_beds: 44,
    },
    SA: {
      icu_beds: 188,
    },
    WA: {
      icu_beds: 162,
    },
    NT: {
      icu_beds: 22,
    },
    QLD: {
      icu_beds: 413,
    },
    TAS: {
      icu_beds: 50,
    },
    AUS: {
      icu_beds: 2229,
    }
  };
  const sourceOfInfections = {
    NSW: {},
    VIC: {},
    ACT: {},
    SA: {},
    WA: {},
    NT: {},
    QLD: {},
    TAS: {},
    AUS: {}
  }
  html('.ACTIVE-CASES')
  .filter((i, el) => {
    if (i == 1) {
      arr.forEach(index => {
        const stateName = el.children[0].children[index].children[0].children[0].children[0].data.trim();
        activeCases[stateMap[stateName]]['active'] = toNumber(el.children[0].children[index].children[1].children[0].data);
      });
    }
  });
  html('.HOSPITALISED')
  .filter((i, el) => {
    if (i == 1) {
      arr.forEach(index => {
        const stateName = el.children[0].children[index].children[0].children[0].children[0].data.trim();
        activeCases[stateMap[stateName]]['hospitalised'] = toNumber(el.children[0].children[index].children[1].children[0].data);
        activeCases[stateMap[stateName]]['icu'] = toNumber(el.children[0].children[index].children[2].children[0].data);
      });
    }
  });
  html('.SOURCE-OF-INFECTION')
  .filter((i, el) => {
    if (i == 1) {
      arr.forEach(index => {
        const stateName = el.children[0].children[index].children[0].children[0].children[0].data.trim();
        const overseas = toNumber(el.children[0].children[index].children[1].children[0].data);
        const contacted = toNumber(el.children[0].children[index].children[2].children[0].data);
        const local = toNumber(el.children[0].children[index].children[3].children[0].data);
        const underInvestigation = toNumber(el.children[0].children[index].children[4].children[0].data);
        sourceOfInfections[stateMap[stateName]] = getSourceOfInfectionFormat({ overseas, contacted, local, underInvestigation });
      });
    }
  });
  write('./src/data/aus_source_of_infections.json', JSON.stringify(sourceOfInfections));
  write('./src/data/aus_active_cases.json', JSON.stringify(activeCases));
};

// module.exports = fetchICUData();
module.exports = fetchICUData;