require('dotenv').config();
const request = require('request');

const showTable = require('./show-table');
const showStats = require('./show-stats');
const cities = require('./cities');

const key = process.env.DARK_SKY_API_KEY;
const CITY_NAMES = Object.keys(cities);
const conditions = {}; // where we will store our data

function fetchCurrentConditions(city, conditionsCallback) {
  const { lat, lon } = cities[city];
  const url = `https://api.darksky.net/forecast/${key}/${lat},${lon}?units=si`; // as per the docs
  function callback(err, response, raw) {
    const body = JSON.parse(raw);
    conditionsCallback(city, body);
  }
  request(url, callback);
}

function afterEach(city, body) {
  conditions[city] = body.currently; // as seen in insomnia
  if (Object.keys(conditions).length === CITY_NAMES.length) {
    showStats(conditions);
    showTable(conditions);
  }
}

CITY_NAMES.forEach(city => fetchCurrentConditions(city, afterEach));
