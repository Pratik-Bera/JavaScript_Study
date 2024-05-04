/*
Destructuring is a JavaScript expression that makes it possible to unpack values from arrays,
 or properties from objects, into distinct variables. Here is an example of destructuring arrays:
*/


//we can assigh value also in that way. Acctually that is direct destructuring of array.
let [car1, truck1] =["Thar","Tesla"];
console.log(car1);
console.log(truck1);



const vehicles = ['mustang', 'f-150', 'expedition'];
//old way to unpack
// const car = vehicles[0];
// const truck = vehicles[1];
// const suv = vehicles[2];

// New way
const [car, truck, suv] = vehicles; //syntax1
console.log(car);
console.log(truck);
console.log(suv);
//we can use also
const [car2, , suv2] = vehicles;   // Syntax 2        // By that we just skipping the tausk's value 
console.log(car2);  //mustang
// confirm(truck);  //Error
console.log(suv2);  //expedition
const [car4,...remaining] =vehicles; // Syntax 3       // By that we just taking value of car4 from array and remaining values are putting in an array named remaining
console.log(car4);  //mustang
console.log(remaining); // ['f-150','expedition']
console.log(remaining[1]);      // can print cause that is an array.       //Expendition