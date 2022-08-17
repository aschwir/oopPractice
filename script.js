'use strict';

//constructor names always start with capital letter
// const Person = function(firstName, birthYear){
// this.firstName = firstName;
// this.birthYear = birthYear;

// //add method bad practice never create method inside of constructor 
// // this.clacAge = function(){
// //     console.log(2037 - this.birthYear);
// // }

// };

// //constructors called using the  "New" keyword
// const jonas = new Person('Jonas', 1991);
// // console.log(jonas);

// //1.first new empty object is created
// //2.function is called, this = {}
// //3.{} linked to prototype
// //4.function automatically returns {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975)
// // console.log(matilda, jack);

// // console.log(jonas instanceof Person);


// //Prototypes
// console.log(Person.prototype);
// Person.prototype.clacAge =function(){
//     console.log(2037 - this.birthYear);
// };

// jonas.clacAge();
// matilda.clacAge();

// console.log(jonas.__proto__);

// Person.prototype.species = 'Homo Sapiens'
// console.log(jonas.species);
// console.log(matilda.species);


// console.log(jonas.hasOwnProperty('firstName'));

// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.log(Person.prototype.constructor);


// const arr = [3,6,4,5,6,9,3];
// console.log(arr.__proto__);
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function(){
//     return [...new Set(this)];
// };

// console.log(arr.unique());



// const Car = function(make, speed){
//     this.make = make;
//     this.speed = speed;
// };

// Car.prototype.accelerate = function(){
//     return `${this.speed += 10} km/h`;
// };

// Car.prototype.brake = function(){
//     return `${this.speed -= 5} km/h`
// };

// const BMW = new Car('BMW', 120);
// const Mercedes = new Car('Mercedes',95);
// console.log(BMW);

// console.log(BMW.accelerate());
// console.log(BMW.accelerate());
// console.log(BMW.brake());
// console.log(BMW.brake());
// console.log(BMW.brake());
// console.log(BMW);

// console.log(Mercedes.accelerate());
// console.log(Mercedes.accelerate());
// console.log(Mercedes.accelerate());
// console.log(Mercedes.accelerate());
// console.log(Mercedes.brake());
// console.log(Mercedes.brake());
// console.log(Mercedes.brake());
// console.log(Mercedes);





//ES6 classes

//class expression
// const PersonCL = class {}

//class declaration
class PersonCL {
   
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }


    calcAge(){
        console.log(2037 - this.birthYear);
    }

    get age(){
        return 2037 - this.birthYear
    }

    set fullName(name){
        console.log(name);
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`)
    }

    get fullName(){
        return this._fullName;
    }
}


const jessica = new PersonCL('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

const walter = new PersonCL('Walter White', 1965)


const account = {
    owner: 'Jonas',
    movements: [200,530,120,300],

    get latest(){
        return this.movements.slice(-1).pop();
    },

    set latest(mov){
        this.movements.push(mov);
    },
};

console.log(account.latest);

account.latest = 50

console.log(account.movements);







