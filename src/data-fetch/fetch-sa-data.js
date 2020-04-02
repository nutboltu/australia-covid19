const axios = require("axios");
const cheerio = require("cheerio");
const { write } = require('./file-manager');
const { toNumber } = require('./utils');

const fetchSAData = async () => {
  let response;
  try {
    response = await axios.get("https://www.sahealth.sa.gov.au/wps/wcm/connect/public+content/sa+health+internet/health+topics/health+topics+a+-+z/covid+2019/latest+updates/confirmed+and+suspected+cases+of+covid-19+in+south+australia");
    if (response.status !== 200) {
      console.log("ERROR");
    }
  } catch (err) {
    return null;
  }
  const html = cheerio.load(response.data);
  let localDistrictCases = [];
  
  html("table")
    .filter((i, el) => {
      if (i == 0 ) {
        console.log(el.children[1].children[3].children[1].children[1].children[0].data.trim());
        console.log(el.children[1].children[3].children[3].children[1].children[0].data.trim());

        console.log(el.children[1].children[5].children[1].children[1].children[0].data.trim());
        console.log(el.children[1].children[5].children[3].children[1].children[0].data.trim());
        console.log(el.children[1].children[9].children[1].children[1].children[0].data.trim());
        console.log(el.children[1].children[9].children[3].children[1].children[0].data.trim());
      }
      if (i ==1) {
        console.log(el.children[3].children[3].children[1].children[0].data);
        console.log(el.children[3].children[3].children[3].children[0].data);
        console.log(el.children[3].children[3].children[5].children[0].data);
      }
       if (i == 2) {
        console.log(el.children[1].children[3].children[1].children[1].children[0].data);
        console.log(el.children[1].children[3].children[3].children[1].children[0].data);

        console.log(el.children[1].children[5].children[1].children[1].children[0].data);
        console.log(el.children[1].children[5].children[3].children[1].children[0].data);
        console.log(el.children[1].children[7].children[1].children[1].children[0].data);
        console.log(el.children[1].children[7].children[3].children[1].children[0].data);
        console.log(el.children[1].children[9].children[1].children[1].children[0].data);
        console.log(el.children[1].children[9].children[3].children[1].children[0].data);
        console.log(el.children[1].children[11].children[1].children[1].children[0].data);
        console.log(el.children[1].children[11].children[3].children[1].children[0].data);
       }
  });
};

module.exports = fetchSAData;