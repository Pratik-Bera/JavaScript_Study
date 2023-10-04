// Find factorial of element in the given array.

let arr=[5,4,12,10,9]

let arr2=arr.map((val)=>{
    let fact=1;
    for(let i=val;i>1;i--){
        fact=fact*i;
    }
    return fact;
})
console.log(arr2);