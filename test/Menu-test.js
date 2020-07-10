/*eslint-disable*/
const chai = require('chai');
const expect = chai.expect;
const Pantry = require('../src/Pantry');
const Recipe = require('../src/Recipe');
const Menu = require('../src/Menu');
const recipeData = require('../data/recipes');
const users = require('../data/users');

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

  it('should allow the user to add a recipe to the menu', () => {
    const recipe = new Recipe(recipeData[0].id, recipeData[0].image, recipeData[0].ingredients, recipeData[0].instructions, recipeData[0].name, recipeData[0].tags);
    const menu = new Menu();
    
    menu.addToMenu(recipe);
    
    expect(menu.recipesToCook[0].name).to.equal('Loaded Chocolate Chip Pudding Cookie Cups');
  });
  
  it('should not allow the user to add duplicates of the same recipe to the menu', () => {
    const recipe = new Recipe(recipeData[0].id, recipeData[0].image, recipeData[0].ingredients, recipeData[0].instructions, recipeData[0].name, recipeData[0].tags);
    const recipe2 = new Recipe(recipeData[1].id, recipeData[1].image, recipeData[1].ingredients, recipeData[1].instructions, recipeData[1].name, recipeData[1].tags);
    const menu = new Menu();
    
    menu.addToMenu(recipe);
    menu.addToMenu(recipe);

    expect(menu.recipesToCook.length).to.equal(1);
    
    menu.addToMenu(recipe2);

    expect(menu.recipesToCook.length).to.equal(2);
  });

  it('should have an array of objects as its list of recipes to cook', () => {
    const recipe = new Recipe(recipeData[0].id, recipeData[0].image, recipeData[0].ingredients, recipeData[0].instructions, recipeData[0].name, recipeData[0].tags);
    const menu = new Menu();
    
    menu.addToMenu(recipe);

    expect(menu.recipesToCook[0]).to.be.an('object');
  });

  it('should be able to give us a grocery list of ingredients still needed if the pantry does not have enough to cover the recipes on the menu', () => {

  });

  it('should provide the amount of each ingredient still needed to cook the recipes on the menu', () => {

  });

  it('should be able to provide the total cost of the ingredients still needed', () => {

  });
});