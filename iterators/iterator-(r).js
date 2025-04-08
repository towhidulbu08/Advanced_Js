// String.prototype[Symbol.iterator] = function () {
//   let count = this.length;
//   return {
//     next() {
//       if (count > 0) {
//         count--;
//         return {
//           done: false,
//           value: "JS",
//         };
//       }
//       return { done: true };
//     },
//   };
// };

function range(start, end, step) {
  let current = start;

  return {
    [Symbol.iterator]() {
      return {
        next() {
          let result;
          if (current <= end) {
            result = {
              done: false,
              value: current,
            };
            current += step;
            return result;
          }

          return {
            done: true,
          };
        },
      };
    },
  };
}

console.log([...range(1, 10, 2)]); // [1, 3, 5, 7, 9]

//? 01. Iterable: This is an object that implements the iterable protocol. It has a method called [Symbol.iterator]() that returns an iterator object. The iterable object can be any object that implements the iterable protocol, such as arrays, strings, maps, sets, and more.

//? 02. Iterator: This is an object with a next() method that returns the next value in the sequence and a done property indicating if the sequence has ended. The iterator object is created by calling the[Symbol.iterator] () method on the iterable object. The iterator object has next() method that returns the next value in the sequence and a done property indicating if the sequence has ended.

//*Iteration: The process of accessing each element in a collection one at a time. In JavaScript, iteration is typically done using loops, such as for loops or for...of loops. The for...of loop is a special type of loop that is designed to work with iterable objects.
