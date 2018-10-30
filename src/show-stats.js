module.exports = function showStats(conditions) {
  let rainiest = null, cloudiest = null, warmest = null, coldest = null;
  
  // Object.keys(object) returns an array with each key in it (as strings)
  Object.keys(conditions).forEach(function(city) {
    
    // use es6 destructuring to cut down on line length
    const { precipIntensity, cloudCover, temperature } = conditions[city];
    
    if (!rainiest || precipIntensity > conditions[rainiest].precipIntensity) {
      rainiest = city;
    }
    if (!cloudiest || cloudCover > conditions[cloudiest].cloudCover) {
      cloudiest = city;
    }
    if (!warmest || temperature > conditions[warmest].temperature) {
      warmest = city;
    }
    if (!coldest || temperature < conditions[coldest].temperature) {
      coldest = city;
    }
    
  });

  console.log(`The warmest city is ${warmest}`);
  console.log(`The coldest city is ${coldest}`);
  console.log(`The cloudiest city is ${cloudiest}`);
  console.log(`The city with most precipitation is ${rainiest}`);
};
