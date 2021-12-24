var thongBao = document.getElementById("thongBao"),
  datThue = document.getElementById("datThue"),
  khuyenMai = document.getElementById("khuyenMai"),
  dangXuat = document.getElementById("dangXuat"),
  tenDangNhap = document.getElementById("tenDangNhap"),
  hoTen = document.getElementById("hoTen"),
  soDienThoai = document.getElementById("soDienThoai"),
  email = document.getElementById("email"),
  chinhSua = document.getElementById("chinhSua"),
  diemTichLuy = document.getElementById("diemTichLuy");

datThue.addEventListener("click", function () {
  window.open("./DonHang.html");
});
khuyenMai.addEventListener("click", function () {
  window.open("./KhuyenMai.html");
});
dangXuat.addEventListener("click", function () {
  location.href = "./TrangChu1.html";
});
thongBao.addEventListener("click", function () {
  alert("Hiện tại bạn không có thông báo!");
});
window.addEventListener("load", function () {
  tenDangNhap.innerHTML = JSON.parse(localStorage.getItem("username"));
  hoTen.innerHTML = JSON.parse(localStorage.getItem("fullname"));
  soDienThoai.innerHTML = JSON.parse(localStorage.getItem("phone"));
  email.innerHTML = JSON.parse(localStorage.getItem("email"));
  diemTichLuy.innerHTML = JSON.parse(localStorage.getItem("diemTichLuy"));
});

chinhSua.addEventListener("click", () => {
  let editTenDangNhap = prompt(
      "Bạn có muốn sửa tên đăng nhập không?",
      tenDangNhap.innerHTML
    ),
    editHoTen = prompt("Bạn có muốn sửa họ tên không?", hoTen.innerHTML),
    editSoDT = prompt(
      "Bạn có muốn sửa số điện thoại không?",
      soDienThoai.innerHTML
    ),
    editEmail = prompt("Bạn có muốn sửa email không?", email.innerHTML);
  if (editTenDangNhap == null || editTenDangNhap == "") {
    editTenDangNhap = tenDangNhap.innerHTML;
  } else {
    window.localStorage.setItem("username", JSON.stringify(editTenDangNhap));
  }
  if (editHoTen == null || editHoTen == "") {
    editHoTen = hoTen.innerHTML;
  } else {
    window.localStorage.setItem("fullname", JSON.stringify(editHoTen));
  }
  if (editSoDT == null || editSoDT == "") {
    editSoDT = soDienThoai.innerHTML;
  } else {
    window.localStorage.setItem("phone", JSON.stringify(editSoDT));
  }
  if (editEmail == null || editEmail == "") {
    editEmail = "";
  } else {
    window.localStorage.setItem("email", JSON.stringify(editEmail));
  }
  tenDangNhap.innerHTML = editTenDangNhap;
  hoTen.innerHTML = editHoTen;
  soDienThoai.innerHTML = editSoDT;
  email.innerHTML = editEmail;
});

var btnHome1 = document.getElementById("btnHome1"),
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
  location = "./TrangCaNhan.html";
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
