//let title = "js";
//step-01: let title= new String("js")
//step-02: convert parameter  into Regexp object
//step-03: if the implementation of Symbol.search() method has present in  Regexp object

// console.dir(RegExp);

// console.dir(String);
// console.log(title.search("s"));

class Product {
  constructor(title) {
    this.title = title;
  }

  //implement search method
  [Symbol.search](string) {
    console.log(string);
    return string.indexOf(this.title) >= 0 ? "Found" : "Not Found";
  }
}

let laptop = new Product("laptop");
// console.log(laptop);
// console.log("JavaScript".search("Script"));

// console.log("Hp aptop".search(laptop));

function myFunc() {
  const PVT = Symbol.for("my private value");

  return {
    modify(obj) {
      obj[PVT] = true;
    },
    output(obj) {
      return obj[PVT];
    },
  };
}

let value = myFunc();
const obj = { a: 1, b: 2 };
value.modify(obj);
console.log(obj[Symbol.for("my private value")]);

delete obj[Symbol.for("my private value")];

console.log(obj);
//console.log(value.output(obj));
