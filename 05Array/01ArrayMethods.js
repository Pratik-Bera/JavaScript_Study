// Adding elements at the end of an array
// Declaring and initializing arrays
let number_arr = [10, 20, 30, 40, 50];
let string_arr = ["piyush", "gourav", "smruti", "ritu"];
 
// push()
// number_arr contains [10, 20, 30, 40, 50, 60]
number_arr.push(60);
 
// We can pass multiple parameters to the push()
// number_arr contains
// [10, 20, 30, 40, 50, 60, 70, 80, 90]
number_arr.push(70, 80, 90);

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
//


// Adding element at the beginning of an array
// Declaring and initializing arrays
number_arr = [20, 30, 40];
string_arr = ["amit", "sumit"];
 
// unshift()
// number_arr contains
// [10, 20, 20, 30, 40]
number_arr.unshift(10, 20);
 
// string_arr contains
// ["sunil", "anil", "amit", "sumit"]
string_arr.unshift("sunil", "anil");
 
// Printing both the array after performing unshift operation
console.log("After unshift op ")
console.log(number_arr);
console.log("After unshift op ")
console.log(string_arr);

// Removing element from the beginning of an array
// Declaring and initializing arrays
number_arr = [20, 30, 40, 50, 60];
string_arr = ["amit", "sumit", "anil", "prateek"];
 
// shift()
// number_arr contains
//  [30, 40, 50, 60];
number_arr.shift();
 
// string_arr contains
// ["sumit", "anil", "prateek"]
string_arr.shift();
 
// Printing both the array after performing shifts operation
console.log("After shift op ")
console.log(number_arr);
console.log("After shift op ")
console.log(string_arr);


// Removing an adding element at a particular location
// in an array
// Declaring and initializing arrays
//Syntax : Array.splice (start, deleteCount, item 1, item 2….) 
number_arr = [20, 30, 40, 50, 60];
string_arr = ["amit", "sumit", "anil", "prateek"];
 
// splice()
// deletes 3 elements starting from 1
// number array contains [20, 60]
number_arr.splice(1, 3);
 
// doesn't delete but inserts 3, 4, 5
// at starting location 1
number_arr.splice(1, 0, 3, 4, 5);
 
// deletes two elements starting from index 1
// and add three elements.
// It contains  ["amit", "xyz", "geek 1", "geek 2", "prateek"];
string_arr.splice(1, 2, "xyz", "geek 1", "geek 2");
 
// Printing both the array after performing splice operation
console.log("After splice op ")
console.log(number_arr);
console.log("After splice op ")
console.log(string_arr);


const originalArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Case 1: Extract the first 3 elements of the array
const case1 = originalArr.slice(0, 3);
console.log("Case 1: Extract the first 3 elements of the array: [" + case1 + "]");

// Case 2: Extract the last 3 elements of the array
const case2 = originalArr.slice(-3);
console.log("Case 2: Extract the last 3 elements of the array: [" + case2 + "]");

// Case 3: Extract elements from the middle of the array
const case3 = originalArr.slice(3, 7);
console.log("Case 3: Extract elements from the middle of the array: [" + case3 + "]");

// Case 4: Start index is greater than end index
const case4 = originalArr.slice(5, 2);
console.log("Case 4: Start index is greater than end index: [" + case4 + "]");

// Case 5: Negative start index
const case5 = originalArr.slice(-4, 9);
console.log("Case 5: Negative start index: [" + case5 + "]");

// Case 6: Negative end index
const case6 = originalArr.slice(3, -2);
console.log("Case 6: Negative end index: [" + case6 + "]");

// Case 7: Only start index is provided
const case7 = originalArr.slice(5);
console.log("Case 7: Only start index is provided: [" + case7 + "]");

// Case 8: Start index and end index are out of range
const case8 = originalArr.slice(15, 20);
console.log("Case 8: Start index and end index are out of range: [" + case8 + "]");

// Case 9: Start index and end index are negative and out of range
const case9 = originalArr.slice(-15, -10);
console.log("Case 9: Start index and end index are negative and out of range: [" + case9 + "]");
