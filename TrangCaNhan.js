var thongBao = document.getElementById("thongBao"),
  datThue = document.getElementById("datThue"),
  khuyenMai = document.getElementById("khuyenMai"),
  dangXuat = document.getElementById("dangXuat"),
  tenDangNhap = document.getElementById("tenDangNhap"),
  hoTen = document.getElementById("hoTen"),
  soDienThoai = document.getElementById("soDienThoai"),
  email = document.getElementById("email");

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
  fetch("./DATA/users.json")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("HTTP error, status: " + response.status);
      }
      return response.json();
    })
    .then(function (users) {
      for (let u of users) {
        tenDangNhap.innerHTML = u.userName;
        hoTen.innerHTML = u.fullName;
        soDienThoai.innerHTML = u.phone;
        email.innerHTML = u.email;
      }
    })
    .catch(function (error) {
      alert("Error: " + error.message);
    });
});
