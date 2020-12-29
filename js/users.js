"use strict";

class User {
  constructor({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }

  getInfo() {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
    );
  }
}

console.log(User);

const mango = new User({
  name: "Mango",
  age: 25,
  followers: 1354,
});

mango.getInfo(); // User Mango is 25 years old and has 1354 followers

const poly = new User({
  name: "Poly",
  age: 3,
  followers: 17,
});

poly.getInfo(); // User Poly is 3 years old and has 17 followers
