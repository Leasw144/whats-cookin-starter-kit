class Pantry {
  constructor(pantry) {
    this.ingredients = [...pantry];
  }

  checkPantry(menu) {
    return menu;
  }

}

if (typeof module !== 'undefined') {
  module.exports = Pantry;
}