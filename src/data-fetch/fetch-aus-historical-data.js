

const { NovelCovid } = require('novelcovid');
const { write } = require('./file-manager');
const { dateFormat, getHistoricalData } = require('./utils');

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
  const ausHistoricalData = getHistoricalData(ausDailyData.timeline);
  const ausHistoricalDailyData = [];

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