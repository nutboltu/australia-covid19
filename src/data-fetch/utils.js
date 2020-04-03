const toNumber = (str) => parseInt(str.replace(',', ''));

const dateFormat = (str) => {
    const part = str.split('/');
    return `20${part[2]}-${part[0].padStart(2, '0')}-${part[1].padStart(2, '0')}`;
}

const getTestedFormat = (totalConfirmed, totalTested) => {
    return [
        {
            "label":"Total confirmed cases",
            "value": new Intl.NumberFormat().format(totalConfirmed),
        },
        {
            "label":"Cases tested and excluded",
            "value": new Intl.NumberFormat().format(totalTested - totalConfirmed),
        },
        {
            "label":"Total",
            "value": new Intl.NumberFormat().format(totalTested),
        }];
}

module.exports = {
    toNumber,
    dateFormat,
    getTestedFormat,
}