class Menu {
  constructor() {
    this.recipesToCook = [];
  }

  addToMenu(recipe) {
    if (!this.recipesToCook.includes(recipe)) {
      this.recipesToCook.push(recipe);
    }
  }

  clearMenu() {
    this.recipesToCook = [];
  }
}

if (typeof module !== 'undefined') {
  module.exports = Menu;
}