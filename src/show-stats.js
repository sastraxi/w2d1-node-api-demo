module.exports = function showStats(conditions) {
  let rainiest = null, cloudiest = null, warmest = null, coldest = null;
  Object.keys(conditions).forEach(function(city) {
    if (!rainiest || conditions[city].precipIntensity > conditions[rainiest].precipIntensity) {
      rainiest = city;
    }
    if (!cloudiest || conditions[city].cloudCover > conditions[cloudiest].cloudCover) {
      cloudiest = city;
    }
    if (!warmest || conditions[city].temperature > conditions[warmest].temperature) {
      warmest = city;
    }
    if (!coldest || conditions[city].temperature < conditions[coldest].temperature) {
      coldest = city;
    }
  });
  console.log(`The warmest city is ${warmest}`);
  console.log(`The coldest city is ${coldest}`);
  console.log(`The cloudiest city is ${cloudiest}`);
  console.log(`The city with most precipitation is ${rainiest}`);
};
