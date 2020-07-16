

const header = document.querySelector('h1');
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
    toggleDetailFavoriteIcon(event);
  } else if (event.target.innerText === 'Search') {
    event.preventDefault()
    searchRecipes();
  }
}

function searchRecipes() {
  let searchTerms = [];
  const searchField = document.querySelector('.input').value;
  searchTerms.push(...searchField.split(' '));
  if (header.innerText.split(' ').includes('Favorites,')) {
    loadRecipes(currentUser.searchFor(currentUser.favoriteRecipes, searchTerms));
  } else {
    loadRecipes(currentUser.searchFor(allRecipes, searchTerms));
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
    .getElementById(event.target.parentNode.id) 
    .querySelector('.favorite-button').innerText = '♥️';
}

function unFavorite(event) {
  currentUser.removeFavorite(makeNewRecipe(event.target.parentNode.id));
  document
    .getElementById(event.target.parentNode.id) 
    .querySelector('.favorite-button').innerText = '♡';
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
  hideElement('recipe-details-display');
  displayElement('all-recipes-display');
}

function displayRecipeDetails(id) {
  hideElement('all-recipes-display');
  displayElement('recipe-details-display');
  const recipe = makeNewRecipe(id);
  let isFavorite = currentUser.favoriteRecipes.some(fav => fav.id === recipe.id);
  let icon = isFavorite ? '♥️' : '♡';
  document.querySelector('.recipe-img-full').src = recipe.image;
  document.querySelector('.recipe-img-full').alt = `picture of ${recipe.name}`;
  document.querySelector('.name').innerText = recipe.name;
  document.querySelector('.ingredients').innerHTML = recipe.getIngredients();
  document.querySelector('.cost').innerHTML = `<b> Total Cost of Ingredients: $${recipe.getCost(recipe.ingredients)}</b>`;
  document.querySelector('.instructions').innerHTML = recipe.getDirections();
  document.querySelector('.details-favorite-button').innerText = `${icon} Favorite`;
  document.querySelector('.details-favorite-button').parentNode.id = recipe.id;
  document.querySelector('.needed-groceries').innerHTML = getGroceryList(recipe);
}

function getGroceryList(selectedRecipe) {
  const neededGroceries = currentUser.pantry.checkPantry(selectedRecipe);
  if(neededGroceries.length === 0) {
    return 'Nothing, you have everything you need to make this recipe!';
  } else {
    const groceryList = neededGroceries.reduce((masterGrocers, recipeIngredient) => {
      let name = '';
      ingredientsData.forEach(ingredient => {
        if(ingredient.id === recipeIngredient.id) {
          name = ingredient.name;
        }
      });
      masterGrocers += `• ${name} <br>`;
      return masterGrocers;
    }, '');
    return groceryList;
  }
}

function hideElement(className) {
  document.querySelector(`.${className}`).classList.add('hidden');
}

function displayElement(className) {
  document.querySelector(`.${className}`).classList.remove('hidden');
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
  const allRecipesDisplay = document.querySelector('.all-recipes-display');
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
            <button class='favorite-button'><img src='' alt=''>${icon}</button>
            <button class='details-button'><img src='' alt=''>Details</button>
            <button class='menu-button'><img src='' alt=''>+Menu</button>
          </div>
        </footer>
      </div>
    `;
  });
} 

