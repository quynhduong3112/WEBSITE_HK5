var buttonLogin = document.getElementById("buttonLogin"),
  inputPwd = document.getElementById("inputPwd"),
  inputUsername = document.getElementById("inputUsername");

buttonLogin.addEventListener("click", function () {
  var storedName = JSON.parse(localStorage.getItem("username")),
    storedPwd = JSON.parse(localStorage.getItem("password"));

  if (inputUsername.value == storedName && inputPwd.value == storedPwd) {
    alert("You are logged in");
    window.open("./TrangChu2.html");
  } else {
    alert("Error on login");
  }
});
