document.getElementById("userForm").addEventListener("submit", function(event){

event.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

let valid = true;

document.getElementById("nameError").textContent="";
document.getElementById("emailError").textContent="";
document.getElementById("passwordError").textContent="";
document.getElementById("successMessage").textContent="";

if(name === ""){
document.getElementById("nameError").textContent="Name is required";
valid = false;
}

if(email === "" || !email.includes("@")){
document.getElementById("emailError").textContent="Enter a valid email";
valid = false;
}

if(password.length < 6){
document.getElementById("passwordError").textContent="Password must be at least 6 characters";
valid = false;
}

if(valid){
document.getElementById("successMessage").textContent="Form submitted successfully!";
}

});