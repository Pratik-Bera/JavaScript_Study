// map function :  It is used to iterate over all the elements in an array, which results in a new array.
let arr=[4,6,8,10,45];

console.log("Printing Case1 :")
let arr2=arr.map((values) =>{
    console.log(values);
    return values+2;
})
console.log(arr);
console.log(arr2);

// array_Name.map takes 3 argument . also as for each.
console.log("Printing Case2 :")
let arr3=arr.map((values,index,array) =>{
    console.log(values,index,array);
    return values+2;
})
console.log(arr3);
