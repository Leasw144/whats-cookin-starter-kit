/*eslint-disable*/

const recipesDisplay = document.querySelector('.recipes-display');
const header = document.querySelector('h1');
const allRecipes = recipeData.map(recipe => {
  return new Recipe(recipe.id, recipe.image, recipe.ingredients, recipe.instructions, recipe.name, recipe.tags);
});
const currentUser = new User(usersData[randomIndex].name, usersData[randomIndex].id, usersData[randomIndex].pantry);
const randomIndex = Math.floor(Math.random() * usersData.length);


window.addEventListener('load', loadRecipes);



function loadUserName() {
  let name = currentUser.name.split(' ');
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

