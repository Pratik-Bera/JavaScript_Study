document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
`;


class Test{
    validation(age){
        if(age >= 18){
            return true;
        }
        else{
            return false;
        }
    }

}

class Candidate{
    // let name;
    // let age;

    setter(name,age){
        this.name = name;
        this.age = age;
    }
    getter(){
        console.log("Candidate name is : " + this.name);
        console.log("Candidate age is : " + this.age);
    }
    check(){
        let t1=new Test();
        if(t1.validation(this.age)==true){
            console.log(this.name + " is upper 18 aged");
        }
        else{
            console.log(this.name + " is lower 18 aged");
        }
    }
}


let pratik = new Candidate();
pratik.setter("Pratik",25);
pratik.getter();
pratik.check();


let kuttu = new Candidate();
kuttu.setter("Kuttu",16);
kuttu.getter();
kuttu.check();