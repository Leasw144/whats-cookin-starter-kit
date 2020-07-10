const Menu = require("./Menu");

class User {
  constructor(name, id, pantry) {
    this.name = name || "Guest";
    this.id = id || 0;
    this.pantry = pantry || [];
    this.favoriteRecipes = [];
    this.menu = new Menu();
  }

  toggleFavorite = (recipe) => {
    const favs = this.favoriteRecipes;
    if (favs.includes(recipe)) {
      const i = favs.indexOf(recipe);
      favs.splice(i, 1);
    } else {
      favs.push(recipe);
    }
  };
}


if (typeof module !== 'undefined') {
  module.exports = User;
}