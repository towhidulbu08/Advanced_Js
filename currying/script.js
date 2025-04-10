// function log(date, importance, message) {
//   console.log(
//     `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} : ${importance} : ${message}`
//   );
// }

// let curriedLogged = _.curry(log);

// curriedLogged(new Date(), "debug", "this is a debug message");
// curriedLogged(new Date())("debug")("this is a debug message");

// let logNow = curriedLogged(new Date());

// logNow("Info", "Info Message");

const multiply = (a) => (b) => (c) => a * b * c;

console.log(multiply(1)(2)(3));
