const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  let total = 0;
	array.forEach(number => {total += number});
  return total;
};

const multiply = function(array) {
  let total = 1;
  array.forEach(number => total *= number)
  return total;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
  if (number === 0) return 1;
  let total = number;
	for (let i = number; i > 1; i--) {
    total *= i-1
  }
  return total;
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
