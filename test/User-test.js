/*eslint-disable*/
const chai = require('chai');
const expect = chai.expect;
const Recipe = require('../src/Recipe');
const User = require('../src/User')
const recipeData = require('../data/recipes');
const userData = require('../data/user');

describe('User', () => {

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', () => {
    const user = new User();

    expect(user).to.be.an.instanceof(User);
  });

  it('should have an ID', () => {
    const user = new User(1);

    expect(user.id).to.equal(1);
  })

  it('should be able to take any number as an ID', () => {
    const user = new User(24);

    expect(user.id).to.equal(24);
  });