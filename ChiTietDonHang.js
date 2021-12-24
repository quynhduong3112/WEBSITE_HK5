var hoTen = document.getElementById("hoTen"),
  soDT = document.getElementById("soDT"),
  identify = document.getElementById("identify"),
  email = document.getElementById("email"),
  hoTen2 = document.getElementById("hoTen2"),
  soDT2 = document.getElementById("soDT2"),
  identify2 = document.getElementById("identify2"),
  email2 = document.getElementById("email2"),
  btnHome1 = document.getElementById("btnHome1"),
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
var nhanHang = document.getElementById("nhanHang"),
  thoiHan = document.getElementById("thoiHan"),
  timeleft = document.getElementById("timeLeft"),
  deposit = document.getElementById("deposit"),
  totalPrice = document.getElementById("totalPrice"),
  orderStatus = document.getElementById("orderStatus"),
  tienConLai = document.getElementById("tienConLai"),
  datThue = document.getElementById("datThue"),
  btnThanhToan = document.getElementById("btnThanhToan"),
  btnTroVe = document.getElementById("btnTroVe"),
  PopupDatThue = document.getElementById("popupDatThue"),
  btnDatThueKhong = document.getElementById("popupDatThueKhong"),
  btnDatThueCo = document.getElementById("popupDatThueCo"),
  popupThanhCong = document.getElementById("popupThanhCong"),
  btnOK = document.getElementById("btnOK"),
  payStatus = JSON.parse(window.localStorage.getItem("payStatus")),
  payDone = "done";
span = document.getElementsByClassName("PopupDoiDiem__close")[0];
btnThanhToan.onclick = function () {
  PopupDatThue.style.display = "block";
};
span.onclick = function () {
  PopupDatThue.style.display = "none";
};
btnDatThueKhong.onclick = function () {
  PopupDatThue.style.display = "none";
};
btnDatThueCo.onclick = function (event) {
  PopupDatThue.style.display = "none";
  popupThanhCong.style.display = "block";
  window.localStorage.setItem("payStatus", JSON.stringify(payDone));
  var homnay = new Date();
  var ngayTra =
    homnay.getDate() +
    "/" +
    (homnay.getMonth() + 1) +
    "/" +
    homnay.getFullYear() +
    " " +
    homnay.getHours() +
    ":" +
    homnay.getMinutes();
  window.localStorage.setItem("payTime", JSON.stringify(ngayTra));
};

btnOK.onclick = function () {
  popupThanhCong.style.display = "none";
  location.reload();
  var tienDatThueCongDiem = document.getElementById(
    "tienDatThueCongDiem"
  ).innerHTML;
  var diemHienTai = JSON.parse(window.localStorage.getItem("diemTichLuy"));
  var diemConLai;
  if (tienDatThueCongDiem < 500000) {
    diemConLai = diemHienTai - -1 + "";
    window.localStorage.setItem("diemTichLuy", JSON.stringify(diemConLai));
  } else if (tienDatThueCongDiem < 1000000 && tienDatThueCongDiem >= 500000) {
    diemConLai = diemHienTai - -2 + "";
    window.localStorage.setItem("diemTichLuy", JSON.stringify(diemConLai));
  } else if (tienDatThueCongDiem < 2000000 && tienDatThueCongDiem >= 1000000) {
    diemConLai = diemHienTai - -3 + "";
    window.localStorage.setItem("diemTichLuy", JSON.stringify(diemConLai));
  } else if (tienDatThueCongDiem < 3000000 && tienDatThueCongDiem >= 2000000) {
    diemConLai = diemHienTai - -5 + "";
    window.localStorage.setItem("diemTichLuy", JSON.stringify(diemConLai));
  } else if (tienDatThueCongDiem < 5000000 && tienDatThueCongDiem >= 3000000) {
    diemConLai = diemHienTai - -7 + "";
    window.localStorage.setItem("diemTichLuy", JSON.stringify(diemConLai));
  } else {
    diemConLai = diemHienTai - -10 + "";
    window.localStorage.setItem("diemTichLuy", JSON.stringify(diemConLai));
  }
};
window.onclick = function (event) {
  if (event.target == PopupDatThue) {
    PopupDatThue.style.display = "none";
  }
};
window.addEventListener("load", function () {
  hoTen.innerHTML = JSON.parse(window.localStorage.getItem("fullname"));
  soDT.innerHTML = JSON.parse(window.localStorage.getItem("phone"));
  identify.innerHTML = JSON.parse(window.localStorage.getItem("identify"));
  email.innerHTML = JSON.parse(window.localStorage.getItem("email"));
  hoTen2.innerHTML = JSON.parse(window.localStorage.getItem("fullname2"));
  soDT2.innerHTML = JSON.parse(window.localStorage.getItem("phone2"));
  identify2.innerHTML = JSON.parse(window.localStorage.getItem("identify2"));
  email2.innerHTML = JSON.parse(window.localStorage.getItem("email2"));

  var dateRent = JSON.parse(localStorage.getItem("dateRent")),
    nam = dateRent.slice(0, 4),
    thang = dateRent.slice(5, 7),
    ngay = dateRent.slice(8, 10),
    ngayMoi = ngay + "/" + thang + "/" + nam,
    timeRent = JSON.parse(localStorage.getItem("timeRent"));

  var today = new Date();
  datThue.innerHTML =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

  thoiHan.innerHTML = JSON.parse(localStorage.getItem("thoiHan"));
  nhanHang.innerHTML = ngayMoi.concat(" ", timeRent);

  var ngayMai = JSON.parse(window.localStorage.getItem("ngayMai")),
    gioMai = JSON.parse(window.localStorage.getItem("gioMai")),
    phutMai = JSON.parse(window.localStorage.getItem("phutMai")),
    giayMai = JSON.parse(window.localStorage.getItem("giayMai")),
    thangMai = JSON.parse(window.localStorage.getItem("thangMai")),
    namMai = JSON.parse(window.localStorage.getItem("namMai"));

  var countDownDate = new Date(
    namMai,
    thangMai,
    ngayMai,
    gioMai,
    phutMai,
    giayMai
  );
  if (payStatus == "waiting") {
    var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      document.getElementById("timeLeft").innerHTML =
        hours + ":" + minutes + ":" + seconds;
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("timeLeft").innerHTML = "Hết hạn thanh toán";
      }
    }, 1000);
  } else if (payStatus == "done") {
    document.getElementById("timeLeft").innerHTML = JSON.parse(
      window.localStorage.getItem("payTime")
    );
    timeleft.style.color = "black";
    document.getElementById("ChoThanhToan--pay-method").disabled = true;
    btnThanhToan.style.backgroundColor = "#C4C4C4";
    btnThanhToan.disabled = true;
    document.getElementById("orderStatus").innerHTML = "Đã thanh toán";
    document.getElementById("orderStatus").style.color = "#12C92F";
    document.getElementById("ChoThanhToanCircle").style.backgroundColor =
      "#12C92F";
    document.getElementById("rectColor").style.fill = "#12C92F";
  }
});

btnTroVe.addEventListener("click", function () {
  window.localStorage.setItem(
    "orderStatus",
    JSON.stringify(orderStatus.innerHTML)
  );
});
