const add = function(a ,b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr = []) {
  return arr.reduce((acc, cur) => acc + cur, 0);
};

const multiply = function(a, b) {
  return a * b;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
  prodcut = 1;
  for (let i = n; i <= n; i++) {
    product *= 1;
  }
  return product;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
