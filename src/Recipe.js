class Recipe {
  constructor(id, image) {
    this.id = id;
    this.image = image;
  }
}


if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
