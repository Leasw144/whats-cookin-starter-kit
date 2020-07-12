const ingredientsData = require('../data/ingredients');

class Recipe {
  constructor(id, image, ingredients, instructions, name, tags) {
    this.id = id;
    this.image = image;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.name = name;
    this.tags = tags;
  }

  getCost() {
    const total = this.ingredients.reduce((totalCost, recipeIngredient) => {
      ingredientsData.forEach(ingredient => {
        if (ingredient.id === recipeIngredient.id) {
          totalCost += recipeIngredient.quantity.amount * ingredient.estimatedCostInCents;
        }
      });
      return totalCost;
    }, 0);
    return total / 100;
  }

  getDirections() {
    const directions = this.instructions.reduce((final, step) => {
      return final += `Step ${step.number}: ${step.instruction}

`
    }, '');
    console.log(directions)
    return directions
  }
}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
