document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
`;

class Animal{
    constructor(name,color){
        this.name = name;
        this.color = color;
    }
    shout(){
        console.log(`${this.name} is Shouting...`);
    }
    run(){
        console.log(`${this.name} is Running...`);
    }
}

class Monkey extends Animal{
    constructor(name,color){
        super(name,color);
    }
    eat(){
        console.log(`${this.name} is eating bananas...`);
    }
}

let tomy=new Animal("tomy","black");
tomy.shout();
tomy.run();
// bruno.eat();     // wrong because bruno is the object of Animal class;

let bruno=new Monkey("bruno","Orange");
bruno.shout();
bruno.run();
bruno.eat();

