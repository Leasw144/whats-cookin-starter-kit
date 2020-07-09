const chai = require('chai');
const expect = chai.expect;
const Recipe = require('../src/Recipe');
const recipeData = require('../data/recipes')

describe('Recipe', () => {
  it('should be a function', () => {
    expect(Recipe).to.be.a('function');
  });

  it('should be an instance of Recipe', () => {
    const recipe = new Recipe();

    expect(recipe).to.be.an.instanceof(Recipe);
  });

  it('should have an ID', () => {
    const recipe = new Recipe(1);

    expect(recipe.id).to.equal(1);
  })

  it('should be able to take any number as an ID', () => {
    const recipe = new Recipe(24);

    expect(recipe.id).to.equal(24);
  });

  it('should have an image', () => {
    const recipe = new Recipe(1, 'https://spoonacular.com/recipeImages/595736-556x370.jpg');

    expect(recipe.image).to.equal('https://spoonacular.com/recipeImages/595736-556x370.jpg');
  });

  it('should be able to have a different image', () => {
    const recipe = new Recipe(1, 'https://spoonacular.com/recipeImages/678353-556x370.jpg');

    expect(recipe.image).to.equal('https://spoonacular.com/recipeImages/678353-556x370.jpg');
  });

  it('should have a list of ingredients', () => {
    const ingredients = recipeData[0].ingredients;
    const img = 'https://spoonacular.com/recipeImages/678353-556x370.jpg';
    const recipe = new Recipe(24, img, ingredients);

    expect(recipe.ingredients).to.equal(recipeData[0].ingredients);
  });

  it('should have a list of instructions', () => {
    const instructions = recipeData[0].instructions;
    const ingredients = recipeData[0].ingredients;
    const img = 'https://spoonacular.com/recipeImages/678353-556x370.jpg';
    const recipe = new Recipe(24, img, ingredients, instructions);

    expect(recipe.instructions).to.equal(recipeData[0].instructions);
  })

  it('should be able to have a different list of instructions', () => {
    const instructions = recipeData[1].instructions;
    const ingredients = recipeData[1].ingredients;
    const img = 'https://spoonacular.com/recipeImages/678353-556x370.jpg';
    const recipe = new Recipe(24, img, ingredients, instructions);

    expect(recipe.instructions).to.equal(recipeData[1].instructions);
  })

  it('should be able to have a name', () => {
    const name = 'overcooked hotdogs with melted plastic'
    const instructions = recipeData[1].instructions;
    const ingredients = recipeData[1].ingredients;
    const img = 'https://spoonacular.com/recipeImages/678353-556x370.jpg';
    const recipe = new Recipe(24, img, ingredients, instructions, name);

    expect(recipe.name).to.equal('overcooked hotdogs with melted plastic');
  })
  it('should be able to have a different name', () => {
    const name = 'just some fried socks or whatever'
    const instructions = recipeData[1].instructions;
    const ingredients = recipeData[1].ingredients;
    const img = 'https://spoonacular.com/recipeImages/678353-556x370.jpg';
    const recipe = new Recipe(24, img, ingredients, instructions, name);

    expect(recipe.name).to.equal('just some fried socks or whatever');
  })


  

});