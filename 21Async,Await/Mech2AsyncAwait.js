async function func1(){
    return (
        new Promise((resolve,reject)=>{
            setTimeout(()=>{resolve("welly Resolved")},3000)
        })
        );
}

// let func1= ()=>{return (
//             setTimeout(
//                  console.log("I am setTimeout function inside func1 send 3.5sec"),35000)
//              );}

async function main(){
    //output1
    console.log("In next Line we will send request for Promise which will be resolved after 3 seconds .");
    let prom=await func1();         // For await, here execution is asynchronous and paused for responce back from promise means sattle of promise
    console.log(prom);  //output3 after get promise resolved execution start.
    promisePrinter(prom);
    function promisePrinter(data){
        console.log(data);  //output4
    }
    console.log("I am main function");
}
main();
//output2
console.log("I am normal flow of execution");
