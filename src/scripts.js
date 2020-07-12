/*eslint-disable*/

const allRecipesDisplay = document.querySelector('.all-recipes-display');
const allRecipes = recipeData.map(recipe => {
  return new Recipe(recipe.id, recipe.image, recipe.ingredients, recipe.instructions, recipe.name, recipe.tags);
});
const randomIndex = Math.floor(Math.random() * usersData.length);
const currentUser = new User(usersData[randomIndex].name, usersData[randomIndex].id, usersData[randomIndex].pantry);

window.addEventListener('load', loadData);
document.addEventListener('click', clickWhat);

function clickWhat(event) {
  if (event.target.classList.contains());
}

function displayRecipeDetails() {
  hideElement('all-recipes-display');
  displayElement('recipe-details-display');

  // this function needs to
  //// add hidden to the classList of all-recipes-display (section for cards)
  //// remove hidden from the classList of recipe-details-display (section for details)
  //// inject new innerHTML into recipe-details-display
  ////// to do this, we need to retrieve the id of the recipe card that was selected
  ////// we need to loop through recipes dataset, and find the recipe with the matching id.
  ////// if the currentrecipe.id === recipeData.id, we will inject the details of that recipe into the 
  ////// innerHtml of recipe-details-display usiong the assignment operator.
}

function findRecipe(event) {
  // take in an event that happens when a details button is clicked
  // return the index of the recipe in the dataset 
  // retrieve the id of the element that was clicked on
  ////event.target.parent.id ?
}

function getId(event) {
  for (var i = 0; i < parent.children.length; i++) {
    if (!parent.children[i].classList.contains("btn-default")) {
      return parent.children[i].innerText;
    }
  }
  return "";
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
      <div id='${recipe.id}' class='recipe-card'>
        <img class='recipe-img' src=${recipe.image} alt='picture of ${recipe.name}'/>
        <footer class='card-footer'>
          <p>${recipe.name}</p>
          <div class='card-buttons'>
            <button><img src="" alt="">♡</button>
            <button><img src="" alt="">Details</button>
            <button><img src="" alt="">+Menu</button>
          </div>
        </footer>
      </div>
    `;
  });
}

