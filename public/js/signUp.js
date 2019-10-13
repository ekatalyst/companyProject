
// signUp.js

console.log('Signup Script loaded');

function showSignupPsw1() {
  var x = document.getElementById("");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}