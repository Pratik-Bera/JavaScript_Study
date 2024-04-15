

let firstProm = new Promise((resolve,reject)=>{
    resolve("firstPromise");
})

let secondProm = new Promise((resolve,reject)=>{
    reject("secondPromise");
    // resolve("secondPromise");
})



/* allProm.then will execute when Parameters promise's resolve is fulfilled. and returned an array of resolve arguments
** If any promise is rejected then allProm.catch will be executed that will return only reject argument in array*/
// Promise.all([]) let's try

let allProm = Promise.all([firstProm,secondProm]);
allProm.then((value)=>{
    console.log(value);        
}).catch((err)=>{console.log(err);});


/* Promise.allSettled will execute when all Promises are sattled they can be resolved or rejected nothing matters*/
// Let's try Promise.allSettled

let allSettled =Promise.allSettled([firstProm,secondProm]);

allSettled.then((value)=>{console.log(value);}).catch((err)=>{console.log(err);});



/* also study about 
** Promise.race() -> wait for first promise to be sattle can be resolved or rejected
** Promise.any()   -> wait for First promise to be resolve.
** Promise.all()   -> Already showing before in the code
** Promise.allSettled()  -> Already showing after in the code
** Promise.resolve() 
** Promise.reject()*/