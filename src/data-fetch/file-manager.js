const fs = require('fs');

const read = (filename) => {
  const rawdata = fs.readFileSync(filename);
  return JSON.parse(rawdata);
}

const write = (filename, data) => {
  fs.writeFile(filename, data, 'utf8', function (err) {
    if (err) {
        console.log(`An error occured while writing JSON Object to ${filename}`);
        return console.log(err);
    }

    console.log(`${filename} has been saved.`);
  });
}
module.exports = {
  read,
  write,
}