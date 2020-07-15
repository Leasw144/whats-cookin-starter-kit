/*eslint-disable*/
const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');
const userData = require('../data/users');
const Pantry = require('../src/Pantry');
const Recipe = require('../src/Recipe');

describe('Pantry', () => {

  it('should be a function', () => {
    expect(Pantry).to.be.a('function');
  });

  it('should be an instance of Pantry', () => {
    const pantry = new Pantry();

    expect(pantry).to.be.an.instanceof(Pantry);
  });

  it('should have a list of ingredients', () => {
    const pantry = new Pantry();

    expect(pantry).to.be.an.instanceof(Pantry);
  });

  it('should have a checkPantry method', () => {
    const pantry = new Pantry();

    pantry.checkPantry()

    expect(pantry.checkPantry).to.be.a('function');
  });
  it('should be able to accept a recipe as an argument', () => {
    const recipe = new Recipe();
    const pantry = new Pantry(recipe);
    const result = pantry.checkPantry(recipe);

    expect(result).to.equal(recipe);
  });

  it('should be able to check recipe ingredients against the pantry and return an array of needed items and their amounts', () => {
    
    const recipe = [
      {
        "id": 595736,
        "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
        "ingredients": [
          {"id": 20081,
            "quantity": {
              "amount": 8.5
            }
          },
          {
            "id": 18372,
            "quantity": {
              "amount": 10
            }
          },
          {
            "id": 1123,
            "quantity": {
              "amount": 1
            }
          }]
      }
    ]

    // const pantry = new Pantry(); // not sure what this is going to look like in implementation
    
    const myPantry = [
      {
        "ingredient": 11477,
        "amount": 4
      },
      {
        "ingredient": 18372,
        "amount": 4
      },
      {
        "ingredient": 1082047,
        "amount": 10
      },
      {
        "ingredient": 20081,
        "amount": 1
      },
      {
        "ingredient": 1123,
        "amount": 9
      }
    ]
    const pantry = new Pantry(myPantry);
    const result = pantry.checkPantry(recipe);
    expect(result).to.deep.equal([
      { id: 20081, quantity: { amount: 7.5} },
      { id: 18372, quantity: { amount: 6} }
    ]);
  });
  
  // should be able to check against properties between two objects
  // 



  
});