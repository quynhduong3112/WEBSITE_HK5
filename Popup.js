var PopupDoiDiem = document.getElementById("popupDoiDiem");
var btn1 = document.getElementById("KhuyenMaiDoiDien");
var span1 = document.getElementsByClassName("PopupDoiDiem__close")[0];
btn1.onclick = function () {
  PopupDoiDiem.style.display = "block";
};
span1.onclick = function () {
  PopupDoiDiem.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == PopupDoiDiem) {
    PopupDoiDiem.style.display = "none";
  }
};

var PopupDungVoucher = document.getElementById("popupDungVoucher");
var btn2 = document.getElementById("khuyenMaiDungNgay");
var span2 = document.getElementsByClassName("PopupDungVoucher__close")[0];
btn2.onclick = function () {
  PopupDungVoucher.style.display = "block";
};
span2.onclick = function () {
  PopupDungVoucher.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == PopupDungVoucher) {
    PopupDungVoucher.style.display = "none";
  }
};
