function request(){
    return (new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(user[0]);
        }, 0);

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