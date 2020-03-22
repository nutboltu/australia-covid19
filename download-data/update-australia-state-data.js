const { read, write  } = require('./file-manager');

function padDigits(number, digits) {
  return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
}
const dateFormat = (date) => {
  const str = date.split('/');
  return `2020-${padDigits(str[0], 2)}-${padDigits(str[1], 2)}`;
};

const objToArray = (obj) => {
  return Object.keys(obj).reduce((acc, key) => {
    const t = dateFormat(key);
    acc.push({ x: t, y: obj[key]})
    return acc;
  }, []);
}
const createStateData = (allData, stateName, filename) => {
  const stateData = allData.find(({ province }) => province === stateName);
    const timeline = {};
    const { cases, deaths, recovered } = stateData.timeline;
    const timelineKey = Object.keys(cases);
    timelineKey.forEach((key, index) => {
        // if (index === 0) {
        //   timeline[key] = {
        //     confirmed: parseInt(cases[key]),
        //     deaths: parseInt(deaths[key]),
        //     recovered: parseInt(recovered[key]),
        //   }
        // } else {
        //   timeline[key] = {
        //     confirmed: parseInt(cases[key]) - parseInt(cases[timelineKey[index -1]]),
        //     deaths: parseInt(deaths[key])- parseInt(deaths[timelineKey[index -1]]),
        //     recovered: parseInt(recovered[key])- parseInt(recovered[timelineKey[index -1]]),
        //   }
        // }
        timeline[key] = {
          confirmed: parseInt(cases[key]),
          deaths: parseInt(deaths[key]),
          recovered: parseInt(recovered[key]),
        }
    })
    stateData.timeline = timeline;
    write(`./data/australia/${filename}.json`, JSON.stringify(stateData));
    return { cases, deaths, recovered }
}

const updateAustraliaStateData = () => {
    const allData = read('./data/time_series.json');
    const states = [{
      state: 'New South Wales',
      code: 'nsw'
    }, {
      state: 'Victoria',
      code: 'vic'
    }, {
      state: 'Queensland',
      code: 'queensland'
    },  {
      state: 'South Australia',
      code: 'sa'
    }, 
    {
      state: 'Western Australia',
      code: 'wa'
    }, 
    {
      state: 'Tasmania',
      code: 'tas'
    }, {
      state: 'Northern Territory',
      code: 'nt'
    }, 
    {
      state: 'Australian Capital Territory',
      code: 'act'
    }];
    const cArray = [];
    const dArray = [];
    const rArray = [];
    states.forEach(value => {
      const { cases, deaths, recovered } = createStateData(allData, value.state, value.code);
      const c = {
        id: value.state,
        data: objToArray(cases),
      };
      cArray.push(c);
      const d = {
        id: value.state,
        data: objToArray(deaths),
      };
      dArray.push(d);
      const r = {
        id: value.state,
        data: objToArray(recovered),
      };
      rArray.push(r);
    });
    write('./data/australia/confirmed.json', JSON.stringify(cArray));
    write('./data/australia/deaths.json', JSON.stringify(dArray));
    write('./data/australia/recovered.json', JSON.stringify(rArray));
}

module.exports = updateAustraliaStateData;