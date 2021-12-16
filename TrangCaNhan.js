var thongBao = document.getElementById("thongBao"),
  datThue = document.getElementById("datThue"),
  khuyenMai = document.getElementById("khuyenMai"),
  dangXuat = document.getElementById("dangXuat"),
  tenDangNhap = document.getElementById("tenDangNhap"),
  hoTen = document.getElementById("hoTen"),
  soDienThoai = document.getElementById("soDienThoai"),
  email = document.getElementById("email"),
  chinhSua = document.getElementById("chinhSua");

datThue.addEventListener("click", function () {
  window.open("./DatThue.html");
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
