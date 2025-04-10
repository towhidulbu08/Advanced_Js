// function multiply(a, b, c) {
//   return a * b * c;
// }

// function curriedMultiply(a) {
//   return function (b) {
//     return function (c) {
//       return a * b * c;
//     };
//   };
// }

// let step1 = curriedMultiply(5);
// console.dir(step1);

// let step2 = step1(6);
// console.dir(step2);
// let step3 = step2(7);

// console.log(step3);

// function discount(disc) {
//   return (price) => {
//     return price - (price * disc) / 100;
//   };
// }

//let tenPercentDiscount = discount(10); //here tenPercentDiscount is a Partial function
// let twentyPercentDiscount = discount(20);
// let customerId1 = tenPercentDiscount(1000);
// let customerId2 = tenPercentDiscount(2000);
// let customerId3 = tenPercentDiscount(3000);
// let customerId4 = twentyPercentDiscount(1200);

// console.log(customerId4);

//NOTE:Currying is Combination of multiple partial functions

// const multiply = (a) => (b) => (c) => a * b * c;

// let double = multiply(2);
// let triple = double(3);

// console.log(triple(4)); // 24

// curry converter function
// function curry(fn) {
//   return function curried(...args) {
//     if (args.length >= fn.length) {
//       return fn.apply(this, args);
//     } else {
//       return function (...args2) {
//         return curried.apply(this, args.concat(args2));
//       };
//     }
//   };
// }

function sum(a, b, c) {
  return a * b * c;
}

let curriedSum = _.curry(sum);

console.log(curriedSum(1, 2, 3));
console.log(curriedSum(1)(2, 3));
console.log(curriedSum(1)(2)(3));
console.log(curriedSum(1, 2)(3));
