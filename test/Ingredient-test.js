const chai = require('chai');
const expect = chai.expect;
const Ingredient = require('../src/Ingredient');

describe('Ingredient', () => {
  it('should be a function', () => {
    expect(Ingredient).to.be.a('function');
  }); 

  it('should be an instance of Ingredient', () => {
    const ingredient = new Ingredient();
    expect(ingredient).to.be.an.instanceof(Ingredient);
  });

  it('should have an ID', () => {
    const ingredient = new Ingredient();
    expect(ingredient.id).to.equal(1)
  })

  it('should be able to take any number as an ID', () => {
    const ingredient = new Ingredient(24);
    expect(ingredient.id).to.equal(24)

  })
  
});