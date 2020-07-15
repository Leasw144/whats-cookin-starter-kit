/*eslint-disable*/

const header = document.querySelector("h1");
const detailsFavoriteButton = document.querySelector('.details-favorite-button');
const randomIndex = Math.floor(Math.random() * usersData.length);
const currentUser = new User(usersData[randomIndex].name, usersData[randomIndex].id, usersData[randomIndex].pantry);
const allRecipes = recipeData.map(recipe => {
  return new Recipe(recipe.id, recipe.image, recipe.ingredients, recipe.instructions, recipe.name, recipe.tags);
});

window.addEventListener('load', loadData);
document.addEventListener('click', clickWhat);

function clickWhat(event) {
  if (event.target.innerText === 'Details' || event.target.classList.contains('recipe-img')) {
    displayRecipeDetails(event.target.parentNode.id);
  } else if (event.target.innerText === 'View All Recipes') {
    loadUserName();
    loadRecipes(allRecipes);
    displayAllRecipes();
  } else if (event.target.innerText === 'Back to Recipes') { 
    whatRecipes();
    displayAllRecipes();
  } else if (event.target.innerText === '♥️' && header.innerText.split(' ').includes('Favorites,')) {
    currentUser.removeFavorite(makeNewRecipe(event.target.parentNode.id));
    loadRecipes(currentUser.favoriteRecipes);
    loadFavoritesHeader();
  } else if (event.target.classList.contains('favorite-button')) {
    toggleFavorite(event);
  } else if (event.target.innerText === 'View Favorite Recipes') {
    loadRecipes(currentUser.favoriteRecipes);
    displayAllRecipes();
    loadFavoritesHeader();
  } else if (event.target.classList.contains('details-favorite-button')) {
    toggleDetailFavoriteIcon(event); // How to get header to update if last favorite is removed in detail view of the favorites view?
  }
}

function whatRecipes() {
  if (header.innerText.split(' ').includes('Favorites,')) {
    loadRecipes(currentUser.favoriteRecipes);
  } else {
    loadRecipes(allRecipes);
  }
}

function toggleFavorite(event) {
  if (event.target.innerText === '♡') {
    favorite(event);  
  } else if (event.target.innerText === '♥️') {
    unFavorite(event);
  }
}

function favorite(event) {
  currentUser.addFavorite(makeNewRecipe(event.target.parentNode.id));  
  document
    .getElementById(event.target.parentNode.id) // does this need parentNode? 
    .querySelector(".favorite-button").innerText = "♥️";
}

function unFavorite(event) {
  currentUser.removeFavorite(makeNewRecipe(event.target.parentNode.id));
  document
    .getElementById(event.target.parentNode.id) // does this need parentNode? 
    .querySelector(".favorite-button").innerText = "♡";
}

function toggleDetailFavoriteIcon(event) {
  if (detailsFavoriteButton.innerText.split(' ').includes('♡')) {
    detailsFavoriteButton.innerText = '♥️ Favorite';
    currentUser.addFavorite(makeNewRecipe(event.target.parentNode.id));
  } else if (detailsFavoriteButton.innerText.split(' ').includes('♥️')) {
    detailsFavoriteButton.innerText = '♡ Favorite';
    currentUser.removeFavorite(makeNewRecipe(event.target.parentNode.id));
    loadRecipes(currentUser.favoriteRecipes);
  }
}

function makeNewRecipe(id) {
  const recipe = recipeData[findRecipe(id)];
  return new Recipe(recipe.id, recipe.image, recipe.ingredients, recipe.instructions, recipe.name, recipe.tags);
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

function displayAllRecipes() {
   hideElement("recipe-details-display");
   displayElement("all-recipes-display");
}

function displayRecipeDetails(id) {
  hideElement('all-recipes-display');
  displayElement('recipe-details-display');
  const recipe = makeNewRecipe(id);
  let isFavorite = currentUser.favoriteRecipes.some(fav => fav.id === recipe.id); //Maybe extract this and make a function
  let icon = isFavorite ? '♥️' : '♡';
  document.querySelector(".recipe-img-full").src = recipe.image;
  document.querySelector(".recipe-img-full").alt = `picture of ${recipe.name}`;
  document.querySelector(".name").innerText = recipe.name;
  document.querySelector('.ingredients').innerHTML = recipe.getIngredients();
  document.querySelector('.cost').innerHTML = `<b> Total Cost of Ingredients: $${recipe.getCost()}</b>`;
  document.querySelector(".instructions").innerHTML = recipe.getDirections();
  document.querySelector('.details-favorite-button').innerText = `${icon} Favorite`;
  document.querySelector('.details-favorite-button').parentNode.id = recipe.id;
  
  document.querySelector(".needed-groceries").innerText = getGroceryList(recipe)
}

function getGroceryList(selectedRecipe) {
  debugger
  const neededGroceries = currentUser.pantry.checkPantry(selectedRecipe);
  if(neededGroceries.length === 0) {
    return 'You\'re ready to make this recipe!'
  } else {
  const groceryList = neededGroceries.reduce((masterGrocers, recipeIngredient) => {
    let name = '';
    ingredientsData.forEach(ingredient => {
      if(ingredient.id === recipeIngredient.id) {
        name = ingredient.name
      }
    })
  masterGrocers += `• ${name}<br>`
  return masterGrocers
  }, '')
  
  return groceryList
    }
  // Taking in an array of objects that contains an id, and an object
  // want to return a string that lists the needed ingredients
  // // similar to getIngredients of Recipe.js
  // Because you want it all as a collection of strings, should use reduce to loop through the recipes ingredients
  // create an empty string variable of name 
  // loop through the ingredientsData file using forEach
  // // if the id in ingredientsData(probably named as ingredient.id) matches recipeIngredient, assign var name to ingredient.name
  // GroceryList is your acc
  // // have that += the interpolated information
  // // // probably like, ` - ${name} - ${recipeIngredient.quantity.amount}`
}


function hideElement(className) {
  document.querySelector(`.${className}`).classList.add("hidden");
}

function displayElement(className) {
  document.querySelector(`.${className}`).classList.remove("hidden");
}

function loadData() {
  loadUserName();
  loadRecipes(allRecipes);
}

function loadUserName() {
  const name = currentUser.name.split(' ');
  header.innerText = `What's Cookin, ${name[0]}?`;
}

function loadFavoritesHeader() {
  const name = currentUser.name.split(' ');
  if (currentUser.favoriteRecipes.length === 0) {
    header.innerText = `You Have No Favorites, ${name[0]}`;
  } else {
    header.innerText = `Here Are Your Favorites, ${name[0]}`;
  }
}

function loadRecipes(collection) {
  const allRecipesDisplay = document.querySelector(".all-recipes-display");
  allRecipesDisplay.innerHTML = '';
  collection.forEach(recipe => {
    let isFavorite = currentUser.favoriteRecipes.some(fav => fav.id === recipe.id);
    let icon = isFavorite ? '♥️' : '♡';
    allRecipesDisplay.innerHTML += `
      <div id='${recipe.id}' class='recipe-card'>
        <img class='recipe-img' src=${recipe.image} alt='picture of ${recipe.name}'/>
        <footer class='card-footer'>
          <p>${recipe.name}</p>
          <div id='${recipe.id}' class='card-buttons'>
            <button class='favorite-button'><img src="" alt="">${icon}</button>
            <button class='details-button'><img src="" alt="">Details</button>
            <button class='menu-button'><img src="" alt="">+Menu</button>
          </div>
        </footer>
      </div>
    `;
  });
} // Semantically/best practices dictate that id's should only be used once. should we change how this works?

