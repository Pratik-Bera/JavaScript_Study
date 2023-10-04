//Filter : Filter is used to filter the element in array. That returns new array.
let arr=[10,50,8,5,46,0,99,102]

console.log("Displaying the case 1 : ");
let arr2=arr.filter((value)=>{
    if(value>20){
        console.log(value," is added in new array");
    }
    return value>20;
})
console.log(arr);
console.log(arr2);

console.log("Displaying the case 2 : ");
let arr3=arr.filter((value)=>{
    if(value>20 && value<100){
        console.log(value," is added in new array");
    }
    return (value>20 && value<100);
})
console.log(arr);
console.log(arr3);