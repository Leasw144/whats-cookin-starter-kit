
class Pantry {
  constructor(pantry) {
    this.ingredients = pantry
  }

  checkPantry = (menu) => {
    const fullRecipe = [menu]
    return fullRecipe.reduce((groceryList, recipe) => {
      recipe.ingredients.forEach(ingredient => {
        this.ingredients.forEach(pantryItem => {
          if (pantryItem.ingredient === ingredient.id && pantryItem.amount < ingredient.quantity.amount) {
            groceryList.push(ingredient)
          }
        });
      });
      return groceryList
    }, []);
  }
} 

if (typeof module !== 'undefined') {
  module.exports = Pantry;
}


