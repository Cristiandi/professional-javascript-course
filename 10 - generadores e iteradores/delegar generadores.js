function* counter(){
  for (let index = 0; index < 5; index++) {
    yield index;
  }
}

let generator = counter();

function* retornador() {
  yield* counter();
  console.log('Regrese');
  yield 7;
}

let g = retornador();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());