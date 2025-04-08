let obj = {
  cowboy: "🤠",
  nerd: "🤓",
  smiling: "😊",
};
//console.dir(obj);
let entries = Object.entries(obj);

// for (const i of obj) {
//   console.log(i);
//   // obj isn't iterable, so it will throw an error
// }

let name = "JavaScript";

for (let i of name) {
  //console.log(i);
  // string, map,set,array,arguments,nodeList,domStringList,typedArray are iterable
}

let array = ["a", "b", "c", "d"];

let iterator = array[Symbol.iterator]();

console.dir(iterator.next());
console.dir(iterator.next());
console.dir(iterator.next());
console.dir(iterator.next());
console.dir(iterator.next());

// let text = "JavaScript";

// console.log([...text]);

// Iterable Protocol and Iterator Protocol

// Rules of Iterator Protocol:

// 01. Iterator must be a object
//02. It needs to implement a next() method
// 03. next () method must return an object with two property done(must boolean data type),and  value

// Spread Operator

//console.log(..."hello");

// function sum(a, ...rest) {
//   console.log(rest);
//   console.log(`${rest}`);
// }

// sum.apply({ name: "Md" }, [1, 2, 3]);

//  Custom Iterator
String.prototype[Symbol.iterator] = function () {
  let count = this.length;

  return {
    next() {
      if (count > 0) {
        count--;
        return { done: false, value: "JS" };
      }
      return { done: true };
    },
  };
};

// Custom Iterable
function range() {
  return {
    [Symbol.iterator]: function () {
      return {
        next() {},
      };
    },
  };
}
