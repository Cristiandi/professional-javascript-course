let p1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'Hola gente1.'));
let p2 = new Promise((resolve, reject) => setTimeout(resolve, 600, 'Hola gente2.'));
let p3 = Promise.reject();

let saluda = () => console.log('Hola a todos.');

Promise.all([p1, p2, p3]).then(results => {
  console.log(results);
  saluda()
})
.catch(() => console.log('Falle D:'));

// Promise.all fallara en el caso de que al menos una de las promesas falle