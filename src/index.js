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
    walk(){
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
    {id:1, isActive:true},
    {id:2, isActive:true},
    {id:3, isActive:false}
]

//Two functions below are the same
const activeJobs = jobs.filter(function(job) { return job.isActive});
const activeJobs = jobs.filter(job => job.isActive);
