function* counter() {
  for (let i = 0; i < 5; i++) {
    yield i;   
  }
}

let generador = counter();

for (const numero of generador) {
  console.log('numero', numero);
}

let contador = {
  [Symbol.iterator](){
    return {
      currrentValue: 1,
      next() {
        let result = { value: null, done: true };
    
        if (this.currrentValue > 0 && this.currrentValue <= 5) {
          result = {
            value: this.currrentValue,
            done: false
          }
          this.currrentValue += 1;
        } else {
          result = {
            done: true
          }
        }
    
        return result;
      }
    };
  }
}

for (const number of contador) {
  console.log(number);
}

let rango = {
  min: null,
  max: null,
  currentValue: null,
  [Symbol.iterator]() {
    return this;
  },
  next() {
    if(!this.currentValue) {
      this.currentValue = this.min;
    }

    let result = {};

    if (this.currentValue >= this.min && this.currentValue <= this.max) {
      result = {
        value: this.currentValue,
        done: false
      };
      this.currentValue += 1;
    } else {
      result = {
        done: true
      };
    }

    return result;
  }
}

rango.min = 5;
rango.max = 10;

for (const n of rango) {
  console.log('rango', n);
}