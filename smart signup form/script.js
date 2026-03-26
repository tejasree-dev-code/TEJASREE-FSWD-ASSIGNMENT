const form = document.getElementById("signupForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");
  let confirmError = document.getElementById("confirmError");

  emailError.textContent = "";
  passwordError.textContent = "";
  confirmError.textContent = "";

  let isValid = true;

  // Email validation
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    emailError.textContent = "Invalid email format";
    isValid = false;
  }

  // Password strength
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    isValid = false;
  }

  // Confirm password
  if (password !== confirmPassword) {
    confirmError.textContent = "Passwords do not match";
    isValid = false;
  }

  if (isValid) {
    alert("Signup Successful!");
  }
});