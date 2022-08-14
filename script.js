'use strict';

//constructor names always start with capital letter
const Person = function(firstName, birthYear){
this.firstName = firstName;
this.birthYear = birthYear;

//add method bad practice never create method inside of constructor 
// this.clacAge = function(){
//     console.log(2037 - this.birthYear);
// }

};

//constructors called using the  "New" keyword
const jonas = new Person('Jonas', 1991);
// console.log(jonas);

//1.first new empty object is created
//2.function is called, this = {}
//3.{} linked to prototype
//4.function automatically returns {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975)
// console.log(matilda, jack);

// console.log(jonas instanceof Person);


//Prototypes
console.log(Person.prototype);
Person.prototype.clacAge =function(){
    console.log(2037 - this.birthYear);
};

jonas.clacAge();
matilda.clacAge();

console.log(jonas.__proto__);

Person.prototype.species = 'Homo Sapiens'
console.log(jonas.species);
console.log(matilda.species);


console.log(jonas.hasOwnProperty('firstName'));


















