("use strict");

import users from "./users.js";

console.warn("TASK-01");
const getUserNames = (users) => {
  return users.map((user) => user.name);
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

console.warn("TASK-02"); //======================================================================================
const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

console.warn("TASK-03"); //======================================================================================
const getUsersWithGender = (users, gender) => {
  const usersGender = users.filter((user) => {
    return user.gender === gender;
  });
  return usersGender.map((user) => {
    return user.name;
  });
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

console.warn("TASK-04"); //======================================================================================
const getInactiveUsers = (users) => {
  return users.filter((user) => !user.isActive);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

console.warn("TASK-05"); //======================================================================================
const getUserWithEmail = (users, email) => {
  // return users.filter((user) => user.email === email);
  return users.find((user) => user.email === email);
};

console.table(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.table(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

console.warn("TASK-06"); //======================================================================================
const getUsersWithAge = (users, min, max) => {
  return users.filter((user) => user.age >= min && user.age < max);
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

console.warn("TASK-07"); //======================================================================================
const calculateTotalBalance = (users) => {
  return users.reduce((amount, user) => amount + user.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916

console.warn("TASK-08"); //======================================================================================
const getUsersWithFriend = (users, friendName) => {
  const usersWithFriend = users.filter((user) =>
    user.friends.find((friend) => {
      return friend === friendName;
    })
  );
  return usersWithFriend.map((user) => user.name);
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

console.warn("TASK-09"); //======================================================================================
const getNamesSortedByFriendsCount = (users) => {
  const sortedByFriends = users.sort((prevFriend, nextFriend) => {
    return prevFriend.friends.length - nextFriend.friends.length;
  });
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
