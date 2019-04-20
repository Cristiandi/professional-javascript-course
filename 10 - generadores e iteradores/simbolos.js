let simbolo = Symbol('mi-simbolo');

let obj = {};

obj[simbolo] = () => {
  console.log('Mi nombre es un simbolo');
}

obj[simbolo]();