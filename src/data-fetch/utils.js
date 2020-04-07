const toNumber = (str) => parseInt(str.split(",").join(""));

const dateFormat = (str) => {
    const part = str.split('/');
    return `20${part[2]}-${part[0].padStart(2, '0')}-${part[1].padStart(2, '0')}`;
}

const getTestedFormat = (totalConfirmed, totalTested) => {
    return [
        {
            "label":"Positive",
            "value": new Intl.NumberFormat().format(totalConfirmed),
        },
        {
            "label":"Negative",
            "value": new Intl.NumberFormat().format(totalTested - totalConfirmed),
        },
        {
            "label":"Total",
            "value": new Intl.NumberFormat().format(totalTested),
        }];
}

const getSourceOfInfectionFormat = ({
    overseas,
    contacted,
    local,
    underInvestigation,
}) => {
    return [
        {
           "id":"Travel overseas",
           "label":"Travel overseas",
           "value":toNumber(overseas)
        },
        {
           "id":"Contact with a confirmed case",
           "label":"Contact with a confirmed case",
           "value": toNumber(contacted)
        },
        {
           "id":"Locally acquired – unknown source",
           "label":"Locally acquired – unknown source",
           "value":toNumber(local)
        },
        {
           "id":"Under investigation",
           "label":"Under investigation",
           "value": toNumber(underInvestigation)
        }
      ];
}
const getCumulativeData = (obj) => Object.keys(obj).map((key) => ({
    x: dateFormat(key),
    y: obj[key],
 }));

const getHistoricalData = (timeline) => {
    let historicalData = [];
    ['recovered', 'deaths', 'cases'].forEach(key => {
        const id = key === 'cases' ? 'confirmed' : key;
        historicalData.push({
            id,
            data: getCumulativeData(timeline[key])
        });
    });
    return historicalData;
}

module.exports = {
    toNumber,
    dateFormat,
    getTestedFormat,
    getCumulativeData,
    getHistoricalData,
    getSourceOfInfectionFormat,
}