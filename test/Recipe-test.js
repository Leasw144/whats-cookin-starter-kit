/*eslint-disable*/
const chai = require('chai');
const expect = chai.expect;
const Recipe = require('../src/Recipe');
const recipeData = require('../data/recipes');

describe.only('Recipe', () => {
  
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
  });

  it('should be able to have a different list of instructions', () => {
    const instructions = recipeData[1].instructions;
    const ingredients = recipeData[1].ingredients;
    const img = 'https://spoonacular.com/recipeImages/678353-556x370.jpg';
    const recipe = new Recipe(24, img, ingredients, instructions);

    expect(recipe.instructions).to.equal(recipeData[1].instructions);
  });

  it('should be able to have a name', () => {
    const name = 'overcooked hotdogs with melted plastic'
    const instructions = recipeData[1].instructions;
    const ingredients = recipeData[1].ingredients;
    const img = 'https://spoonacular.com/recipeImages/678353-556x370.jpg';
    const recipe = new Recipe(24, img, ingredients, instructions, name);

    expect(recipe.name).to.equal('overcooked hotdogs with melted plastic');
  });

  it('should be able to have a different name', () => {
    const name = 'just some fried socks or whatever';
    const instructions = recipeData[1].instructions;
    const ingredients = recipeData[1].ingredients;
    const img = 'https://spoonacular.com/recipeImages/678353-556x370.jpg';
    const recipe = new Recipe(24, img, ingredients, instructions, name);

    expect(recipe.name).to.equal('just some fried socks or whatever');
  });

  it('should be able to have a list of tags', () => {
    const name = 'just some fried socks or whatever';
    const tags = ['crusty', 'second breakfast', 'light'];
    const instructions = recipeData[1].instructions;
    const ingredients = recipeData[1].ingredients;
    const img = 'https://spoonacular.com/recipeImages/678353-556x370.jpg';
    const recipe = new Recipe(24, img, ingredients, instructions, name, tags);

    expect(recipe.tags).to.deep.equal(['crusty', 'second breakfast', 'light']);
  });

  it('should be able to have a list of different tags', () => {
    const name = 'week-old grass clippings';
    const tags = ['decomposing', 'snack', 'light', 'vegan', 'greens', 'browns'];
    const instructions = recipeData[1].instructions;
    const ingredients = recipeData[1].ingredients;
    const img = 'https://spoonacular.com/recipeImages/678353-556x370.jpg';
    const recipe = new Recipe(24, img, ingredients, instructions, name, tags);

    expect(recipe.tags).to.deep.equal(['decomposing', 'snack', 'light', 'vegan', 'greens', 'browns']);
  });

  it('should be able to get the total cost of all the ingredients in the recipe', () => {
    const name = 'week-old grass clippings';
    const tags = ['decomposing', 'snack', 'light', 'vegan', 'greens', 'browns'];
    const instructions = recipeData[1].instructions;
    const ingredients = [{id: 20081, quantity: {amount: 1.5, unit: 'c'}}, {id: 18372, quantity: {amount: 0.5, unit: 'tsp'}}];
    const img = 'https://spoonacular.com/recipeImages/678353-556x370.jpg';
    const recipe = new Recipe(24, img, ingredients, instructions, name, tags);

    const totalCost = recipe.getCost();

    expect(totalCost).to.equal('7.24');
  });

  it('should have a method that gets directions', () => {
    const name = 'Santiago\'s Nachos or whatever'
    const ingredients = ['Your sheer will']
    const tags = ['nothing']
    const img = 'nothing to see here'
    const instructions = [
      {
        'instruction': 'Just do whatever you want', 'number': 1
      },
      {
        'instruction': 'It\'s a free country.',
        'number': 2
      }]
    const nachos = new Recipe(24, img, ingredients, instructions, name, tags);

    expect(nachos.getDirections).to.be.a('function');
  });

  it('should have a method that returns an interpolated string of the directions', () => {
    const name = 'Santiago\'s Nachos or whatever'
    const ingredients = ['Your sheer will']
    const tags = ['nothing']
    const img = 'nothing to see here'
    const instructions = [
      {
        'instruction': 'Just do whatever you want', 'number': 1
      },
      {
        'instruction': 'It\'s a free country.',
        'number': 2
      }];
    const nachos = new Recipe(24, img, ingredients, instructions, name, tags);

    expect(nachos.getDirections()).to.equal('<b>Step 1:</b> Just do whatever you want<br><br><b>Step 2:</b> It\'s a free country.<br><br>');
  });

  it('should be able to return the list of ingredients needed as a string', () => {
    const name = 'week-old grass clippings';
    const tags = ['decomposing', 'snack', 'light', 'vegan', 'greens', 'browns'];
    const instructions = recipeData[1].instructions;
    const ingredients = [{id: 20081, quantity: {amount: 1.5, unit: 'c'}}, {id: 18372, quantity: {amount: 0.5, unit: 'tsp'}}];
    const img = 'https://spoonacular.com/recipeImages/678353-556x370.jpg';
    const recipe = new Recipe(24, img, ingredients, instructions, name, tags);
    
    const listOfIngredients = recipe.getIngredients();

    expect(listOfIngredients).to.equal('• 1.50 c wheat flour<br>• 0.50 tsp bicarbonate of soda<br>');
  });

  it('should be able to give you the list of ingredients and list of instructions as one big recipe', () => {
    const name = 'week-old grass clippings';
    const tags = ['decomposing', 'snack', 'light', 'vegan', 'greens', 'browns'];
    const instructions = [{instruction: 'Just do whatever you want', number: 1}, {instruction: 'It\'s a free country.', number: 2}];
    const ingredients = [{id: 20081, quantity: {amount: 1.5, unit: 'c'}}, {id: 18372, quantity: {amount: 0.5, unit: 'tsp'}}];
    const img = 'https://spoonacular.com/recipeImages/678353-556x370.jpg';
    const recipe = new Recipe(24, img, ingredients, instructions, name, tags);

    const bigOlRecipe = recipe.getRecipeDetails();

    expect(bigOlRecipe).to.equal('• 1.50 c wheat flour<br>• 0.50 tsp bicarbonate of soda<br><b>Step 1:</b> Just do whatever you want<br><br><b>Step 2:</b> It\'s a free country.<br><br>');
  });
});
