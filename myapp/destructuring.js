// var num=[1,2,3]
// var [a,b,c] =num
// console.log(a);


const person = { name: "John Doe", age: 30 };
const {name:naam,age:umar} =person
const {name,age} =person

// Normal way
console.log(person.name);
console.log(person.age);

// Destructured way
console.log(naam);
console.log(umar);

console.log(name);
console.log(age);