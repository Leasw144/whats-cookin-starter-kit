/*eslint-disable*/
const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');
const userData = require('../data/users');
const Pantry = require('../src/Pantry');
const Recipe = require('../src/Recipe');

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

  it('should have a checkPantry method', () => {
    const pantry = new Pantry();

    pantry.checkPantry()

    expect(pantry.checkPantry).to.be.a('function');
  });
  it('should be able to accept a recipe as an argument', () => {
    const recipe = new Recipe();
    const pantry = new Pantry();
    const result = pantry.checkPantry(recipe);

    expect(result).to.equal(recipe);
  });
  


  
});