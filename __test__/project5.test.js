import { calculator } from './../src/back.js';

describe('calculator', () => {
  test('should take in the users age and return their age on Earth', () => {
    let age = 30;
    let earthAge = calculator(age);
    expect(earthAge).toEqual(30);
  });
  test('should take in the users age and return their age on Mercury', () => {
    let age = 30;
    let mercAge = calculator(age);
    expect(mercAge).toEqual();
  });

});
