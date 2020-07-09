class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}


if (typeof module !== 'undefined') {
  module.exports = User;
}