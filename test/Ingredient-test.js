const chai = require('chai');
const expect = chai.expect;
const Ingredient = require('../src/Ingredient');

describe('Ingredient', () => {
  it('should be a function', () => {
    expect(Ingredient).to.be.a('function');
  }); 

  it('should be an instance of Ingredient', () => {
    const ingredient = new Ingredient()
    expect(ingredient).to.be.an.instanceof(Ingredient)
  })
});