function myFunction() {
  location.replace("https://www.w3schools.com");
}

var CORRECT_USER = "tachstudio";
var CORRECT_PASS = "Tachstudio123";

var inputUsername = document.getElementById("input--username");
var inputPwd = document.getElementById("input--pwd");

var formLogin = document.getElementById("form-login");

if (formLogin.attachEvent) {
  formLogin.attachEvent("submit", onFormSubmit);
} else {
  formLogin.addEventListener("submit", onFormSubmit);
}

function onFormSubmit(e) {
  var username = inputUsername.value;
  var pwd = inputPwd.value;
  if (username == CORRECT_USER && pwd == CORRECT_PASS) {
    alert("Đăng nhập thành công");
    document.write("You will be redirected to main page in 2 sec.");
    setTimeout("Redirect()", 2000);
  } else {
    alert("Đăng nhập thất bại");
  }
}
