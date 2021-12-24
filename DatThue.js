var taiKhoan = document.getElementById("taiKhoan"),
  khuyenMai = document.getElementById("khuyenMai"),
  dangXuat = document.getElementById("dangXuat"),
  thongBao = document.getElementById("thongBao"),
  datThue = document.getElementById("datThue"),
  thoiHan = document.getElementById("thoiHan"),
  dateRent = document.getElementById("date"),
  timeRent = document.getElementById("time"),
  btnHome1 = document.getElementById("btnHome1"),
  btnHome2 = document.getElementById("btnHome2"),
  btnChoThue2 = document.getElementById("btnChoThue2"),
  btnBlog1 = document.getElementById("btnBlog1"),
  btnBlog2 = document.getElementById("btnBlog2"),
  btnAva = document.getElementById("btnAva"),
  payStatus = "waiting",
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
var personalFullName = document.getElementById("fullName"),
  personalNumberPhone = document.getElementById("phone"),
  personalIdentifyNumber = document.getElementById("identifyNumber"),
  personalEmail = document.getElementById("email"),
  secondFullName = document.getElementById("secondName"),
  secondNumberPhone = document.getElementById("secondPhone"),
  secondIdentifyNumber = document.getElementById("secondIdentifyNumber"),
  secondEmail = document.getElementById("secondEmail"),
  btnRenting = document.getElementById("btnRenting"),
  checkBoxConfirm = document.getElementById("checkBoxConfirm");

var tenDangNhap = document.getElementById("tenDangNhap");

window.addEventListener("load", function () {
  personalFullName.value = JSON.parse(localStorage.getItem("fullname"));
  personalNumberPhone.value = JSON.parse(localStorage.getItem("phone"));
  personalEmail.value = JSON.parse(localStorage.getItem("email"));

  tenDangNhap.innerHTML = JSON.parse(localStorage.getItem("username"));
});

checkBoxConfirm.addEventListener("click", function () {
  secondFullName.value = personalFullName.value;
  secondNumberPhone.value = personalNumberPhone.value;
  secondIdentifyNumber.value = personalIdentifyNumber.value;
  secondEmail.value = personalEmail.value;
});

btnRenting.addEventListener("click", function () {
  window.localStorage.setItem(
    "identify",
    JSON.stringify(personalIdentifyNumber.value)
  );
  window.localStorage.setItem(
    "fullname2",
    JSON.stringify(secondFullName.value)
  );
  window.localStorage.setItem(
    "phone2",
    JSON.stringify(secondNumberPhone.value)
  );
  window.localStorage.setItem(
    "identify2",
    JSON.stringify(secondIdentifyNumber.value)
  );
  window.localStorage.setItem("email2", JSON.stringify(secondEmail.value));
  window.localStorage.setItem("thoiHan", JSON.stringify(thoiHan.value));
  window.localStorage.setItem("dateRent", JSON.stringify(dateRent.value));
  window.localStorage.setItem("timeRent", JSON.stringify(timeRent.value));
  window.localStorage.setItem("payStatus", JSON.stringify(payStatus));

  const tomorrow = new Date();
  tomorrow.setDate(new Date().getDate() + 1);
  var ngayMoi = tomorrow.getDate() + "",
    thangMoi = tomorrow.getMonth() + 1 + "",
    namMoi = tomorrow.getFullYear() + "",
    gioMoi = tomorrow.getHours() + "",
    giayMoi = tomorrow.getSeconds() + "",
    phutMoi = tomorrow.getMinutes() + "";

  window.localStorage.setItem("ngayMai", JSON.stringify(ngayMoi));
  window.localStorage.setItem("thangMai", JSON.stringify(thangMoi));
  window.localStorage.setItem("namMai", JSON.stringify(namMoi));
  window.localStorage.setItem("gioMai", JSON.stringify(gioMoi));
  window.localStorage.setItem("phutMai", JSON.stringify(phutMoi));
  window.localStorage.setItem("giayMai", JSON.stringify(giayMoi));
});
