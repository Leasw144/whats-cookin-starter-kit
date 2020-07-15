// const Menu = require('./Menu');
// const Pantry = require('./Pantry');

class User {
  constructor(name, id, pantry) {
    this.name = name || 'Guest';
    this.id = id || 0;
    this.pantry = new Pantry(pantry);
    this.favoriteRecipes = [];
    this.menu = new Menu();
  }

  addFavorite(recipe) {
    this.favoriteRecipes.push(recipe);
  }

  removeFavorite(recipe) {
    this.favoriteRecipes.forEach((item, index) => {
      if (item.id === recipe.id) {
        this.favoriteRecipes.splice(index, 1);
      }
    });
  }

  filterByTag(collection, tag) {
    return collection.filter((recipe) => {
      let cleanSearch = tag.toLowerCase().trim().split(' ').join('');
      return recipe.tags.includes(cleanSearch);
    });
  }

  searchByName(collection, name) {
    return collection.filter((recipe) => {
      let recipeWords = recipe.name.toLowerCase().split(' ');
      let cleanSearch = name.toLowerCase().trim();
      return recipeWords.includes(cleanSearch);
    });
  }

  searchFor(collection, searchTerms) {
    let searchResults = searchTerms.reduce((results, term) => {
      let tags = this.filterByTag(collection, term);
      let names = this.searchByName(collection, term);
      return results.concat(tags, names);
    }, []);
    let unique = [...new Set(searchResults)];
    return unique;
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}