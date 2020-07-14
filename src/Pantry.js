class Pantry {
  constructor(pantry) {
    this.ingredients = pantry.ingredients;
  }


  checkPantry(recipeArr) {
    return recipeArr.reduce((groceryList, recipe) => {
      recipe.ingredients.forEach(ingredient => {
        pantry.forEach(pantryItem => {
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

  // This method will take in a menu which is an array of object recipes 
  // Our return be a true or false 
  // // if true, there are sufficient ingredients in the pantry to make the dish
  // // if false, there are NOT sufficient ingredients in the pantry.
  // // This will be a helper function of returnGrocery List function

  // First we'll want to iterate through each recipe in the menu(forEach)
  // // We'll then want to loop through the pantry on each recipe's ingredient to see if any ingredients matches recipe.ingredients
  // // // ex. (if(ingredientInPantry === recipe.ingredient.id))
  // // If there is no instance of the ingredient in the pantry, return false
  // // If there IS an instance of the ingredient in the pantry BUT recipe.amount is larger than the amount in the pantry, return false.
  // // //   ex. (if(ingredientInPantry === recipe.ingredient.id && ingredientInPantry < recipe.ingredient))
  // // ** alternatively, push the ingredient id into a new array using filter
} 



if (typeof module !== 'undefined') {
  module.exports = Pantry;
}


const recipeData = [
  {
    "id": 595736,
    "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
    "ingredients": [
      {
        "id": 20081,
        "quantity": {
          "amount": 1.5,
          "unit": "c"
        }
      },
      {
        "id": 18372,
        "quantity": {
          "amount": 0.5,
          "unit": "tsp"
        }
      },
      {
        "id": 1123,
        "quantity": {
          "amount": 1,
          "unit": "large"
        }
      }]
  }
]

const pantry = [
{
  "ingredient": 11477,
    "amount": 4
},
{
  "ingredient": 11297,
    "amount": 4
},
{
  "ingredient": 1082047,
    "amount": 10
},
{
  "ingredient": 20081,
    "amount": 5
},
{
  "ingredient": 11215,
    "amount": 5
}
]