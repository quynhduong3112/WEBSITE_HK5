var btnHome1 = document.getElementById("btnHome1"),
  btnHome2 = document.getElementById("btnHome2"),
  btnChoThue2 = document.getElementById("btnChoThue2"),
  btnBlog1 = document.getElementById("btnBlog1"),
  btnBlog2 = document.getElementById("btnBlog2"),
  btnDangNhap = document.getElementById("btnDangNhap"),
  soLuong = document.getElementById("soLuong"),
  btnDatThue = document.getElementById("btnDatThue");

btnHome1.addEventListener("click", function () {
  window.open("./TrangChu1.html");
});
btnHome2.addEventListener("click", function () {
  window.open("./TrangChu1.html");
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
btnDangNhap.addEventListener("click", function () {
  window.open("./DangNhap.html");
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

function congSanpham() {
  var cong = ++soLuong.value;
  soLuong.value = cong;
}
function truSanpham() {
  var tru = --soLuong.value;
  if (tru < 1) {
    soLuong.value = 1;
  } else soLuong.value = tru;
}

btnDatThue.addEventListener("click", function () {
  window.localStorage.setItem("soLuong", JSON.stringify(soLuong.value));
});
