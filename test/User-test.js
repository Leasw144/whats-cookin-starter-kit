/*eslint-disable*/
const chai = require('chai');
const expect = chai.expect;
const Recipe = require('../src/Recipe');
const User = require('../src/User')
const Menu = require('../src/Menu');
const recipeData = require('../data/recipes');
const userData = require('../data/users');

describe('User', () => {

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', () => {
    const user = new User();

    expect(user).to.be.an.instanceof(User);
  });

  // it.skip('should have a number as an ID', () => {
    //   const user = new User('Fred');
    
    //   expect(user.id).to.equal();
    // });
    
  it('should be able to have a name', () => {
    const user = new User('Fred', 1);
    
    expect(user.name).to.equal('Fred');
  });
  
  it('should be able to have a different name', () => {
    const user = new User('Boris', 1);
    
    expect(user.name).to.equal('Boris');
  });
  
  it('should have an ID', () => {
    const user = new User('Wang Peng', 1);

    expect(user.id).to.equal(1);
  });

  it('should be able to take any number as an ID', () => {
    const user = new User('Franco', 24);

    expect(user.id).to.equal(24);
  });

  it('should be able to have a pantry', () => {
    const fakePantry = [{'ingredient': 1995, 'amount': 7}, {'ingredient': 19434, 'amount': 12}, {'ingredient': 1425, 'amount': 4}]
    const user = new User('Boris', 1, fakePantry);

    expect(user.pantry).to.deep.equal([{ 'ingredient': 1995, 'amount': 7 }, { 'ingredient': 19434, 'amount': 12 }, { 'ingredient': 1425, 'amount': 4 }]);
  });

  it('should have an empty array to store favorite recipes in by default', () => {
    const user = new User();
    
    expect(user.favoriteRecipes).to.deep.equal([]);
  });
  
  it('should be able to add recipes to their favorite recipes', () => {
    const recipe = new Recipe(recipeData[0].id, recipeData[0].image, recipeData[0].ingredients, recipeData[0].instructions, recipeData[0].name, recipeData[0].tags);
    const user = new User();

    user.toggleFavorite(recipe);

    expect(user.favoriteRecipes[0]).to.equal(recipe);
  });
  
  it('should remove the recipe if it is already a favorite', () => {
    const recipe = new Recipe(recipeData[0].id, recipeData[0].image, recipeData[0].ingredients, recipeData[0].instructions, recipeData[0].name, recipeData[0].tags);
    const recipe2 = new Recipe(recipeData[1].id, recipeData[1].image, recipeData[1].ingredients, recipeData[1].instructions, recipeData[1].name, recipeData[1].tags);
    const user = new User();
    
    user.toggleFavorite(recipe);
    user.toggleFavorite(recipe2);

    expect(user.favoriteRecipes.length).to.equal(2);
    
    user.toggleFavorite(recipe);
    
    expect(user.favoriteRecipes.length).to.equal(1);
    expect(user.favoriteRecipes[0]).to.equal(recipe2);
    
    user.toggleFavorite(recipe);
    
    expect(user.favoriteRecipes[1]).to.equal(recipe);
    
    user.toggleFavorite(recipe);

    expect(user.favoriteRecipes[1]).to.equal(undefined);
  });

  it('should be able to filter a recipe by tag', () => {
    const allRecipes = [];
    const favRecipes = [];


  });
  // it('should have an empty array to store recipes to cook by default', () => {
  //   const user = new User();

  //   expect(user.menu).to.deep.equal(new Menu());
  // });
});