let birthYear = parseInt(prompt("Enter Your Birth Year"));

//Before ES6
const ageCalc = function(){
    const d = new Date();
    let currentYear = d.getFullYear();
    return currentYear-birthYear;
}

function ageCalcal(){
    const d = new Date();
    let currentYear = d.getFullYear();
    return currentYear-birthYear;
}



// ES6
const ageCal = () => {                  /* This is a arrow function without parameter*/
    const d = new Date();
    let currentYear = d.getFullYear();
    console.log("I'm at non-parameterized arrow function.");
    return (currentYear-birthYear);
}

const ageCalp = (year) => {                  /* This is a arrow function without parameter*/
    const d = new Date();
    let currentYear = d.getFullYear();
    console.log("I'm at parameterized arrow function.");
    return (currentYear-year);
}





console.log(currentYear());            // This is Function calling controller.