const sum = (a, b) => a + b;

(() => {
  const a = 1;
  const b = 2;
  const c = sum(a, b);
  console.log(`${a} + ${b} = ${c}`);
})();

module.exports = sum;