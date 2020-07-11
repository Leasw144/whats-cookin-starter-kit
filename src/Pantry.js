class Pantry {
  constructor() {
    this.ingredients = [];
  }

  checkPantry(menu) {
    return menu;
  }
  
}

if (typeof module !== 'undefined') {
  module.exports = Pantry;
}