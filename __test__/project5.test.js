import { SolarAge } from "../src/back.js";


describe('SolarAge', () => {
  test('should take in the users age and return their age on Earth', () => {
    let age = 30;
    let planet = "earth"
    let earthAge = SolarAge(age, planet);
    expect(earthAge).toEqual(30);
  });
  test('should take in the users age and return their age on Mercury', () => {
    let age = 30;
    let planet = "mercury"
    let mercAge = SolarAge(age, planet);
    expect(mercAge).toEqual("125.00");
  });
  test('should take in the users age and return their age on Venus', () => {
    let age = 30;
    let planet = "venus"
    let venusAge = SolarAge(age, planet);
    expect(venusAge).toEqual("48.78");
  });
  test('should take in the users age and return their age on Mars', () => {
    let age = 3;
    let planet = "mars"
    let marsAge = SolarAge(age, planet);
    expect(marsAge).toEqual("17");
  });
});
  //   test('should take in the users age and return their age on Jupitor', () => {
    //     let age = 30;
    //     let jupitorAge = jupitorCalculator(age);
    //     expect(jupitorAge).toEqual("2.5");
    //   });
    //
    //   test('should take in the users age and return their age on Saturn', () => {
      //     let age = 30;
      //     let saturnAge = saturnCalculator(age);
      //     expect(saturnAge).toEqual("1.02");
      //   });
      //   test('should take in the users age and return their age on Uranus', () => {
        //     let age = 30;
        //     let uranusAge = uranusCalculator(age);
        //     expect(uranusAge).toEqual("0.36");
        //   });
        //   test('should take in the users age and return their age on Neptune', () => {
          //     let age = 30;
          //     let neptuneAge = neptuneCalculator(age);
          //     expect(neptuneAge).toEqual("0.18");
          //   });
          //   test('should take in the users age and return their age on Pluto', () => {
            //     let age = 30;
            //     let plutoAge = plutoCalculator(age);
            //     expect(plutoAge).toEqual("0.12");
            //   });
            // });
