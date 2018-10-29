// see library docs @ https://github.com/Automattic/cli-table
const Table = require('cli-table');

const HEADERS = [
  "City",
  "Temperature",
  "Precipitation (mm/h)",
  "Cloud cover",
];

module.exports = function showTable(conditions) {
  const table = new Table({
    head: HEADERS,
  });
  Object.keys(conditions).forEach(city => table.push([
    city,
    `${conditions[city].temperature} °C`,
    conditions[city].precipIntensity || '--',
    `${conditions[city].cloudCover * 100}%`,
  ]));
  console.log(table.toString());
};
