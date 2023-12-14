const sum = (a, b) => a + b;

const sub = (a, b) => a - b;

const times = (a, b) => a * b;

const div = (a, b) => a / b;

const pow = (a, b) => a ** b;

const sqrt = (a) => Math.sqrt(a);

const max = (a, b) => Math.max(a, b);

const min = (a, b) => Math.min(a, b);

const round = (a, b) => Math.round(a, b);

(() => {
  console.log('Some math functions');
})();

module.exports = {
  sum,
  sub,
  times,
  div,
  pow,
  sqrt,
  max,
  min,
  round,
};
