const add = function() {
	return arguments[0] + arguments[1];
};

const subtract = function() {
	return arguments[0] - arguments[1];
};

const sum = function() {
	const numbers = arguments[0];
  if (numbers.length === 0) {
    return 0;
  }
  return numbers.reduce(add, 0);
};

const multiply = function() {
  const numbers = arguments[0];
  if (numbers.length == 0) {
    return 0;
  }
  return numbers.reduce((x, y) => x * y, 1);
};

const power = function() {
	return arguments[0] ** arguments[1];
};

const factorial = function() {
  const number = arguments[0];
  if (number == 1 || number == 0) {
    return 1;
  }
  let product = 1;
  for (let i = number; i >= 1; i--) {
    product *= i;
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
