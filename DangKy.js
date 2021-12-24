var buttonLogin = document.getElementById("buttonLogin"),
  inputUsername = document.getElementById("inputUser"),
  inputFullName = document.getElementById("inputName"),
  inputPhone = document.getElementById("inputPhone"),
  inputPwd = document.getElementById("inputPwd");

function validatePhoneNumber(input_str) {
  var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(input_str);
}

buttonLogin.addEventListener("click", function (e) {
  var signupForm = document.forms["signupform"];
  var u = signupForm["signupUsername"].value;
  var resu = false;
  var p = signupForm["signupPwd"].value;
  var resp = false;
  var p2 = signupForm["signupPwd2"].value;
  var resp2 = false;
  var n = signupForm["signupName"].value;
  var resn = false;
  var ph = signupForm["signupPhone"].value;
  var resph = false;
  if (!u) {
    signupForm["signupUsername"].parentElement.classList.add("DangNhap--error");
  } else {
    signupForm["signupUsername"].parentElement.classList.remove(
      "DangNhap--error"
    );
    resu = true;
  }
  if (!p) {
    signupForm["signupPwd"].parentElement.classList.add("DangNhap--error");
  } else {
    signupForm["signupPwd"].parentElement.classList.remove("DangNhap--error");
    resp = true;
  }
  if (!p || !(p == p2)) {
    document
      .getElementById("inputPwd2")
      .parentElement.classList.add("DangNhap--error");
  } else {
    signupForm["inputPwd2"].parentElement.classList.remove("DangNhap--error");
    resp2 = true;
  }
  if (!n) {
    signupForm["signupName"].parentElement.classList.add("DangNhap--error");
  } else {
    signupForm["signupName"].parentElement.classList.remove("DangNhap--error");
    resn = true;
  }
  if (!validatePhoneNumber(ph)) {
    signupForm["signupPhone"].parentElement.classList.add("DangNhap--error");
  } else {
    signupForm["signupPhone"].parentElement.classList.remove("DangNhap--error");
    resph = true;
  }
  if (
    resp == true &&
    resu == true &&
    resp2 == true &&
    resph == true &&
    resn == true
  ) {
    window.localStorage.setItem(
      "username",
      JSON.stringify(inputUsername.value)
    );
    window.localStorage.setItem("password", JSON.stringify(inputPwd.value));
    window.localStorage.setItem("phone", JSON.stringify(inputPhone.value));
    window.localStorage.setItem(
      "fullname",
      JSON.stringify(inputFullName.value)
    );
    var diemTichLuy = "5";
    window.localStorage.setItem("diemTichLuy", JSON.stringify(diemTichLuy));
    window.open("./DangNhap.html");
    return true;
  } else {
    e.preventDefault();
    return false;
  }
});
