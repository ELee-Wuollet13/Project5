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
}
};

    // const venusCalculator = function(age) {
      //   let venusAge = 0;
      //   return (venusAge = age / .615).toFixed(0);
      // }
      // const marsCalculator = function(age) {
        //   let marsAge = 0;
        //   return (marsAge = age / 1.8).toFixed(0);
        // }
        // const jupitorCalculator = function(age) {
          //   let jupitorAge = 0;
          //   return (jupitorAge = age / 11.86).toFixed(1);
          // }
          //
          // const saturnCalculator = function(age) {
            //   let satrunAge = 0;
            //   return (satrunAge = age / 29.46).toFixed(2)
            // }
            // const uranusCalculator = function(age) {
              //   let uranusAge = 0;
              //   return (uranusAge = age / 84.01).toFixed(2);
              // }
              // const neptuneCalculator = function(age) {
                //   let neptuneAge = 0;
                //   return (neptuneAge = age / 164.8).toFixed(2);
                // }
                // const plutoCalculator = function(age) {
                  //   let plutoAge = 0;
                  //   return (plutoAge = age / 248.6).toFixed(2);
                  // }
