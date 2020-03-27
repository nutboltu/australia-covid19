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
    const month  = new Date(t).getMonth();
    const thisMonth = new Date().getMonth();
    if (month == thisMonth) {
      acc.push({ x: t, y: obj[key]})
    }
    return acc;
  }, []);
}
const createStateData = (allData, stateName, filename) => {
  const stateData = allData.find(({ province }) => province === stateName);
    const timeline = {};
    const { cases, deaths, recovered } = stateData.timeline;
    const timelineKey = Object.keys(cases);
    timelineKey.forEach((key, index) => {
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
      name: 'New South Wales',
      code: 'NSW'
    }, {
      name: 'Victoria',
      code: 'VIC'
    }, {
      name: 'Queensland',
      code: 'QLD'
    },  {
      name: 'South Australia',
      code: 'SA'
    }, 
    {
      name: 'Western Australia',
      code: 'WA'
    }, 
    {
      name: 'Tasmania',
      code: 'TAS'
    }, {
      name: 'Northern Territory',
      code: 'NT'
    }, 
    {
      name: 'Australian Capital Territory',
      code: 'ACT'
    }];

    const cArray = [];
    const dArray = [];
    const rArray = [];
    states.forEach(value => {
      const { cases, deaths, recovered } = createStateData(allData, value.name, value.code);
      const c = {
        id: value.code,
        data: objToArray(cases),
      };
      cArray.push(c);
      const d = {
        id: value.code,
        data: objToArray(deaths),
      };
      dArray.push(d);
      const r = {
        id: value.code,
        data: objToArray(recovered),
      };
      rArray.push(r);
    });
    write('./data/australia/confirmed.json', JSON.stringify(cArray));
    write('./data/australia/deaths.json', JSON.stringify(dArray));
    write('./data/australia/recovered.json', JSON.stringify(rArray));
}

module.exports = updateAustraliaStateData;