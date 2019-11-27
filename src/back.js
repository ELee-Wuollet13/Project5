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
      return (this.localAge = this.age / 1.8).toFixed(2);
    } else if (this.planet === "jupitor") {
      return (this.localAge = this.age / 11.86).toFixed(2);
    } else if (this.planet === "saturn") {
      return (this.localAge = this.age / 29.46).toFixed(2)
    } else if (this.planet === "uranus") {
      return (this.localAge = this.age / 84.01).toFixed(2);
    } else if (this.planet === "neptune") {
      return (this.localAge = this.age / 164.8).toFixed(2);
    } else {
      return (this.localAge = this.age / 248.6).toFixed(2);
    }
  }
}
