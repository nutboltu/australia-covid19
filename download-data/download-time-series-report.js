const axios = require('axios');
const csv = require('csvtojson');
const { write } = require('./file-manager');

var base = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/"

const downloadTimeSeries = async () => {
  let confirmedResponse, deathsResponse, recResponse;
  try {
    confirmedResponse = await axios.get(`${base}time_series_19-covid-Confirmed.csv`);
    deathsResponse = await axios.get(`${base}time_series_19-covid-Deaths.csv`);
    recResponse = await axios.get(`${base}time_series_19-covid-Recovered.csv`);
  } catch (err) {
      console.log(err)
      return null;
  }

  const confirmedCases = await csv({
    noheader:true,
    output: "csv"
  }).fromString(confirmedResponse.data);
  
  const parsedDeaths = await csv({
    noheader:true,
    output: "csv"
  }).fromString(deathsResponse.data);

  const recParsed = await csv({
    noheader:true,
    output: "csv"
  }).fromString(recResponse.data);
  
  // to store parsed data
  const result = [];
  const timelineKey = confirmedCases[0].splice(4);
  // confirmedCases.pop();
  // parsedDeaths.pop();
  // recParsed.pop();

  for (let b = 0; b < parsedDeaths.length;) {
    const timeline = {
      cases: {},
      deaths: {},
      recovered: {}
    }
    const c = confirmedCases[b].splice(4);
    const r = recParsed[b].splice(4);
    const d = parsedDeaths[b].splice(4);
    for (let i = 0; i < c.length; i++) {
      timeline.cases[timelineKey[i]] = c[i]
      timeline.deaths[timelineKey[i]] = d[i]
      timeline.recovered[timelineKey[i]] = r[i]
    }
    result.push({
      country: confirmedCases[b][1],
      province: confirmedCases[b][0] === "" ? null : confirmedCases[b][0],
      timeline
    })
    b++;
  }
  
  const data = JSON.stringify(result);
  write('./data/time_series.json', data);
  console.log(`Updated JHU CSSE Historical: ${result.length} locations`);
}

module.exports = downloadTimeSeries;