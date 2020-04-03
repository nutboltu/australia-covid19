const axios = require("axios");
const cheerio = require("cheerio");
const { write } = require('./file-manager');
const { toNumber, getTestedFormat } = require('./utils');

const fetchACTData = async () => {
  let response;
  try {
    response = await axios.get("https://www.covid19.act.gov.au/updates/confirmed-case-information");
    if (response.status !== 200) {
      console.log("ERROR");
    }
  } catch (err) {
    return null;
  }
  const html = cheerio.load(response.data);
  let actCases = {};
  let ageGroup = [];
  let sourcesOfInfection = [];
  let actTested = [];
  
  html("#table42313")
  .filter((i, el) => {
    actCases = {
      confirmed: toNumber(el.children[1].children[0].children[0].children[0].data),
      deaths: toNumber(el.children[1].children[0].children[3].children[0].data),
      recovered: toNumber(el.children[1].children[0].children[2].children[0].data)
    }
    const negative = toNumber(el.children[1].children[0].children[1].children[0].data);
    actTested = getTestedFormat(actCases.confirmed, negative + actCases.confirmed);
   });

   html("#table81686")
  .filter((i, el) => {
    ageGroup = [0,1,2,3,4].reduce((acc, index) => {
      acc.push({
        age: el.children[1].children[0].children[index].children[0].children[0].data.trim(),
        value: el.children[1].children[1].children[index].children[0].data.trim(),
      })
      return acc;
    }, []);    
  })
  html("#table63126")
  .filter((i, el) => {
     
  })
  console.log(ageGroup, actCases, actTested);
};

module.exports = fetchACTData();