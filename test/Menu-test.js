/*eslint-disable*/
const chai = require('chai');
const expect = chai.expect;
const Pantry = require('../src/Pantry');
const Menu = require('../src/Menu');

describe('Menu', () => {

  it('should be a function', () => {
    expect(Menu).to.be.a('function');
  });

  it('should be an instance of Menu', () => {
    const menu = new Menu();

    expect(menu).to.be.an.instanceof(Menu);
  });
}