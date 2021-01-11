("use strict");

import users from "./users.js";

console.warn("TASK-01");
const getUserNames = (users) => users.map((user) => user.name);

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

console.warn("TASK-02"); //======================================================================================
const getUsersWithEyeColor = (users, color) =>
  users.filter(({ eyeColor }) => eyeColor === color);

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

console.warn("TASK-03"); //======================================================================================
const getUsersWithGender = (users, gender) => {
  const usersGender = users.filter(({ gender }) => gender === gender);
  return usersGender.map(({ name }) => name);
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

console.warn("TASK-04"); //======================================================================================
const getInactiveUsers = (users) => users.filter(({ isActive }) => !isActive);

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

console.warn("TASK-05"); //======================================================================================
const getUserWithEmail = (users, email) =>
  users.find(({ email }) => email === email);

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

console.warn("TASK-06"); //======================================================================================
const getUsersWithAge = (users, min, max) =>
  users.filter(({ age }) => age >= min && age < max);

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40)); // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

console.warn("TASK-07"); //======================================================================================
const calculateTotalBalance = (users) =>
  users.reduce((amount, { balance }) => amount + balance, 0);

console.log(calculateTotalBalance(users)); // 20916

console.warn("TASK-08"); //======================================================================================
const getUsersWithFriend = (users, friendName) => {
  const usersWithFriend = users.filter(({ friends }) =>
    friends.find((friend) => friend === friendName)
  );
  return usersWithFriend.map(({ name }) => name);
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

console.warn("TASK-09"); //======================================================================================
const getNamesSortedByFriendsCount = (users) => {
  const sortedByFriends = users.sort(
    (prevFriend, nextFriend) =>
      prevFriend.friends.length - nextFriend.friends.length
  );
  return sortedByFriends.map((user) => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

console.warn("TASK-10"); //======================================================================================
const getSortedUniqueSkills = (users) => {
  const sortedUniqueSkills = users.reduce((totalSkills, user) => {
    totalSkills.push(...user.skills);
    return totalSkills.reduce(
      (unique, skill) => (unique.includes(skill) ? unique : [...unique, skill]),
      []
    );
  }, []);
  return sortedUniqueSkills.sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
