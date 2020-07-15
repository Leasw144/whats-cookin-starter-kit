const Menu = require("./Menu");
const Pantry = require('./Pantry');

class User {
  constructor(name, id, pantry) {
    this.name = name || "Guest";
    this.id = id || 0;
    this.pantry = new Pantry(pantry);
    this.favoriteRecipes = [];
    this.menu = new Menu();
  }

  addFavorite(recipe) {
    this.favoriteRecipes.push(recipe); // Need to add to tests
  }

  removeFavorite(recipe) {
    this.favoriteRecipes.forEach((item, index) => {
      if (item.id === recipe.id) {
        this.favoriteRecipes.splice(index, 1); // Need to add to tests
      }
    });
  }
  
  filterByType(collection, tag) {
    return collection.filter((recipe) => {
      return recipe.tags.includes(tag);
    });
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}