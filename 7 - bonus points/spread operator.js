let numeros = [2, 3, 5];

let otro_arreglo = ['Hola', 'como', 'estas'];

let merged = [...numeros, ...otro_arreglo];
console.log(merged);

function sumar(n1, n2, n3) {
  return n1 + n2 + n3;
}

let resultado1 = sumar.apply(this, numeros);
console.log(resultado1);

let resultado2 = sumar(...numeros);
console.log(resultado2);

let objeto1 = {
  clave: 3
};

let objeto2 = {
  otraClave: 4
};

let newObj = { ...objeto1, ...objeto2 };
console.log(newObj);