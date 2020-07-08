const chai = require('chai');
const expect = chai.expect;
const Recipe = require('../src/Recipe');

describe('Recipe', () => {
  it('should be a function', () => {
    expect(Recipe).to.be.a('function');
  });

  it('should be an instance of Recipe', () => {
    const recipe = new Recipe();
    expect(recipe).to.be.an.instanceof(Recipe);
  });

  it('should have an ID', () => {
    const Recipe = new Recipe(1);
    expect(Recipe.id).to.equal(1);
  })

  it.skip('should be able to take any number as an ID', () => {
    const Recipe = new Recipe(24);
    expect(Recipe.id).to.equal(24);
  });

  it.skip('should have an image', () => {
    const recipe = new Recipe(1, 'https://spoonacular.com/recipeImages/595736-556x370.jpg');
    expect(recipe.image).to.equal('https://spoonacular.com/recipeImages/595736-556x370.jpg');
  });

  it.skip('should be able to have a different image', () => {
    const recipe = new Recipe(1, 'https://spoonacular.com/recipeImages/678353-556x370.jpg');
    expect(recipe.image).to.equal('https://spoonacular.com/recipeImages/678353-556x370.jpg');
  });


  

});