/* Adding HTML using .innerHTML technique*/
let aq = document.body.getElementsByClassName("div1")[0];
// console.log(aq);
// aq.innerHTML = aq.innerHTML+`<div style="border: 2px solid green"> <p>aq.innerHTML</p> </div>`;


/* Adding HTML using .createElement technique. Here we are creating a element to add it as child*/
let div = document.createElement("div");
div.innerHTML = `<div style="border:2px solid red;"><p>Hi I am learning Javascript Now</p>
<p> I said JavaScript not Java</p></div>`;
// aq.append(div); // I am in the end of the element (inner)
// aq.prepend(div);// I am in the Start/ begining of the element (inner)
// aq.before(div);// I am in the Start/ begining of the element (outer)
// aq.after(div); // I am in the end of the element (outer)
aq.replaceWith(div); //replace aq with div;


// ** all are write but commented cause of confusion active one part between 5 and check what does this method.
// ** Also follow the comment description to learn.