//?Symbols in JavaScript

function myFunc() {
  const PVT = Symbol("my private value");
  return {
    modify(obj) {
      obj[PVT] = true;
    },
    output(obj) {
      return obj[PVT];
    },
  };
}

const value = myFunc();
const obj = { a: 1, b: 2 };

value.modify(obj);
console.log(value.output(obj));
console.log(obj);

// delete obj['Symbol("my private value")'];

const symbols = Object.getOwnPropertySymbols(obj);
console.log(symbols); // [ Symbol(my private value) ]
console.log(obj[symbols[0]]); // true
