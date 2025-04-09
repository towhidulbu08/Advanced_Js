const takeOrder = (customer) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`order taken from ${customer}`);
    }, 2000);
  });
};

const processOrder = (customer) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`order processed for ${customer}`);
    }, 2000);
  });
};

const completeOrder = (customer) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`order completed for ${customer}`);
    }, 2000);
  });
};

async function* orderGenerator(customer) {
  yield await takeOrder(customer);
  yield await processOrder(customer);
  yield await completeOrder(customer);
}

const genObj = orderGenerator("John Doe");
// genObj.next().then(({ value }) => console.log(value));
// genObj.next().then(({ value }) => console.log(value));

// genObj.next().then(({ value }) => console.log(value));

const promises = [genObj.next(), genObj.next(), genObj.next()];

(async function () {
  for await (let p of promises) {
    console.log(p);
  }
})();
