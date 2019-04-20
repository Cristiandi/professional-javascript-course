let arreglo = [2, 3, 4, 5];

for (const numero of arreglo) {
  console.log(numero);
}

function saludarATodos() {
  for (const nombre of arguments) {
    console.log('Hola', nombre);
  }
}

saludarATodos('Cristian', 'David', 'Camilo');


let usuario = {
  nombre: 'Cristian',
  edad: 22
};

for (const propiedad in usuario) {
  console.log(propiedad);
}

// el for in solo muestra las propiedades iterables