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
    const ingredient = new Ingredient(1);
    expect(ingredient.id).to.equal(1);
  })

  it('should be able to take any number as an ID', () => {
    const ingredient = new Ingredient(24);
    expect(ingredient.id).to.equal(24);
  });

  it('should have a name', () => {
    const ingredient = new Ingredient(1, 'jerry rolls');
    expect(ingredient.name).to.equal('jerry rolls');
  });
  
  it('should be able to have different name', () => {
    const ingredient = new Ingredient(21, 'rumplestiltskein');
    expect(ingredient.name).to.equal('rumplestiltskein');
  });

  it('should have an estimated cost in cents', () => {
    const ingredient = new Ingredient(34, 'rumplestiltskein', 502);
    expect(ingredient.estimatedCostInCents).to.equal(502);
  });

  it('should be able to have a different cost', () => {
    const ingredient = new Ingredient(34, 'rumplestiltskein', 799);
    expect(ingredient.estimatedCostInCents).to.equal(799);
  });

});
