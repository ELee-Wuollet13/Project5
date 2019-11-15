import { earthCalculator } from './../src/back.js';
import { mercCalculator } from './../src/back.js';
import { venusCalculator } from './../src/back.js';

describe('calculator', () => {
  test('should take in the users age and return their age on Earth', () => {
    let age = 30;
    let earthAge = earthCalculator(age);
    expect(earthAge).toEqual(30);
  });
  test('should take in the users age and return their age on Mercury', () => {
    let age = 30;
    let mercAge = mercCalculator(age);
    expect(mercAge).toEqual(125);
  });
  test('should take in the users age and return their age on Venus', () => {
    let age = 30;
    let venusAge = venusCalculator(age);
    expect(venusAge).toEqual(30);
  });

});
