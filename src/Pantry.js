class Pantry {
  constructor(pantry) {
    this.ingredients = [...pantry];
  }
  
}

if (typeof module !== 'undefined') {
  module.exports = Pantry;
}