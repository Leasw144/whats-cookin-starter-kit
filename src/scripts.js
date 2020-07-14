/*eslint-disable*/

const header = document.querySelector("h1");
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
  } else if (event.target.innerText === 'Back to Recipes' || event.target.innerText=== 'View All Recipes'){
    loadUserName();
    loadRecipes(allRecipes);
    displayAllRecipes();
  } else if (event.target.innerText === '♡') {
    currentUser.addFavorite(makeNewRecipe(event.target.parentNode.id));
    document
      .getElementById(event.target.parentNode.id)
      .querySelector('.favorite-button').innerText = "♥️";
  } else if (event.target.innerText === '♥️' && header.innerText.split(' ').includes('Favorites,')) {
    currentUser.removeFavorite(makeNewRecipe(event.target.parentNode.id));
    loadRecipes(currentUser.favoriteRecipes);
  } else if (event.target.innerText === '♥️') {
    currentUser.removeFavorite(makeNewRecipe(event.target.parentNode.id));
    document
      .getElementById(event.target.parentNode.id)
      .querySelector(".favorite-button").innerText = "♡";
  } else if (event.target.innerText === 'View Favorite Recipes') {
    loadFavoritesHeader();
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
  document.querySelector(".recipe-img-full").src = recipe.image;
  document.querySelector(".recipe-img-full").alt = `picture of ${recipe.name}`;
  document.querySelector(".name").innerText = recipe.name;
  document.querySelector('.ingredients').innerHTML = recipe.getIngredients();
  document.querySelector('.cost').innerHTML = `<b> Total Cost of Ingredients: $${recipe.getCost()}</b>`;
  document.querySelector(".instructions").innerHTML = recipe.getDirections();


  // this function needs to
  //// add hidden to the classList of all-recipes-display (section for cards)
  //// remove hidden from the classList of recipe-details-display (section for details)
  //// inject new innerHTML into recipe-details-display
  ////// to do this, we need to retrieve the id of the recipe card that was selected
  ////// we need to loop through recipes dataset, and find the recipe with the matching id.
  ////// if the currentrecipe.id === recipeData.id, we will inject the details of that recipe into the 
  ////// innerHtml of recipe-details-display usiong the assignment operator.
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
  header.innerText = `Here Are Your Favorites, ${name[0]}`;
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

