class Recipe {
  constructor(id, image, ingredients) {
    this.id = id;
    this.image = image;
    this.ingredients = ingredients;
  }
}


if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
