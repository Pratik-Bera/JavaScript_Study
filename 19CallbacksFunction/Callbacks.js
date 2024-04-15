console.log("Pratik is a Developer");


//Javascript will Hold this Function to execute after 1000 ms and let go on the execution. but after all flow complete then the count will be start means
// if we set time as 0 also then that will be executed after complete all flow of execution. 
setTimeout(function () {         
    console.log("Pratik is a java Developer");
}, 1000);

console.log("The End");


/* CallBack function is not a special function it's just a techniqure  to a fuction calling mechanishm from another function.*/

let a=()=>{
    console.log("This is a function named a() called from callBack()");
}

function callBack (){
    a();
    console.log("This is a callback function this line will be executed after a() function called");
}

callBack();



