var hoTen = document.getElementById("hoTen"),
  soDT = document.getElementById("soDT"),
  identify = document.getElementById("identify"),
  email = document.getElementById("email"),
  hoTen2 = document.getElementById("hoTen2"),
  soDT2 = document.getElementById("soDT2"),
  identify2 = document.getElementById("identify2"),
  email2 = document.getElementById("email2");

window.addEventListener("load", function () {
  hoTen.innerHTML = JSON.parse(window.localStorage.getItem("fullname"));
  soDT.innerHTML = JSON.parse(window.localStorage.getItem("phone"));
  identify.innerHTML = JSON.parse(window.localStorage.getItem("identify"));
  email.innerHTML = JSON.parse(window.localStorage.getItem("email"));
  hoTen2.innerHTML = JSON.parse(window.localStorage.getItem("fullname2"));
  soDT2.innerHTML = JSON.parse(window.localStorage.getItem("phone2"));
  identify2.innerHTML = JSON.parse(window.localStorage.getItem("identify2"));
  email2.innerHTML = JSON.parse(window.localStorage.getItem("email2"));
});

var nhanHang = document.getElementById("nhanHang"),
  thoiHan = document.getElementById("thoiHan"),
  timeleft = document.getElementById("timeleft"),
  deposit = document.getElementById("deposit"),
  totalPrice = document.getElementById("totalPrice"),
  status = document.getElementById("status"),
  tienConLai = document.getElementById("tienConLai"),
  datThue = document.getElementById("datThue");

window.addEventListener("load", function () {
  var dateRent = JSON.parse(localStorage.getItem("dateRent")),
    nam = dateRent.slice(0, 4),
    thang = dateRent.slice(5, 7),
    ngay = dateRent.slice(8, 10),
    ngayMoi = ngay + "/" + thang + "/" + nam,
    timeRent = JSON.parse(localStorage.getItem("timeRent"));

  thoiHan.innerHTML = JSON.parse(localStorage.getItem("thoiHan"));
  nhanHang.innerHTML = ngayMoi.concat(" ", timeRent);

  var today = new Date();
  datThue.innerHTML =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

  var ngayMai = JSON.parse(window.localStorage.getItem("ngayMai"));
});

// const startingHours = 23,
//   startingMinutes = 59,
//   startingSeconds = 5;
// let time = startingHours * 3600 + startingMinutes * 60 + startingSeconds;
// const countdownEl = document.getElementById("timeLeft");
// setInterval(updateCountdown, 1000);
// function updateCountdown() {
//   const hours = Math.floor(time / 3600);
//   const minutes = Math.floor(time / 1440);
//   let seconds = time % 60;
//   seconds = seconds < 10 ? "0" + seconds : seconds;

//   if (seconds === 00) {
//     minutes -= 1;
//     seconds = 59;
//   }
//   if (minutes == 0) {
//     hours -= 1;
//     minutes = 59;
//   }
//   if (hours == 0) {
//     clearTimeout(timeout);
//     alert("Hết giờ");
//     return false;
//   }
//   time--;
//   countdownEl.innerHTML = `${hours}: ${minutes}: ${seconds}`;
// }

// setInterval(function time() {
//   let d = new Date();
//   let hours = 24; /*  - d.getHours(); */
//   let min = 60; //- d.getMinutes();
//   let sec = 60; //- d.getSeconds();
//   if ((min + "").length == 1) {
//     min = "0" + min;
//   }
//   // sec = 60 - d.getSeconds();
//   if ((sec + "").length == 1) {
//     sec = "0" + sec;
//   }
//   document.getElementById("timeLeft").innerHTML =
//     hours + "h : " + min + "m : " + sec + "s";
//   if (hours < 0) {
//     clearInterval(time);
//     document.getElementById("timeLeft").innerHTML = "EXPIRED";
//   }
// }, 1000);

// setInterval(function time() {
//   var d = new Date();
//   var hours = 24 - d.getHours();
//   var min = 60 - d.getMinutes();
//   if ((min + "").length == 1) {
//     min = "0" + min;
//   }
//   var sec = 60 - d.getSeconds();
//   if ((sec + "").length == 1) {
//     sec = "0" + sec;
//   }
//   jQuery("#the-final-countdown p").html(hours + ":" + min + ":" + sec);
// }, 1000);

/* var h = 24;
(m = 60), (s = 60);
var timeout = null;
function start() {
  if (s === -1) {
    m -= 1;
    s = 59;
  }
  if (m === -1) {
    h -= 1;
    m = 59;
  }
  if (h == -1) {
    clearTimeout(timeout);
    alert("Hết giờ");
    return false;
  }
  document.getElementById("h").innerText = h.toString();
  document.getElementById("m").innerText = m.toString();
  document.getElementById("s").innerText = s.toString();
  timeout = setTimeout(function () {
    s--;
    start();
  }, 1000);
} */

// Set the date we're counting down to
// var countDownDate = new Date("december 2, 2021 18:50:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

// // Get today's date and time
// var now = new Date().getTime();

// // Find the distance between now and the count down date
// var distance = countDownDate - now;

// // Time calculations for days, hours, minutes and seconds
// var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// // Display the result in the element with id="demo"
// document.getElementById("demo").innerHTML = hours + "h : "
// + minutes + "m : " + seconds + "s ";

// // If the count down is finished, write some text
// if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
// }
// }, 1000);
