require('dotenv').config();
const request = require('request');

const showTable = require('./show-table');
const showStats = require('./show-stats');
const cities = require('./cities');

const key = process.env.DARK_SKY_API_KEY;
const CITY_NAMES = Object.keys(cities);
const conditions = {}; // where we will store our data

/**
 * Fetch current conditions from the DarkSky API.
 * @param {*} city the name of the city to fetch data for (in cities.js)
 * @param {*} conditionsCallback f(city, currentConditions), called upon successful DarkSky response
 */
function fetchCurrentConditions(city, conditionsCallback) {
  const { lat, lon } = cities[city];
  const url = `https://api.darksky.net/forecast/${key}/${lat},${lon}?units=si`; // as per the docs
  function callback(err, response, raw) {
    const body = JSON.parse(raw);
    conditionsCallback(city, body);
  }
  request(url, callback); // this line actually makes the request
}

/**
 * Stores data in the conditions object.
 */
function afterEach(city, body) {
  conditions[city] = body.currently; // as seen in insomnia
  if (Object.keys(conditions).length === CITY_NAMES.length) { // "stopping condition"
    showStats(conditions);
    showTable(conditions);
  }
}

// for each city name, we'll fetch conditions and then call afterEach with the data
CITY_NAMES.forEach(city => fetchCurrentConditions(city, afterEach));
