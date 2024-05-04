document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
`;

class AddmissionForm {
    submit() {
      alert("form submitted.");
    }
    cancel() {
      alert("Form Canceled");
    }
  }
  
  let rohan = new AddmissionForm();
  let javed = new AddmissionForm();
  rohan.cancel();
  javed.submit();