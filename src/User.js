const Menu = require("./Menu");

class User {
  constructor(name, id, pantry) {
    this.name = name || 'Guest';
    this.id = id || 0;
    this.pantry = pantry || [];
    this.favoriteRecipes = [];
    this.menu = new Menu();
  }

  toggleFavorite(recipe) {
    if (this.favoriteRecipes.includes(recipe)) {
      let i = this.favoriteRecipes.indexOf(recipe);
      this.favoriteRecipes.splice(i, 1);
    } else {
      this.favoriteRecipes.push(recipe);
    }
  }
}


if (typeof module !== 'undefined') {
  module.exports = User;
}