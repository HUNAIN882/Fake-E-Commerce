function login() {
    let emailOrPhone = document.getElementById("emailOrPhone").value;
    let password = document.getElementById("password").value;

    if (emailOrPhone && password) {
        alert("You have logged in successfully! NowYou Can Buy The Product");
    } else {
        alert("Please fill in all fields!");
    }
}

function togglePassword() {
    let passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

function handleCredentialResponse(response) {
    console.log("ID Token:", response.credential);
}