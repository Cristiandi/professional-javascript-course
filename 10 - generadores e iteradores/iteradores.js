let iterator = {
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

let item = iterator.next();

while(!item.done) {
  console.log(item.value);
  item = iterator.next();
}