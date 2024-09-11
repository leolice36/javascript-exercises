const convertToCelsius = function(inputTempInF) {
  outputTempInC = (inputTempInF - 32) * (5/9)
  outputTempInC = Math.round(outputTempInC*10)/10
  return outputTempInC
};

const convertToFahrenheit = function(inputTempInC) {
  outputTempInF = (inputTempInC * (9/5)) + 32
  outputTempInF = Math.round(outputTempInF*10)/10
  return outputTempInF
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
