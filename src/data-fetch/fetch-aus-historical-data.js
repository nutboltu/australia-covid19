

const { NovelCovid } = require('novelcovid');
const { write } = require('./file-manager');
const { dateFormat } = require('./utils');


const getData = (obj) => Object.keys(obj).map((key) => ({
    x: dateFormat(key),
    y: obj[key],
 }));

 const getDailyData = (obj) => {
    const keys = Object.keys(obj);
    return keys.map((key, index) => ({
        x: dateFormat(key),
        y: obj[key] - obj[keys[Math.max(index - 1, 0)]],
    }));
};

const fetchAusHistoricalData = async () => {
  const track = new NovelCovid();
  const ausDailyData = await track.histroical(null, 'australia');
  const ausHistoricalData = [];
  const ausHistoricalDailyData = [];
  
  ausHistoricalData.push({
    id: 'confirmed',
    data: getData(ausDailyData.timeline['cases'])
  });
  ausHistoricalData.push({
    id: 'deaths',
    data: getData(ausDailyData.timeline['deaths'])
  });
  ausHistoricalData.push({
    id: 'recovered',
    data: getData(ausDailyData.timeline['recovered'])
  });

  ausHistoricalDailyData.push({
    id: 'confirmed',
    data: getDailyData(ausDailyData.timeline['cases'])
  });
  ausHistoricalDailyData.push({
    id: 'deaths',
    data: getDailyData(ausDailyData.timeline['deaths'])
  });
  ausHistoricalDailyData.push({
    id: 'recovered',
    data: getDailyData(ausDailyData.timeline['recovered'])
  });
  write('./src/data/aus_historical_data.json', JSON.stringify(ausHistoricalData));
  write('./src/data/aus_daily_historical_data.json', JSON.stringify(ausHistoricalDailyData));
}


module.exports = fetchAusHistoricalData;