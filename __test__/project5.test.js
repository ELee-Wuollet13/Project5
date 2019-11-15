import { Main } from './../src/main.js';

describe('Main', () => {

  test('should take in the users age and return their age on Mercury', () => {
    let age = new Age(30);
    expect(age).toEqual(20);
  });
});
