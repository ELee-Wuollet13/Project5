export { SolarAge }

class SolarAge {
  constructor(age, planet) {
    this.age = age;
    this.planet = planet;
    this.localAge = this.findAge(planet, age);
  }
  findAge() {
    if (this.planet === "earth") {
      console.log("working");
      return (this.localAge = this.age);
    } else if (this.planet === "mercury") {
      return (this.localAge = this.age / .24).toFixed(2);
    } else if (this.planet === "venus") {
      return (this.localAge = this.age / .615).toFixed(2);
    } else if (this.planet === "mars") {
      return (this.marsAge = this.age / 1.8).toFixed(2);
    }
  }
};

    // } else if (planet === "jupitor") {
      //   let jupitorAge = 0;
      //   return (jupitorAge = age / 11.86).toFixed(2);
      // } else if (planet === "saturn") {
        //   let satrunAge = 0;
        //   return (satrunAge = age / 29.46).toFixed(2)
        // } else if (planet === "uranus") {
          //   let uranusAge = 0;
          //   return (uranusAge = age / 84.01).toFixed(2);
          // } else if (planet === "neptune") {
            //   let neptuneAge = 0;
            //   return (neptuneAge = age / 164.8).toFixed(2);
            // } else {
              //   let plutoAge = 0;
              //   return (plutoAge = age / 248.6).toFixed(2);
              // }
