var taiKhoan = document.getElementById("taiKhoan"),
  khuyenMai = document.getElementById("khuyenMai"),
  dangXuat = document.getElementById("dangXuat"),
  thongBao = document.getElementById("thongBao"),
  datThue = document.getElementById("datThue"),
  btnHome1 = document.getElementById("btnHome1"),
  btnHome2 = document.getElementById("btnHome2"),
  btnChoThue2 = document.getElementById("btnChoThue2"),
  btnBlog1 = document.getElementById("btnBlog1"),
  btnBlog2 = document.getElementById("btnBlog2"),
  btnAva = document.getElementById("btnAva"),
  chinhSua = document.getElementById("chinhSua");

// var PopupDoiDiem = document.getElementById("popupDoiDiem");
// var btn1 = document.getElementById("KhuyenMaiDoiDien");
// var span1 = document.getElementsByClassName("PopupDoiDiem__close")[0];
// btn1.onclick = function () {
//   PopupDoiDiem.style.display = "block";
// };
// span1.onclick = function () {
//   PopupDoiDiem.style.display = "none";
// };
// window.onclick = function (event) {
//   if (event.target == PopupDoiDiem) {
//     PopupDoiDiem.style.display = "none";
//   }
// };

// var PopupDungVoucher = document.getElementById("popupDungVoucher");
// var btn2 = document.getElementById("khuyenMaiDungNgay");
// var span2 = document.getElementsByClassName("PopupDungVoucher__close")[0];
// btn2.onclick = function () {
//   PopupDungVoucher.style.display = "block";
// };
// span2.onclick = function () {
//   PopupDungVoucher.style.display = "none";
// };
// window.onclick = function (event) {
//   if (event.target == PopupDungVoucher) {
//     PopupDungVoucher.style.display = "none";
//   }
// };

chinhSua.addEventListener("click", function () {
  window.open("./TrangCaNhan.html");
});
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
taiKhoan.addEventListener("click", function () {
  window.open("./TrangCaNhan.html");
});
khuyenMai.addEventListener("click", function () {
  location.href = "./KhuyenMai.html";
});
dangXuat.addEventListener("click", function () {
  location.href = "./TrangChu1.html";
});
datThue.addEventListener("click", function () {
  window.open("./DonHang.html");
});
thongBao.addEventListener("click", function () {
  alert("Hiện tại bạn không có thông báo!");
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
