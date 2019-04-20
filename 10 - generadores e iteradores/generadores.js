function* counter(){
  for (let index = 0; index < 5; index++) {
    yield index;
  }
}

let generator = counter();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());