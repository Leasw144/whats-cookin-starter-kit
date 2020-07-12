/*eslint-disable*/

const recipesDisplay = document.querySelector('.recipes-display');
const allRecipes = recipeData.map(recipe => {
  return new Recipe(recipe.id, recipe.image, recipe.ingredients, recipe.instructions, recipe.name, recipe.tags);
});
const currentUser = new User(usersData[0].name, usersData[0].id, usersData[0].pantry);

window.addEventListener('load', loadRecipes);

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

