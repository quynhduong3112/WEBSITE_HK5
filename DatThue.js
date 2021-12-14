var taiKhoan = document.getElementById("taiKhoan"),
  khuyenMai = document.getElementById("khuyenMai"),
  dangXuat = document.getElementById("dangXuat"),
  thongBao = document.getElementById("thongBao"),
  datThue = document.getElementById("datThue");

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
  fetch("./DATA/users.json")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("HTTP error, status: " + response.status);
      }
      return response.json();
    })
    .then(function (users) {
      for (let u of users) {
        personalFullName.value = u.fullName;
        personalNumberPhone.value = u.phone;
        personalEmail.value = u.email;
        personalIdentifyNumber.value = u.identifyNumber;
      }
    })
    .catch(function (error) {
      alert("Error: " + error.message);
    });
});

checkBoxConfirm.addEventListener("click", function () {
  secondFullName.value = personalFullName.value;
  secondNumberPhone.value = personalNumberPhone.value;
  secondIdentifyNumber.value = personalIdentifyNumber.value;
  secondEmail.value = personalEmail.value;
});

function validatePhoneNumber(input_str) {
  var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(input_str);
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
function validateIdentifyNumber(secondIdentifyNumber) {
  const regex = /^\d{9}$/g;
  return regex.test(secondIdentifyNumber);
}
btnRenting.addEventListener("click", function () {
  if (!isValid(secondFullName.value)) {
    alert("sai");
  } else {
    alert("đúng");
  }
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
});
