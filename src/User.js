// const Menu = require("./Menu");

class User {
  constructor(name, id, pantry) {
    this.name = name || "Guest";
    this.id = id || 0;
    this.pantry = new Pantry(pantry);
    this.favoriteRecipes = [];
    this.menu = new Menu();
  }

  // toggleFavorite(recipe) {
  //   const favs = this.favoriteRecipes;
  //   const recipeExists = favs.some(fav => fav.id === recipe.id);
  //   /*if (favs.length === 0) {
  //     favs.push(recipe);
  //   } else */if (recipeExists) {
  //     const i = favs.indexOf(recipe);
  //     favs.splice(i, 1);
  //   } else {
  //     favs.push(recipe);
  //   }
  // }

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