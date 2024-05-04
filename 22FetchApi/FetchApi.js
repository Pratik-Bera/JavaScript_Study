async function getData(){
    let x=await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data=await x.json();
    return data;
    //   console.log(data);

}

async function main(){
    console.log("main Blocks Starts");
    let data=await getData();
    console.log(data);
    console.log("main Blocks Ends");

}

main();