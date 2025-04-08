// function* generator() {
//   yield 1;
//   yield 2;
//   return "I am done!";
//   yield 3;
//   yield 4;
// }

// let iterator = generator();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// As Generator Functions

function* myGenerator1() {}

//or..

function* myGenerator2() {}

//or..
function* myGenerator3() {}

//As Generator methods

const Generator = function* () {};

//NOTE:Generator arrow functions are not allowed
const myGenerator = () => {};

//Inside Class
class MyClass {
  *myGenerator() {}
}

//Inside Object Literal
const myObject = {
  *myGenerator() {},
};

// let obj = {
//   value1: 1,
//   value2: 2,
//   value3: 3,
//   value4: 4,
// };

// function* generator() {
//   const entries = Object.entries(obj);

//   for (let element of entries) {
//     yield element[1];
//   }
// }

// const iterator = generator(obj);

// for (let value of iterator) {
//   console.log(value);
// }
//NOTE:Generators are special types of iterator

//console.log([...iterator]);
