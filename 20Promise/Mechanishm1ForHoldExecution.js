function request(){
    return (new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(user[0]);
        }, 3000);

    }))

} 

let user = [
    {
        name: "Jhon",
        age: 25
    },
    {
        name: "Jaheer",
        age: 35
    },
    {
        name: "Ram",
        age: 45
    }
]


let p1=request();
console.log(p1);
console.log("that will be executed before the Promise is resolved");
/* But can we do when we need to wait for the promise to be resolved. and after promise resolved we want 
** execute some code then we develop it by .then mechanishm. */

p1.then((data)=>{
    console.log(data);
    console.log("that will be executed after the Promise is resolved");
});

console.log("that will not wait for the Promise to be resolved if we wamt to execute that after reciving promise data then we need to give that to body of p1.then func");
