// var buttonLogin = document.getElementById("buttonLogin"),
//   inputUsername = document.getElementById("inputUser"),
//   inputFullName = document.getElementById("inputName"),
//   inputPhone = document.getElementById("inputPhone"),
//   inputPwd = document.getElementById("inputPwd"),
//   inputPwd2 = document.getElementById("inputPwd2");

// const user = {
//   fullName: "",
//   userName: "",
//   password1: "",
//   password2: "",
//   phone: "",
// };

// buttonLogin.addEventListener("click", function () {
//   user["userName"] = inputUsername.value;
//   user["fullName"] = inputFullName.value;
//   user["password1"] = inputPwd.value;
//   user["password2"] = inputPwd2.value;
//   user["phone"] = inputPhone.value;
//   window.localStorage.setItem("user", JSON.stringify(user));
// });
var buttonLogin = document.getElementById("buttonLogin"),
  inputUsername = document.getElementById("inputUser"),
  inputFullName = document.getElementById("inputName"),
  inputPhone = document.getElementById("inputPhone"),
  inputPwd = document.getElementById("inputPwd");

function validatePhoneNumber(input_str) {
  var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(input_str);
}

function removeAscent(str) {
  if (str === null || str === undefined) return str;
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  return str;
}

function isValidName(string) {
  var re = /^[a-zA-Z ]{2,}$/g; // regex here
  return re.test(removeAscent(string));
}

function validateForm() {
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
  if (!isValidName(n)) {
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
    alert("All datas are valid!, send it to the server!");
    return true;
  } else {
    return false;
  }
}

buttonLogin.addEventListener("click", function () {
  window.localStorage.setItem("username", JSON.stringify(inputUsername.value));
  window.localStorage.setItem("password", JSON.stringify(inputPwd.value));
  window.localStorage.setItem("phone", JSON.stringify(inputPhone.value));
  window.localStorage.setItem("fullname", JSON.stringify(inputFullName.value));
});
