var btnHome1 = document.getElementById("btnHome1"),
  btnHome2 = document.getElementById("btnHome2"),
  btnChoThue2 = document.getElementById("btnChoThue2"),
  btnBlog1 = document.getElementById("btnBlog1"),
  btnBlog2 = document.getElementById("btnBlog2"),
  btnAva = document.getElementById("btnAva"),
  kyYeu = document.getElementById("kyYeu"),
  anhCuoi = document.getElementById("anhCuoi"),
  anhBau = document.getElementById("anhBau"),
  giaDinh = document.getElementById("giaDinh"),
  sanPham = document.getElementById("sanPham"),
  newBorn = document.getElementById("newBorn"),
  anhBe = document.getElementById("anhBe"),
  chanDung = document.getElementById("chanDung"),
  ngheThuat = document.getElementById("ngheThuat");

btnHome1.addEventListener("click", function () {
  location.href = "./TrangChu2.html";
});
btnHome2.addEventListener("click", function () {
  location.href = "./TrangChu2.html";
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

kyYeu.addEventListener("click", function () {
  window.open("./AlbumKyYeu.html");
});
anhCuoi.addEventListener("click", function () {
  window.open("./AlbumWedding.html");
});
ngheThuat.addEventListener("click", function () {
  window.open("./AlbumNgheThuat.html");
});
newBorn.addEventListener("click", function () {
  window.open("./AlbumNewBorn.html");
});
anhBau.addEventListener("click", function () {
  window.open("./AlbumPregnant.html");
});
sanPham.addEventListener("click", function () {
  window.open("./AlbumSanPham.html");
});
giaDinh.addEventListener("click", function () {
  window.open("./AlbumGiaDinh.html");
});
anhBe.addEventListener("click", function () {
  window.open("./AlbumBeYeu.html");
});
chanDung.addEventListener("click", function () {
  window.open("./AlbumChanDung.html");
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
