
// signUp.js

console.log('Signup Script loaded');

function showSignupPsw1() {
    var x = document.getElementById("signupPsw1-1");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}    

function showSignupPsw2() {
    var y = document.getElementById("signupPsw1-2");
    if (y.type === "password") {
        y.type = "text";
    } else {
        y.type = "password";
    }
}

function showTerms() {
    
    let term = document.getElementById('terms-1')
    console.log(term.style.height);
    

    if (term.style.height === '100px'){
        term.style.height = '0px'
    }
    else {
        term.style.height = '100px'        
    }

}

