let rango = {
  min: null,
  max: null,
  [Symbol.iterator]() {
    return this.generator();
  },
  generator: function*() {
    for (let i = this.min; i <= this.max; i++) {
      yield i;      
    }
  }
}

rango.min = 0;
rango.max = 100;

for (const n of rango) {
  console.log('rango', n);
}