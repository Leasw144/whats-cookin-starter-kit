/*eslint-disable*/
const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');
const userData = require('../data/users');
const Pantry = require('../src/Pantry');

describe('Pantry', () => {

  it('should be a function', () => {
    expect(Pantry).to.be.a('function');
  });

  it('should be an instance of Pantry', () => {
    const pantry = new Pantry();

    expect(pantry).to.be.an.instanceof(Pantry);
  });

  it('should have a list of ingredients', () => {
    const pantry = new Pantry();

    expect(pantry).to.be.an.instanceof(Pantry);
  });

  
});