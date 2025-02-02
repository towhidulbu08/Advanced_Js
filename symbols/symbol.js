let includes = Symbol("my own array includes method");

Array.prototype[includes] = () => {
  console.log("This is My array includes function");
};

let myArray = [1, 2, 3];

console.log(myArray["includes"](2));
console.log(myArray[includes](2));

// Object.keys() => return an array of keys of that object
