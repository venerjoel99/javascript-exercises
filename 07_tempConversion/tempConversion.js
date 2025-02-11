const convertToCelsius = function(farenheit) {
  const celsius = (farenheit - 32) * 5 / 9
  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  const farenheit = celsius * 9 / 5 + 32;
  return parseFloat(farenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
