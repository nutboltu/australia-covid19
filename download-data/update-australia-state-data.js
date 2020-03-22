const { read, write  } = require('./file-manager');

const createStateData = (allData, stateName, filename) => {
  const stateData = allData.find(({ province }) => province === stateName);
    const timeline = {};
    const { cases, deaths, recovered } = stateData.timeline;
    const timelineKey = Object.keys(cases);
    timelineKey.forEach((key, index) => {
        if (index === 0) {
          timeline[key] = {
            confirmed: parseInt(cases[key]),
            deaths: parseInt(deaths[key]),
            recovered: parseInt(recovered[key]),
          }
        } else {
          timeline[key] = {
            confirmed: parseInt(cases[key]) - parseInt(cases[timelineKey[index -1]]),
            deaths: parseInt(deaths[key])- parseInt(deaths[timelineKey[index -1]]),
            recovered: parseInt(recovered[key])- parseInt(recovered[timelineKey[index -1]]),
          }
        }
    })
    stateData.timeline = timeline;
    write(`./data/australia/${filename}.json`, JSON.stringify(stateData));
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
    }];
  
    states.forEach(value => {
      createStateData(allData, value.state, value.code);
    })
}

module.exports = updateAustraliaStateData;