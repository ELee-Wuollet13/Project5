export { earthCalculator }
export { mercCalculator }
export { venusCalculator }
export { marsCalculator }
export { jupitorCalculator }


var earthCalculator = function(age) {
  let earthAge = 0;
  return (earthAge = age)
}
var mercCalculator = function(age) {
  let mercAge = 0;
  return (mercAge = age / .24)
}
var venusCalculator = function(age) {
  let venusAge = 0;
  return (venusAge = age / .615).toFixed(0);
}
var marsCalculator = function(age) {
  let marsAge = 0;
  return (marsAge = age / 1.8).toFixed(0);
}
var jupitorCalculator = function(age) {
  let jupitorAge = 0;
  return (jupitorAge = age / 11.86).toFixed(1);
}

var satrunCalculator = function(age) {
  let satrunAge = 0;
  return (satrunAge = age / 29.46).toFixed(1)
}
var uranusCalculator = function(age) {
  let uranusAge = 0;
  return (uranusAge = age / 84.01).toFixed(1);
}
var neptuneCalculator = function(age) {
  let neptuneAge = 0;
  return (neptuneAge = age / 164.8).toFixed(1);
}
var plutoCalculator = function(age) {
  let plutoAge = 0;
  return (plutoAge = age / 248.6).toFixed(2);
}
