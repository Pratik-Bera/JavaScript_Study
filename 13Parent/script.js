
console.log(document.body.firstChild)
let a=document.body.firstChild;                             // a hold the h1 tag where msg is Hello World
let b=document.body.firstChild.nextSibling.nextSibling;     // nextSibling is used for indexing next element. 
// So b is represent the div1 class div.
// first child of body is h1 then next sibling is text elem then next sibling is div1 div tag.
console.log(b);
let c=document.getElementsByClassName("div1");
console.log(c);
c[0].style.color="red";

console.log(b.parentNode);                                        
console.log(b.childNodes);
console.log(b.parentElement);                                        
console.log(b.childNodes);

/* case 2: Just Much Practice */
let sec=document.getElementsByClassName("div2");    // sec var is pointing to the section tab with div2 class.
console.log(sec);
console.log(sec[0].childNodes);     // sec[0] is section with div2 class I print childs of it here
let innerP=sec[0].childNodes[1];    // i point inner p tag by it
console.log(innerP);
console.log(innerP.parentElement);
console.log(innerP.parentNode);

/***Note : Difference between parentNodes and ParentElement
 * The parentNode method will always return the parent, 
 * but parentElement will return null
 *  if the parent happens to be something other than an element.  
 */
/*Difference practical of parentElement and parentNodes*/
console.log(document.firstChild.parentNode);        // That will return document
console.log(document.firstChild.parentElement);     // but that will return null.
console.log(document.firstChild.parentNode.parentNode);    // That will return null bcz document is the highest parent in DOM


