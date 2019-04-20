(async () => {
  const resultado =  await new Promise((resolve, reject) => {
    setTimeout(resolve, 400, 5);
  });
  console.log('promesa', resultado);
})();

const showGithubInfo = async () => {
  let response = await fetch('https://api.github.com/users/cristiandi/repos');
  response = await response.json();
  console.log('response', response);
}
showGithubInfo();

(async () => {
  try {
    let promesa = await Promise.reject('Error');
  } catch (error) {
    console.log(error);
  }
})();

// await solo se puede utilizar dentro de funciones asincronas
// los errores en las promesas se capturan utilizando el bloque try catch