const { sum, sub, times, div, max, min, round } = require('./index');

test('sum function should return the sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, -2)).toBe(-3);
    expect(sum(5, 5)).toBe(10);
  });
  
  test('sub function should return the difference of two numbers', () => {
    expect(sub(1, 2)).toBe(-1);
    expect(sub(-1, -2)).toBe(1);
    expect(sub(5, 5)).toBe(0);
  });
  
  test('times function should return the product of two numbers', () => {
    expect(times(2, 3)).toBe(6);
    expect(times(-2, -3)).toBe(6);
    expect(times(5, 0)).toBe(0);
  });
  
  test('div function should return the quotient of two numbers', () => {
    expect(div(6, 2)).toBe(3);
    expect(div(-6, -2)).toBe(3);
    expect(div(5, 0)).toBe(Infinity);
  });

test('max function should return the maximum of two numbers', () => {
  expect(max(1, 2)).toBe(2);
  expect(max(-1, -2)).toBe(-1);
  expect(max(5, 5)).toBe(5);
});

test('min function should return the minimum of two numbers', () => {
  expect(min(1, 2)).toBe(1);
  expect(min(-1, -2)).toBe(-2);
  expect(min(5, 5)).toBe(5);
});

test('round function should round the given number to the nearest integer', () => {
  expect(round(1.4)).toBe(1);
  expect(round(1.6)).toBe(2);
  expect(round(-1.4)).toBe(-1);
  expect(round(-1.6)).toBe(-2);
});