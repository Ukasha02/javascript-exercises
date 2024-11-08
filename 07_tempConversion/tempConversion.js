const convertToCelsius = function(temp1) {
  let c_temp = ((temp1 - 32) * (5/9));
  let rounded_temp =  Math.round(c_temp * 10) / 10;
  return rounded_temp
};

const convertToFahrenheit = function(temp2) {
  let f_temp = ((temp2 * (9/5))+ 32);
  let rounded_temp2 =  Math.round(f_temp * 10) / 10;
  return rounded_temp2
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
