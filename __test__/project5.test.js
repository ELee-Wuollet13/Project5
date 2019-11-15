import { Calculator } from './../src/main.js';

describe('Calculator', () => {
  test('should take in the users age and return their age on Earth', () => {
    let age = 30;
    let earthAge = Calculator(age);
    expect(earthAge).toEqual(30);
  });
  test('should take in the users age and return their age on Mercury', () => {
    let age = 30;
    let mercAge = Calculator(age);
    expect(mercAge).toEqual();
  });

});
