/* check a persons age lies between 18 to 50 or not*/

let age=prompt("Enter your age");        // prompt is work in just webpage but not in out side.
// let age=45
// let age=85
if((age>=18)&&(50>=age)){
    console.log("You are in between 18 to 50 age.");
}
else{
    console.log("Your age is ",age ,". which isn't between 18 to 50.");
}