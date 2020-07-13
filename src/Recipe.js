// const ingredientsData = require("../data/ingredients");

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
          // totalCost += recipeIngredient.quantity.amount * ingredient.estimatedCostInCents;
          totalCost += ingredient.estimatedCostInCents;
        }
      });
      return totalCost;
    }, 0);
    return (total / 100).toFixed(2);
  }

  getDirections() {
    const directions = this.instructions.reduce((final, step) => {
      return final += `<b>Step ${step.number}:</b> ${step.instruction}<br><br>`;
    }, '');
    return directions
  }

  getIngredients() {
    const ingredientList = this.ingredients.reduce((masterList, recipeIngredient) => {
      let name = '';
      ingredientsData.forEach(ingredient => {
        if (ingredient.id === recipeIngredient.id) {
          name = ingredient.name;
        }
      });
      if (recipeIngredient.quantity.amount % 1 === 0) {
        masterList += `• ${recipeIngredient.quantity.amount} ${recipeIngredient.quantity.unit} ${name}<br>`; // add .toFixed(2) to amount?
      } else {
        masterList += `• ${recipeIngredient.quantity.amount.toFixed(2)} ${recipeIngredient.quantity.unit} ${name}<br>`; // add .toFixed(2) to amount?
      }
      return masterList;
    }, '');
    return ingredientList;
  }

  getRecipeDetails() {
    return this.getIngredients() + this.getDirections();
  }
}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
