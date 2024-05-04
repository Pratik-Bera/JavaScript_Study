
document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
`;




let a = {
    name: "Vanilla",
    lang : "JavaScript",
  }
  console.log(a);
  
  let b ={
    class:"three",
  }
  b.__proto__=a;        // I am borrowing prototype of a in b object so i can use a's property in b object but can't use b's property in a object...  
  console.log("a.name = "+a.name);      // vanilla
  console.log("a.lang = "+a.lang);      // JavaScript
  console.log("a.class = "+a.class);    // Undefined (wrong ) bcz class in not in a 
  console.log("b.name = "+b.name);      //  vanilla (cause b is uses prototype of a )so it can uses a's property also
  console.log("b.lang = "+b.lang);      // JavaScript   (cause b is uses prototype of a )so it can uses a's property also
  console.log("b.class = "+b.class);    // three