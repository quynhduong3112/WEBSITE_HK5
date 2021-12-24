var btnDoiDiem = document.getElementById("btnDoiDiem");
btnDoiDiem.onclick = function () {
  var diemHienTai = JSON.parse(window.localStorage.getItem("diemTichLuy"));
  var diemConLai = diemHienTai - 1 + "";
  if (diemConLai < 0) {
    diemConLai = 0 + "";
    window.localStorage.setItem("diemTichLuy", JSON.stringify(diemConLai));
    alert("Bạn hiện không có đủ điểm!");
  } else {
    window.localStorage.setItem("diemTichLuy", JSON.stringify(diemConLai));
  }
};
