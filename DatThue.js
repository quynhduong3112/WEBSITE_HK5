var taiKhoan = document.getElementById("taiKhoan"),
  khuyenMai = document.getElementById("khuyenMai"),
  dangXuat = document.getElementById("dangXuat"),
  thongBao = document.getElementById("thongBao"),
  datThue = document.getElementById("datThue"),
  thoiHan = document.getElementById("thoiHan"),
  dateRent = document.getElementById("date"),
  timeRent = document.getElementById("time");

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

window.addEventListener("load", function () {
  personalFullName.value = JSON.parse(localStorage.getItem("fullname"));
  personalNumberPhone.value = JSON.parse(localStorage.getItem("phone"));
  personalEmail.value = JSON.parse(localStorage.getItem("email"));
});

checkBoxConfirm.addEventListener("click", function () {
  secondFullName.value = personalFullName.value;
  secondNumberPhone.value = personalNumberPhone.value;
  secondIdentifyNumber.value = personalIdentifyNumber.value;
  secondEmail.value = personalEmail.value;
});

btnRenting.addEventListener("click", function () {
  if (!isValid(secondFullName.value)) {
    alert("sai");
  } else {
    alert("đúng");
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

    const tomorrow = new Date();
    tomorrow.setDate(new Date().getDate() + 1);
    var ngayMoi = tomorrow.getDate(),
      thangMoi = tomorrow.getMonth() + 1,
      namMoi = tomorrow.getFullYear(),
      gioMoi = tomorrow.getHours(),
      giayMoi = tomorrow.getSeconds(),
      phutMoi = tomorrow.getMinutes();

    window.localStorage.setItem("ngayMai", JSON.stringify(ngayMoi));
    window.localStorage.setItem("thangMai", JSON.stringify(thangMoi));
    window.localStorage.setItem("namMai", JSON.stringify(namMoi));
    window.localStorage.setItem("gioMai", JSON.stringify(gioMoi));
    window.localStorage.setItem("phutMai", JSON.stringify(phutMoi));
    window.localStorage.setItem("giayMai", JSON.stringify(giayMoi));
  }
});

// btnRenting.addEventListener("click", function () {
//   if (!validateIdentifyNumber(personnalIdentifyNumber)) {
//     alert("sai");
//   } else {
//     alert("đúng");
//   }
//   if (!validateIdentifyNumber(secondIdentifyNumber)) {
//     alert("sai");
//   } else {
//     alert("đúng");
//   }
// if (!validatePhoneNumber(secondNumberPhone.value)) {
//   alert("sai");
// } else {
//   alert("đúng");
// }
// if (!checkEmail(secondEmail.value)) {
//   alert("sai");
// } else {
//   alert("đúng");
// }
// if (secondFullName.value == null || secondFullName.value == "") {
//   alert("Bạn cần nhập Họ tên người nhận");
//   if (secondNumberPhone.value == null || secondNumberPhone.value == "") {
//     alert("Bạn cần nhập Số điện thoại");
//     if (
//       secondIdentifyNumber.value == null ||
//       secondIdentifyNumber.value == ""
//     ) {
//       alert("Bạn cần nhập CMND/CCCD");
//     }
//     if (secondEmail.value == null || secondEmail.value == "") {
//       alert("Bạn cần nhập Email");
//     }
//   }
// }
// if (secondNumberPhone.value == null || secondNumberPhone.value == "") {
//   alert("Bạn cần nhập Số điện thoại");
//   if (secondFullName.value == null || secondFullName.value == "") {
//     alert("Bạn cần nhập Họ tên");
//     if (
//       secondIdentifyNumber.value == null ||
//       secondIdentifyNumber.value == ""
//     ) {
//       alert("Bạn cần nhập CMND/CCCD");
//     }
//     if (secondEmail.value == null || secondEmail.value == "") {
//       alert("Bạn cần nhập Email");
//     }
//   }
// }
// if (secondIdentifyNumber.value == null || secondIdentifyNumber.value == "") {
//   alert("Bạn cần nhập CMND/CCCD");
//   if (secondNumberPhone.value == null || secondNumberPhone.value == "") {
//     alert("Bạn cần nhập Số điện thoại");
//     if (secondFullName.value == null || secondFullName.value == "") {
//       alert("Bạn cần nhập Họ tên");
//     }
//     if (secondEmail.value == null || secondEmail.value == "") {
//       alert("Bạn cần nhập Email");
//     }
//   }
// }
// if (secondEmail.value == null || secondEmail.value == "") {
//   alert("Bạn cần nhập Email");
//   if (secondNumberPhone.value == null || secondNumberPhone.value == "") {
//     alert("Bạn cần nhập Số điện thoại");
//     if (
//       secondIdentifyNumber.value == null ||
//       secondIdentifyNumber.value == ""
//     ) {
//       alert("Bạn cần nhập CMND/CCCD");
//     }
//     if (senconFullName.value == null || senconFullName.value == "") {
//       alert("Bạn cần nhập Họ tên");
//     }
//   }
// }
// else {
//   window.open("./DonHangChoThanhToan.html");
// }

function validatePhoneNumber(input_str) {
  var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(input_str);
}

function validatePhoneNumber(personalNumberPhone) {
  var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(personalNumberPhone);
}

function validatePhoneNumber(secondNumberPhone) {
  var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(secondNumberPhone);
}

function checkEmail(input_str) {
  var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return re.test(input_str);
}

function removeAscent(str) {
  if (str === null || str === undefined) return str;
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  return str;
}

function isValid(string) {
  var re = /(.[^\d\!\@\#\$\%\^\&\*\(\)\-\=\+\_\;\:\'\"\,\<\.\>\/\?])+/g;
  return re.test(removeAscent(string));

  // var re = /^[a-zA-Z]{2,}$/g;
  // return re.test(removeAscent(string));
}

function validateIdentifyNumber(personnalIdentifyNumber) {
  const regex = /^\d{9}$/g;
  return regex.test(personnalIdentifyNumber);
}

function validateIdentifyNumber(secondIdentifyNumber) {
  const regex = /^\d{9}$/g;
  return regex.test(secondIdentifyNumber);
}
