export { earthCalculator }
export { mercCalculator }
export { venusCalculator }


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
