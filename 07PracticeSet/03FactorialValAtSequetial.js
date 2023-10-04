/* Find the factorial value of largest element from sequential array.*/

let arr=[1,2,3,4,5]
let fact=arr.reduce((val1,val2)=>{
    return val1*val2;
})
console.log(fact);


// Solve 2
fact=1;
let larVal=arr[(arr.length-1)];
for(let i=1;i<=larVal;i++){
    fact=fact*i;
}
console.log(fact);