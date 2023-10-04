// reduce is used to do operation in array takes result of peevious return and holds it in first variable .

let arr=[5,9,40,50,67,55]

let arr2=arr.reduce((v1,v2)=>{  // takes FNO in v1 as 5.
    console.log(v1,v2);         // just print
    return v1;
})
console.log(arr2);
console.log(typeof(arr2));


//Sum of elements in array
let arr3=arr.reduce((v1,v2)=>{  // takes FNO in v1 as 5 and v2 as 9
    return v1+v2;               //return v1+v2 means 9+5=14  and this result will store in v1 and v2 will takes the value 40....
})
