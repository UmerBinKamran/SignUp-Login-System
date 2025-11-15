function signUp() {
  var userName = document.getElementById("name");
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  if (userName.value === "" || email.value === "" || password.value === "") {
    alert("Enter The Details");
  } else {
    localStorage.setItem("name", userName.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);

    console.log(userName.value);
    console.log(email.value);
    console.log(password.value);

    alert("Sign Up Successful. Login to see your dashboard");
  }
}
var button = document.getElementById("signUpBtn");
document.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    signUp();
  }
});

function goToLogin() {
  if (localStorage.length === 0) {
    alert("Sign up first!");
  } else {
    window.location.href = "login.html";
  }
}
