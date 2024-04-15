console.log("Here i will Explore the concept of Promice");

/*Promise is mainly used to request http or https requests and here have two state id accept and if reject */

let promise = new Promise((resolve, reject)=> {     // resolve and reject are just function name can be change resolve can be accessed by .then and reject by .catch

    let ran=Math.random();
    if(ran>0.5){
        reject("The Value is "+ran+" There fore it is REJECTED");
    }else{
        
        console.log("Give some time to setTimeout 2000ms");
        setTimeout(()=>{
            resolve("Promise is resolved cause the value is "+ran);
        },2000);
    }
})

promise.then((value)=> {
    console.log(value+"then");      // when resolver is called
}).catch((error)=> {
    console.log(error+"catch");     // when reject is called
})


// We can write that way also but can see a red marked error at console 
/*promise.then((value)=> {
    console.log(value+"then");
})

promise.catch((error)=> {
    console.log(error+"catch");
})*/