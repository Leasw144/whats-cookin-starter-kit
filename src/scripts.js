/*eslint-disable*/

const recipesDisplay = document.querySelector('.recipes-display');
const allRecipes = recipeData.map(recipe => {
  return new Recipe(recipe.id, recipe.image, recipe.ingredients, recipe.instructions, recipe.name, recipe.tags);
});
const randomIndex = Math.floor(Math.random() * usersData.length);
const currentUser = new User(usersData[randomIndex].name, usersData[randomIndex].id, usersData[randomIndex].pantry);


window.addEventListener('load', loadData);

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
  recipesDisplay.innerHTML = '';
  allRecipes.forEach(recipe => {
    recipesDisplay.innerHTML += `
      <div id ='${recipe.id}' class='recipe-card'>
        <img class='recipe-img' src=${recipe.image} alt='picture of ${recipe.name}'/>
        <footer class='card-footer'>
          <p>${recipe.name}</p>
          <div class='card-buttons'>
            <button><img src="" alt="">♡</button>
            <button><img src="" alt="">Menu</button>
            <button><img src="" alt="">$$$</button>
          </div>
        </footer>
      </div>
    `;
  });
}

