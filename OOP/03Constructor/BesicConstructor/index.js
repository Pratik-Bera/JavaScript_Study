document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
`;

class Besic{
    constructor(){
        console.log("This class is called ...");
        console.log("if you know something about this constructor then call detail method of this class.");
    }
    detail(){
        console.log("Constructor is a special function that creates and initializes an object instance of a class.");
        console.log("When ever a instance of a class is created then the constructor is called automatically.");
    }
}


let newCon = new Besic();
newCon.detail();   // calling detail method for printing detail information about this constructor.