const personName = "Mohibullah";
let age = 24;
let isStudent = true;
const favoriteLanguage = "JavaScript";
console.log("Name:", personName);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Favorite Language:", favoriteLanguage);

const person = {
  name: "Mohibullah",
  age: 24
};

const anotherPerson = person;
anotherPerson.age = 25;

console.log("Person Age:", person.age); // 25 😮
