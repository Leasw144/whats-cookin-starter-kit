class Pantry {
  constructor(pantry) {
    this.ingredients = pantry
  }


  checkPantry(menu) {
    return menu.reduce((groceryList, recipe) => {
      recipe.ingredients. forEach(ingredient => {
        this.ingredients.forEach(pantryItem => {
          if (pantryItem.ingredient === ingredient.id && pantryItem.amount < ingredient.quantity.amount) {
            const amountNeeded = ingredient.quantity.amount - pantryItem.amount
            ingredient.quantity.amount = amountNeeded
            groceryList.push(ingredient)
          }
        })
      })
      return groceryList
    }, [])
  }
} 



if (typeof module !== 'undefined') {
  module.exports = Pantry;
}


