/*eslint-disable*/

// const Recipe = require("./Recipe");
// const recipeData = require("../data/recipes");

const allRecipesDisplay = document.querySelector('.all-recipes-display');
const allRecipes = recipeData.map(recipe => {
  return new Recipe(recipe.id, recipe.image, recipe.ingredients, recipe.instructions, recipe.name, recipe.tags);
});
const randomIndex = Math.floor(Math.random() * usersData.length);
const currentUser = new User(usersData[randomIndex].name, usersData[randomIndex].id, usersData[randomIndex].pantry);

window.addEventListener('load', loadData);
document.addEventListener('click', clickWhat);

function clickWhat(event) {
  if (event.target.innerText.includes('Details')) {
    displayRecipeDetails(event.target.parentNode.id);
  } else if (event.target.innerText.includes('Back to Recipes') || event.target.innerText.includes('View All Recipes')){
    displayAllRecipes();
  }
}

function makeNewRecipe(id) {
  const index = findRecipe(id);
  const recipeId = recipeData[index].id;
  const recipeImage = recipeData[index].image;
  const recipeIngredients = recipeData[index].ingredients;
  const recipeInstructions = recipeData[index].instructions;
  const recipeName = recipeData[index].name;
  const recipeTags = recipeData[index].tags;
  return new Recipe(recipeId, recipeImage, recipeIngredients, recipeInstructions, recipeName, recipeTags);
}

function displayAllRecipes() {
   hideElement("recipe-details-display");
   displayElement("all-recipes-display");
}

function displayRecipeDetails(id) {
  const recipeDetailsDisplay = document.querySelector('.recipe-details-display');
  const recipe = makeNewRecipe(id)
  hideElement('all-recipes-display');
  displayElement('recipe-details-display');
  recipeDetailsDisplay.innerHTML = `
    <div class='recipe-details'>
      <div class='image-buttons-tags'>
        <img class='recipe-img-full' src='${recipe.image}' alt='picture of ${recipe.name}' />
        <footer class='recipe-footer'>
          <div class='recipe-buttons'>
            <button><img src="" alt="">♡ Favorite</button>
            <button><img src="" alt="">Add to Menu</button>
            <button><img src="" alt="">Back to Recipes</button>
          </div>
        </footer>
      </div>
      <div class='name-ingredients-instructions'>
        <p class='name'>${recipe.name}</p>
        <p class='ingredients'>${recipe.getIngredients()}</p>
        <p>--- Total Cost of Ingredients: $${recipe.getCost()}</p>
        <p class='instructions'>${recipe.getDirections()}</p>
      </div>
    </div>
  `;



  // this function needs to
  //// add hidden to the classList of all-recipes-display (section for cards)
  //// remove hidden from the classList of recipe-details-display (section for details)
  //// inject new innerHTML into recipe-details-display
  ////// to do this, we need to retrieve the id of the recipe card that was selected
  ////// we need to loop through recipes dataset, and find the recipe with the matching id.
  ////// if the currentrecipe.id === recipeData.id, we will inject the details of that recipe into the 
  ////// innerHtml of recipe-details-display usiong the assignment operator.
}

function findRecipe(id) {
  let index;
  recipeData.forEach(recipe => {
    if (recipe.id === parseInt(id)) {
      index = recipeData.indexOf(recipe);
    }
  });
  return index;
}

function hideElement(className) {
  document.querySelector(`.${className}`).classList.add("hidden");
}

function displayElement(className) {
  document.querySelector(`.${className}`).classList.remove("hidden");
}

function loadData() {
  loadUserName();
  loadRecipes();
}

function loadUserName() {
  const header = document.querySelector('h1');
  const name = currentUser.name.split(' ');
  header.innerText = `What's Cookin, ${name[0]}?`;
}

function loadRecipes() {
  allRecipesDisplay.innerHTML = '';
  allRecipes.forEach(recipe => {
    allRecipesDisplay.innerHTML += `
      <div class='recipe-card'>
        <img class='recipe-img' src=${recipe.image} alt='picture of ${recipe.name}'/>
        <footer class='card-footer'>
          <p>${recipe.name}</p>
          <div id='${recipe.id}' class='card-buttons'>
            <button><img src="" alt="">♡</button>
            <button><img src="" alt="">Details</button>
            <button><img src="" alt="">+Menu</button>
          </div>
        </footer>
      </div>
    `;
  });
}

