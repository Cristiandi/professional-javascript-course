const request = require('request');

request('http://google.com', () => {
  console.log('Termine la peticion de google.');
});

console.log('Despues de la peticion');