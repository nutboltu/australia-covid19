const axios = require('axios');
const csv = require('csvtojson');
const { stateNames } = require('../constants/states');

const base = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/"

const fetchLast24hAusCases = async () => {
  let confirmedResponse, deathsResponse, recResponse;
  try {
    confirmedResponse = await axios.get(`${base}time_series_covid19_confirmed_global.csv`);
    deathsResponse = await axios.get(`${base}time_series_covid19_deaths_global.csv`);
    recResponse = await axios.get(`${base}time_series_covid19_recovered_global.csv`);
  } catch (err) {
      console.log(err)
      return null;
  }

  const confirmedData = await csv({
    noheader:true,
    output: "csv"
  }).fromString(confirmedResponse.data);
  
  const deathData = await csv({
    noheader:true,
    output: "csv"
  }).fromString(deathsResponse.data);

  const recoveredData = await csv({
    noheader:true,
    output: "csv"
  }).fromString(recResponse.data);
  
  let last24hAusCases = confirmedData.reduce((acc, item) => {
    if (stateNames.includes(item[0])) {
      acc[item[0]] = {
        ...acc[item[0]],
        last_24h_confirmed: item[item.length - 1] - item[item.length - 2],
      }
    }
    return acc;
  }, {});
  last24hAusCases = deathData.reduce((acc, item) => {
    if (stateNames.includes(item[0])) {
      acc[item[0]] = {
        ...acc[item[0]],
        last_24h_deaths: item[item.length - 1] - item[item.length - 2],
      }
    }
    return acc;
  }, last24hAusCases);
  last24hAusCases = recoveredData.reduce((acc, item) => {
    if (stateNames.includes(item[0])) {
      acc[item[0]] = {
        ...acc[item[0]],
        last_24h_recovered: item[item.length - 1] - item[item.length - 2],
      }
    }
    return acc;
  }, last24hAusCases);
 
  return last24hAusCases;
}

module.exports = fetchLast24hAusCases;