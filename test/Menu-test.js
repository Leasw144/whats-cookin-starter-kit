/*eslint-disable*/
const chai = require('chai');
const expect = chai.expect;
const Pantry = require('../src/Pantry');
const Menu = require('../src/Menu');
const recipeData = require('../data/recipes')

describe('Menu', () => {

  it('should be a function', () => {
    expect(Menu).to.be.a('function');
  });

  it('should be an instance of Menu', () => {
    const menu = new Menu();

    expect(menu).to.be.an.instanceof(Menu);
  });

  it('should be able to have a list of recipes to cook', () => {
    const menu = new Menu();

    expect(menu.recipesToCook).to.deep.equal([]);
  });

  it('should allow the user to add a recipe to that menu', () => {
    const recipe = recipeData[0];
    const menu = new Menu();
    
    menu.addToMenu(recipe);

    expect(menu.recipesToCook[0].name).to.equal('Loaded Chocolate Chip Pudding Cookie Cups');
  });

  it('should have an array of objects as its list of recipes to cook', () => {

  });

  it('should be able to give us a grocery list of ingredients still needed if the pantry does not have enough to cover the recipes on the menu', () => {

  });

  it('should provide the amount of each ingredient still needed to cook the recipes on the menu', () => {

  });

  it('should be able to provide the total cost of the ingredients still needed', () => {

  });
});