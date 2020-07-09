class Recipe {
  constructor(id, image, ingredients, instructions) {
    this.id = id;
    this.image = image;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }
}


if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
