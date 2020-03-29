const axios = require('axios');
const { write } = require('./file-manager');

const fetchAusTopology = async () => {
  let dailyReport;
  try {
    dailyReport = await axios.get(`https://raw.githubusercontent.com/tonywr71/GeoJson-Data/master/australian-states.json`);

  } catch (err) {
      console.log(err)
      return null;
  }

  const { data } = dailyReport;
  const { features } = data;
  const stateCode = ['NSW', 'VIC', 'QLD', 'SA', 'WA', 'TAS', 'NT', 'ACT'];
  const topology = features.map(state => {
    state.id = stateCode[state.id];
    return state;
  });
  write('./src/data/topology.json', JSON.stringify(topology));
}


module.exports = fetchAusTopology();