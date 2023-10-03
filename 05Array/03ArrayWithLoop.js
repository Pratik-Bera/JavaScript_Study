let arr=[45,89,12,76,10,5,36]

//Displaying using besic for loop in js 
console.log("Displaying using Besic Loop in js:");
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}


//For Each Loop

console.log("Displaying using forEach Loop in js:");
arr.forEach((element)=>{            //forEach method on an array to iterate over its elements and log each element to the console.    
    element+=1;
    console.log(element);
})

//For-in loop in Array
console.log("Displaying using for-in Loop in js:");
for(let i in arr){
    console.log(arr[i]);
    
}

//for-of loop in Array
console.log("Display using for-of loop in array :");
for(let i of arr){
    console.log(i);  
}

//array from
let ar=[4,8,20,45,2];
let arr2=Array.from(ar);
console.log(ar);
console.log(arr2);

let st="Pratik";
ar=Array.from(st);
console.log(st);
console.log(ar);

