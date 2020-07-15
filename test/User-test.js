/*eslint-disable*/
const chai = require('chai');
const expect = chai.expect;
const Recipe = require('../src/Recipe');
const User = require('../src/User')
const Menu = require('../src/Menu');
const recipeData = require('../data/recipes');
const userData = require('../data/users');

describe.only('User', () => {

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', () => {
    const user = new User();

    expect(user).to.be.an.instanceof(User);
  });
    
  it('should be able to have a name', () => {
    const user = new User('Fred', 1);
    
    expect(user.name).to.equal('Fred');
  });
  
  it('should be able to have a different name', () => {
    const user = new User('Boris', 1);
    
    expect(user.name).to.equal('Boris');
  });
  
  it('should have an ID', () => {
    const user = new User('Wang Peng', 1);

    expect(user.id).to.equal(1);
  });

  it('should be able to take any number as an ID', () => {
    const user = new User('Franco', 24);

    expect(user.id).to.equal(24);
  });

  it('should be able to have a pantry', () => {
    const fakePantry = [{'ingredient': 1995, 'amount': 7}, {'ingredient': 19434, 'amount': 12}, {'ingredient': 1425, 'amount': 4}]
    const user = new User('Boris', 1, fakePantry);

    expect(user.pantry.ingredients).to.deep.equal([{ 'ingredient': 1995, 'amount': 7 }, { 'ingredient': 19434, 'amount': 12 }, { 'ingredient': 1425, 'amount': 4 }]);
  });

  it('should have an empty array to store favorite recipes in by default', () => {
    const user = new User();
    
    expect(user.favoriteRecipes).to.deep.equal([]);
  });
  
  it('should be able to add recipes to their favorite recipes', () => {
    const recipe = new Recipe(recipeData[0].id, recipeData[0].image, recipeData[0].ingredients, recipeData[0].instructions, recipeData[0].name, recipeData[0].tags);
    const user = new User();

    user.addFavorite(recipe);

    expect(user.favoriteRecipes[0]).to.equal(recipe);
  });
  
  it('should remove the recipe if it is already a favorite', () => {
    const recipe = new Recipe(recipeData[0].id, recipeData[0].image, recipeData[0].ingredients, recipeData[0].instructions, recipeData[0].name, recipeData[0].tags);
    const recipe2 = new Recipe(recipeData[1].id, recipeData[1].image, recipeData[1].ingredients, recipeData[1].instructions, recipeData[1].name, recipeData[1].tags);
    const user = new User();
    
    user.addFavorite(recipe);
    user.addFavorite(recipe2);

    expect(user.favoriteRecipes.length).to.equal(2);
    
    user.removeFavorite(recipe);
    
    expect(user.favoriteRecipes.length).to.equal(1);
    expect(user.favoriteRecipes[0]).to.equal(recipe2);
    
    user.addFavorite(recipe);
    
    expect(user.favoriteRecipes[1]).to.equal(recipe);
    
    user.removeFavorite(recipe);

    expect(user.favoriteRecipes[1]).to.equal(undefined);
  });

  it('should be able to search for a recipe by tag', () => {
    const recipes = [
      {
        name: 'Soggy Frosted Flakes',
        tags: ['breakfast', 'sauce', 'hot'],
      },
      {
        name: 'Dry Ice Clusters',
        tags: ['crunchy', 'dry', 'cold'],
      },
      {
        name: 'Irving\'s Saucy Hot Dogs',
        tags: ['sauce', 'thicc', 'hearty'],
      },
    ];
    
    const user = new User();

    const searchResults = user.filterByTag(recipes, 'hearty');

    expect(searchResults).to.deep.equal([recipes[2]]);
  });

  it('should be able to search for the tag no matter what kind of capitalization is used', () => {
    const recipes = [
      {
        name: 'Soggy Frosted Flakes',
        tags: ['breakfast', 'sauce', 'hot'],
      },
      {
        name: 'Dry Ice Clusters',
        tags: ['crunchy', 'dry', 'cold'],
      },
      {
        name: 'Irving\'s Saucy Hot Dogs',
        tags: ['sauce', 'thicc', 'hearty'],
      },
    ];
    
    const user = new User();

    const searchResults = user.filterByTag(recipes, 'bReaKFaSt');

    expect(searchResults).to.deep.equal([recipes[0]]);
  });

  it('should be able to search for the tag even if there is extra whitespace', () => {
    const recipes = [
      {
        name: 'Soggy Frosted Flakes',
        tags: ['breakfast', 'sauce', 'hot'],
      },
      {
        name: 'Dry Ice Clusters',
        tags: ['crunchy', 'dry', 'cold'],
      },
      {
        name: 'Irving\'s Saucy Hot Dogs',
        tags: ['sauce', 'thicc', 'hearty'],
      },
    ];
    
    const user = new User();

    const searchResults = user.filterByTag(recipes, 'bRea KFaSt  ');

    expect(searchResults).to.deep.equal([recipes[0]]);
  });

  it('should be able to return all of the recipes that include that tag', () => {
    const recipes = [
      {
        name: 'Soggy Frosted Flakes',
        tags: ['breakfast', 'sauce', 'hot'],
      },
      {
        name: 'Dry Ice Clusters',
        tags: ['crunchy', 'dry', 'cold'],
      },
      {
        name: 'Irving\'s Saucy Hot Dogs',
        tags: ['sauce', 'thicc', 'hearty'],
      },
    ];
    
    const user = new User();

    const searchResults = user.filterByTag(recipes, 'S auCe');

    expect(searchResults).to.deep.equal([recipes[0], recipes[2]]);
  });

  it('should be able to search for a recipe by name', () => {
    const recipes = [
      {
        name: 'Soggy Frosted Flakes',
        tags: ['breakfast', 'sauce', 'hot'],
      },
      {
        name: 'Dry Ice Clusters',
        tags: ['crunchy', 'dry', 'cold'],
      },
      {
        name: 'Irving\'s Saucy Hot Dogs',
        tags: ['sauce', 'thicc', 'hearty'],
      },
    ];
    
    const user = new User();

    const searchResults = user.searchByName(recipes, 'Dogs');

    expect(searchResults).to.deep.equal([recipes[2]]);
  });

  it('should be able to search for the name no matter what kind of capitalization is used', () => {
    const recipes = [
      {
        name: 'Soggy Frosted Flakes',
        tags: ['breakfast', 'sauce', 'hot'],
      },
      {
        name: 'Dry Ice Clusters',
        tags: ['crunchy', 'dry', 'cold'],
      },
      {
        name: 'Irving\'s Saucy Hot Dogs',
        tags: ['sauce', 'thicc', 'hearty'],
      },
    ];
    
    const user = new User();

    const searchResults = user.searchByName(recipes, 'soGGy');

    expect(searchResults).to.deep.equal([recipes[0]]);
  });

  it('should be able to search for the name even if there is extra whitespace', () => {
    const recipes = [
      {
        name: 'Soggy Frosted Flakes',
        tags: ['breakfast', 'sauce', 'hot'],
      },
      {
        name: 'Dry Ice Clusters',
        tags: ['crunchy', 'dry', 'cold'],
      },
      {
        name: 'Irving\'s Saucy Hot Dogs',
        tags: ['sauce', 'thicc', 'hearty'],
      },
    ];
    
    const user = new User();

    const searchResults = user.searchByName(recipes, 'doGs ');

    expect(searchResults).to.deep.equal([recipes[2]]);
  });

  it('should be able to return all of the recipes that include that name', () => {
    const recipes = [
      {
        name: 'Soggy Frosted Flakes',
        tags: ['breakfast', 'sauce', 'hot'],
      },
      {
        name: 'Dry Ice Clusters',
        tags: ['crunchy', 'dry', 'cold'],
      },
      {
        name: 'Irving\'s Saucy Hot Dogs',
        tags: ['sauce', 'thicc', 'hearty'],
      },
      {
        name: 'Lizzelle\'s Uneccesarily Large Hot Dogs',
        tags: ['big', 'lunch', 'hearty'],
      }
    ];
    
    const user = new User();

    const searchResults = user.searchByName(recipes, 'DogS');

    expect(searchResults).to.deep.equal([recipes[2], recipes[3]]);
  });

  it('should be able to search by name and tag at the same time', () => {
    const recipes = [
      {
        name: 'Soggy Frosted Flakes',
        tags: ['breakfast', 'sauce', 'hot'],
      },
      {
        name: 'Dry Ice Clusters',
        tags: ['crunchy', 'dry', 'cold'],
      },
      {
        name: 'Irving\'s Saucy Hot Dogs',
        tags: ['sauce', 'thicc', 'hearty'],
      },
      {
        name: 'Lizzelle\'s Uneccesarily Large Hot Dogs',
        tags: ['big', 'lunch', 'hearty'],
      }
    ];
    
    const user = new User();
    const searchWords = ['hOt']
    const searchResults = user.searchFor(recipes, searchWords);

    expect(searchResults).to.deep.equal([recipes[0], recipes[2], recipes[3]]);
  });

  it('should not return duplicates while searching by name and tag', () => {
    const recipes = [
      {
        name: 'Soggy Frosted Flakes',
        tags: ['breakfast', 'sauce', 'hot'],
      },
      {
        name: 'Dry Ice Clusters',
        tags: ['crunchy', 'dry', 'cold'],
      },
      {
        name: 'Irving\'s Saucy Hot Dogs',
        tags: ['sauce', 'thicc', 'hearty'],
      },
      {
        name: 'Lizzelle\'s Uneccesarily Large Hot Dogs',
        tags: ['big', 'lunch', 'hearty'],
      },
    ];

    const user = new User();
    const searchWords = ['hOt', 'doG', 'soggy', 'sau Ce'];
    const searchResults = user.searchFor(recipes, searchWords);

    expect(searchResults).to.deep.equal([recipes[0], recipes[2], recipes[3]]);
  });
});