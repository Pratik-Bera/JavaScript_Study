document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
`;

class RailwayForm{
    constructor(name,trainNo,address,pinNo){
        this.name = name;
        this.trainNo = trainNo;
        this.address = address;
        this.pinNo = pinNo;
    }

    preview(){
        document.getElementById("app").innerHTML = `
        <h1>Hello ${this.name}!</h1>
        <p>Train No: ${this.trainNo}</p>
        <p>Address: ${this.address}</p>
        <p>Pin No: ${this.pinNo}</p>
        `;
    }

    submit(){
        console.log(`Hello ${this.name}! your application form for train no ${this.trainNo} is submitted`);
    }
    cancel(){
        console.log(`Hello ${this.name}! your application form for train no ${this.trainNo} is cancelled`);
    }
}


let Sanju=new RailwayForm("Sanjeet Sarma",202145,"Bihar",123456);
Sanju.preview();
Sanju.submit();
Sanju.cancel();