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
taiKhoan.addEventListener("click", function () {
  window.open("./TrangCaNhan.html");
});
khuyenMai.addEventListener("click", function () {
  window.open("./KhuyenMai.html");
});
dangXuat.addEventListener("click", function () {
  location.href = "./TrangChu1.html";
});
datThue.addEventListener("click", function () {
  location.href = "./DonHang.html";
});
thongBao.addEventListener("click", function () {
  alert("Hiện tại bạn không có thông báo!");
});

var orderDate = document.getElementById("orderDate"),
  orderStatus = document.getElementById("orderStatus");

var tenDangNhap = document.getElementById("tenDangNhap");

window.addEventListener("load", function () {
  tenDangNhap.innerHTML = JSON.parse(localStorage.getItem("username"));

  var dateRent = JSON.parse(localStorage.getItem("dateRent")),
    nam = dateRent.slice(0, 4),
    thang = dateRent.slice(5, 7),
    ngay = dateRent.slice(8, 10),
    ngayMoi = ngay + "/" + thang + "/" + nam;

  orderDate.innerHTML = ngayMoi;
  orderStatus.innerHTML = JSON.parse(localStorage.getItem("orderStatus"));

  if (orderStatus.innerHTML === "Đang chờ thanh toán") {
    orderStatus.style.color = "red";
  } else {
    orderStatus.style.color = "green";
  }
});
