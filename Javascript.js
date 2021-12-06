// Hiếu
var dangXuat = document.getElementById("dangXuat"),
  thongBao = document.getElementById("thongBao"),
  khuyenMai = document.getElementById("khuyenMai"),
  datThue = document.getElementById("datThue"),
  chinhSua = document.getElementById("chinhSua"),
  soDienThoai = document.getElementById("soDienThoai"),
  tenDangNhap = document.getElementById("tenDangNhap"),
  hoTen = document.getElementById("hoTen"),
  diemTichLuy = document.getElementById("diemTichLuy"),
  email = document.getElementById("email");

dangXuat.addEventListener("click", () => {
  location.href = "/html/homepage.html";
});
khuyenMai.addEventListener("click", () => {
  window.open("/html/homepage.html");
});
datThue.addEventListener("click", () => {
  window.open("/html/homepage.html");
});
thongBao.addEventListener("click", () => {
  alert("Hiện tại bạn không có thông báo!");
});

var score = ["10"];

diemTichLuy.innerHTML = score;

const thongTin = {
  userName: "Ngocs",
  fullName: "Dương Phạm Diễm Quỳnh",
  phoneNumber: "0819636086",
  email: "",
};
// window.localStorage.setItem("user", JSON.stringify(thongTin));
var user = JSON.parse(localStorage.getItem("user"));
tenDangNhap.innerHTML = user.userName;
hoTen.innerHTML = user.fullName;
soDienThoai.innerHTML = user.phoneNumber;
email.innerHTML = user.email;

chinhSua.addEventListener("click", () => {
  let text1,
    text2,
    text3,
    text4,
    editTenDangNhap = prompt(
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
    text1 = tenDangNhap.innerHTML;
  } else {
    text1 = editTenDangNhap;
    thongTin["userName"] = text1;
    window.localStorage.setItem("user", JSON.stringify(thongTin));
  }
  if (editHoTen == null || editHoTen == "") {
    text2 = hoTen.innerHTML;
  } else {
    text2 = editHoTen;
    thongTin["fullName"] = text2;
    window.localStorage.setItem("user", JSON.stringify(thongTin));
  }
  if (editSoDT == null || editSoDT == "") {
    text3 = soDienThoai.innerHTML;
  } else {
    text3 = editSoDT;
    thongTin["phoneNumber"] = text3;
    window.localStorage.setItem("user", JSON.stringify(thongTin));
  }
  if (editEmail == null || editEmail == "") {
    text4 = "";
  } else {
    text4 = editEmail;
    thongTin["email"] = text4;
    window.localStorage.setItem("user", JSON.stringify(thongTin));
  }
  tenDangNhap.innerHTML = text1;
  hoTen.innerHTML = text2;
  soDienThoai.innerHTML = text3;
  email.innerHTML = text4;
});
