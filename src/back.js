export { SolarAge }

const SolarAge = function(age, planet) {
  if (planet === "earth") {
  let earthAge = 0;
  return (earthAge = age)
} else if (planet === "mercury") {
  let mercAge = 0;
  return (mercAge = age / .24).toFixed(2)
} else if (planet === "venus") {
  let venusAge = 0;
  return (venusAge = age / .615).toFixed(2);
} else if (planet === "mars") {
  let marsAge = 0;
  return (marsAge = age / 1.8).toFixed(2)
} else if (planet === "jupitor") {
  let jupitorAge = 0;
  return (jupitorAge = age / 11.86).toFixed(2);
} else if (planet === "saturn") {
  let satrunAge = 0;
  return (satrunAge = age / 29.46).toFixed(2)
} else if (planet === "uranus") {
  let uranusAge = 0;
  return (uranusAge = age / 84.01).toFixed(2);
} else if (planet === "neptune") {
  let neptuneAge = 0;
  return (neptuneAge = age / 164.8).toFixed(2);
} else {
  let plutoAge = 0;
  return (plutoAge = age / 248.6).toFixed(2);
}

};
