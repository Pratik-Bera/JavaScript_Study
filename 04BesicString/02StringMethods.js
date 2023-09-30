let str="Pratik"

console.log(str.length)         // Return the length of string
console.log(str.toUpperCase())  // return the string to all uppercase
console.log(str.toLowerCase())  //return the string to all lowercase
console.log(str.slice(2,4))     // return the string from index 2 to 3 , 4 is explecit  so it prints "at"
console.log(str.replace("Pra","Jhum"))  //replace the string char to new one 
console.log(str.concat(" Bera"))

let friend="    Amrit is Good     "
console.log(friend.trim())      //remove all spaces from start and end

console.log(friend.includes("Amrit"));      // checks is the word is part of string or not
let f2="Amrit"
console.log(friend.includes(f2));