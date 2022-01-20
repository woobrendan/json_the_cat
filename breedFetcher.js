const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  const catUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(catUrl, (error, response, body) => {
    if (error) {
      return error;
    }
    // console.log(response && response.statusCode);
    const data = JSON.parse(body);
    if (!data[0]) {
      return callback('Error cat name not found', null);
    }
    return callback(null, data[0].description);
  });
};

module.exports = {fetchBreedDescription};