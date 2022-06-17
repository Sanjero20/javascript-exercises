const ftoc = function(farenheit) {
  //Farenheit to Celsius
  let temp = (farenheit - 32) * (5/9)
  return Math.round(temp * 10) / 10
};

const ctof = function(celsius) {
  //Celsius to Farenheit
  let temp = (celsius * (9/5)) + 32;
  return Math.round(temp * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
