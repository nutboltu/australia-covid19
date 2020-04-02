const toNumber = (str) => parseInt(str.replace(',', ''));

const dateFormat = (str) => {
    const part = str.split('/');
    return `20${part[2]}-${part[0].padStart(2, '0')}-${part[1].padStart(2, '0')}`;
}

module.exports = {
    toNumber,
    dateFormat
}