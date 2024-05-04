let person={
    name: 'John',
    age: 25,
    desc:"John is a Male"
}

//const {personName, personAge} = person; // ERROR
const {name,age} = person;      // when we destructing an object then we need to make sure the name will be same.
console.log(name);
console.log(age);

const {name:personName,age:personAge} = person;     // If we want to change the name of destructuring value then can be this way.
console.log(personName);
console.log(personAge);


const {name:personName1,desc:personDesc1} = person;     //which property we wand we can destructure from an object
console.log(personName1);
console.log(personDesc1);

const {name:personName2,...remaining} = person; // that syntax also allow.
console.log(personName2);
console.log(remaining);      // that will return a object with remaining values. 