//ES6 Refresher

//var -> function
//let -> block
//const -> block

//Objects
// const person ={
//     name: 'Carrington',
//     walk(){},
//     talk(){}
// };
//
// person.talk();
//
// const targetMember = 'name';
// person['name'] = 'John';

//This Keyword
const person = {
    name: "Mosh",
    walk() {
        console.log(this); //
    }
};

person.walk()

const walk = person.walk.bind(person); //Binds "this" to the person object
walk();

//Arrow Functions
// const square = function(number){
//     return number * number;
// }
//
// const square = number => number * number //Same function as line 33
const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 3, isActive: false}
]

//Two functions below are the same
// const activeJobs = jobs.filter(function(job) { return job.isActive});
// const activeJobs = jobs.filter(job => job.isActive);

//Arrow functions and this. Arrow functions do not rebind this keyword.
const person1 = {
    talk() {
        setTimeout(() => {
            console.log("this", this);
        }, 1000);
    }
};

person1.talk()

//Array.map //Transforms each item in an array. Returns a new array.
const colors = ['red', 'green', 'blue'];
const items = colors.map(color => `<li>${color}<li>`);
console.log(items);

//Object Destructuring
const address = {
    street: 'Main',
    city: 'San Antonio ',
    country: 'United States'
};

const{ street, city, country } = address;

//Spread Operator
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
const combined1 = [...first, ...second]; //These consts do the same thing
//Adding to array with spread operator
const addToCombined = [...first, 'a', ...second,] // Returns [1, 2, 3, a, 4, 5, 6, b]

//Cloning array with spread operator
const clone = [...first];
console.log(first);
console.log(clone);
