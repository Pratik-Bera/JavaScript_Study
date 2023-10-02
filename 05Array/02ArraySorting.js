let arr=[3,6,9,4,1,7,52,10,25];
console.log(arr.sort());            // That sorts alphametacally an array.  Order : 1,10,25,3,4,52,6,7,9


//sort by value or element in assending and decending order

let compareAssen=(a,b)=>{
    return a-b;
}
let compareDecen=(a,b)=>{
    return b-a;
}

console.log(arr.sort(compareAssen));
console.log(arr.sort(compareDecen));