const rp = require('request-promise');

rp('http://google.com')
  .then(html => {
    console.log('Termine la peticion a Google');
  })
  .catch(err => console.log(err));