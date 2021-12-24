var hoTen = document.getElementById("hoTen"),
  soDT = document.getElementById("soDT"),
  identify = document.getElementById("identify"),
  email = document.getElementById("email"),
  hoTen2 = document.getElementById("hoTen2"),
  soDT2 = document.getElementById("soDT2"),
  identify2 = document.getElementById("identify2"),
  email2 = document.getElementById("email2"),
  btnHome1 = document.getElementById("btnHome1"),
  btnHome2 = document.getElementById("btnHome2"),
  btnChoThue2 = document.getElementById("btnChoThue2"),
  btnBlog1 = document.getElementById("btnBlog1"),
  btnBlog2 = document.getElementById("btnBlog2"),
  btnAva = document.getElementById("btnAva");

btnHome1.addEventListener("click", function () {
  window.open("./TrangChu2.html");
});
btnHome2.addEventListener("click", function () {
  window.open("./TrangChu2.html");
});
btnChoThue2.addEventListener("click", function () {
  window.open("./ChuChoThue.html");
});
btnBlog1.addEventListener("click", function () {
  window.open("./Blog.html");
});
btnBlog2.addEventListener("click", function () {
  window.open("./Blog.html");
});
btnAva.addEventListener("click", function () {
  window.open("./TrangCaNhan.html");
});
function openNav() {
  document.getElementById("myHeader2").style.width = "250px";
}
function closeNav() {
  document.getElementById("myHeader2").style.width = "0";
}
var dropdown = document.getElementsByClassName("VerHeader__btn");
var i;
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
function openNav() {
  document.getElementById("myHeader2").style.width = "250px";
}
function closeNav() {
  document.getElementById("myHeader2").style.width = "0";
}
window.addEventListener("load", function () {
  hoTen.innerHTML = JSON.parse(window.localStorage.getItem("fullname"));
  soDT.innerHTML = JSON.parse(window.localStorage.getItem("phone"));
  identify.innerHTML = JSON.parse(window.localStorage.getItem("identify"));
  email.innerHTML = JSON.parse(window.localStorage.getItem("email"));
  hoTen2.innerHTML = JSON.parse(window.localStorage.getItem("fullname2"));
  soDT2.innerHTML = JSON.parse(window.localStorage.getItem("phone2"));
  identify2.innerHTML = JSON.parse(window.localStorage.getItem("identify2"));
  email2.innerHTML = JSON.parse(window.localStorage.getItem("email2"));
});
