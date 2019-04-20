const request = require('request');

function leer (url) {
  return new Promise((resolve, reject) => {
    request(url, (err, response) => {
      if (err) return reject(err);
      return resolve(response);
    });
  });
}

leer('http://codigofacilito.com')
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log('Error', err);
  })