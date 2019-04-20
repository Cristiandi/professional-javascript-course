function cacular () {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 400, 5);
  });
}

function segundoCaculo(numer0) {
  console.log(numer0);
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 200, 'segunda promisa');
  });
}

cacular().then(segundoCaculo).then(console.log);