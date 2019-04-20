function* retornador() {
  return 3;

  yield 1;
}

let g = retornador();
console.log(g.next());