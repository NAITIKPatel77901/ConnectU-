const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");
const message = document.getElementById("message");

signupBtn.addEventListener("click", function () {
message.innerHTML = "<h2>Create Your Account</h2><p>Sign-up form coming next!</p>";
});

loginBtn.addEventListener("click", function () {
message.innerHTML = "<h2>Welcome Back!</h2><p>Login form coming next!</p>";
});