// function* range(start, end, step) {
//   let current = start;
//   while (current <= end) {
//     yield current;
//     console.log("did you execute?");
//     current += step;
//   }
// }

// const iterator = range(1, 10, 2);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

function* generator(a, b) {
  let k = yield a + b;

  let m = yield a + b + k;

  yield a + b + k + m;
}

var genObj = generator(10, 20);

console.log(genObj.next());
console.log(genObj.next(20));
// console.log(genObj.next(20));
