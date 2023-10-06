console.log(document.body.firstChild);      // This is select the 1st child in body 
/******if the first tag element is in next line it will select the line as text element and set the first child as text element*/
console.log(document.body.lastChild);       // This is access the last child in body

console.log(document.body.childNodes);
console.log(typeof(document.body.childNodes));


// Converting  a html document element to an array;
let arr=Array.from(document.body.childNodes);
console.log(arr);
console.log(typeof(arr));