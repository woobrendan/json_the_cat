const request = require('request');
const fs = require('fs');

let inputArray = process.argv.slice(2);
let catName = inputArray[0];
const catUrl = `https://api.thecatapi.com/v1/breeds/search?q=${catName}`;

request(catUrl, (error, repsonse, body) => {
  if (error) {
    console.log('Error: ', error);
  }
  fs.writeFile(`./${catName}.JSON`, body, error => {
    if (error) {
      console.log('Error: ', error);
    }
    if (body === '[]') {
      return console.log('Error cat name not found');
    }
    const data = JSON.parse(body);
    console.log(data[0]['description']);
  });
});

