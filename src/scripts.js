// const recipesData = require("../data/recipes");
const recipesDisplay = document.querySelector('.recipes-display');
// const currentUser = new User();

window.addEventListener('load', loadRecipes);

function loadRecipes() {
  recipesDisplay.innerHTML = '';
  recipeData.forEach(recipe => {
    recipesDisplay.innerHTML += `
      <div class='recipe-card'>
        <img class='recipe-img' src=${recipe.image} alt='picture of ${recipe.name}'/>
        <footer class='card-footer'>
          <p>${recipe.name}</p>
          <div class='card-buttons'>
            <button><img src="" alt="">Fav</button>
            <button><img src="" alt="">Menu</button>
            <button><img src="" alt="">$$$</button>
          </div>
        </footer>
      </div>
    `;
  });
}
