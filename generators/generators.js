const myAsyncIterable = {
  async *[Symbol.asyncIterator]() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
  },
};

(async () => {
  for await (const num of myAsyncIterable) {
    console.log(num);
  }
})();
