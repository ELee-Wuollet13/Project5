import { SolarAge } from "../src/back.js";

describe('SolarAge', () => {
  test('should take in the users age and return their age on Earth', () => {
    let age = 30;
    let planet = "earth"
    let earthAge = new SolarAge (age, planet);
    expect(earthAge.localAge).toEqual(30);
  });
  test('should take in the users age and return their age on Mercury', () => {
    let age = 30;
    let planet = "mercury"
    let mercAge = new SolarAge(age, planet);
    expect(mercAge.localAge).toEqual("125.00");
  });
  test('should take in the users age and return their age on Venus', () => {
    let age = 30;
    let planet = "venus"
    let venusAge = new SolarAge(age, planet);
    expect(venusAge.localAge).toEqual("48.78");
  });
  test('should take in the users age and return their age on Mars', () => {
    let age = 30;
    let planet = "mars"
    let marsAge = new SolarAge(age, planet);
    expect(marsAge.localAge).toEqual("16.67");
  });
});
  // test('should take in the users age and return their age on Jupitor', () => {
  //   let age = 30;
  //   let planet = "jupitor";
  //   let jupitorAge = SolarAge(age, planet);
  //   expect(jupitorAge).toEqual("2.53");
  // });
  // test('should take in the users age and return their age on Saturn', () => {
  //   let age = 30;
  //   let planet = "saturn";
  //   let saturnAge = SolarAge(age, planet);
  //   expect(saturnAge).toEqual("1.02");
  // });
  // test('should take in the users age and return their age on Uranus', () => {
  //   let age = 30;
  //   let planet = "uranus"
  //   let uranusAge = SolarAge(age, planet);
  //   expect(uranusAge).toEqual("0.36");
  // });
  // test('should take in the users age and return their age on Neptune', () => {
  //   let age = 30;
  //   let planet = "neptune"
  //   let neptuneAge = SolarAge(age, planet);
  //   expect(neptuneAge).toEqual("0.18");
  // });
  // test('should take in the users age and return their age on Pluto', () => {
  //   let age = 30;
  //   let planet = "pluto"
  //   let plutoAge = SolarAge(age, planet);
  //   expect(plutoAge).toEqual("0.12");
  // });
