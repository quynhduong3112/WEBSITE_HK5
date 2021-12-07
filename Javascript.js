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
var KhuyenMaiDemTag1 = document.getElementsByClassName("KhuyenMai__tag--1");
var KhuyenMaiDemTag2 = document.getElementsByClassName("KhuyenMai__tag--2");
var KhuyenMaiDemTag3 = document.getElementsByClassName("KhuyenMai__tag--3");
var KhuyenMaiDem1 = document.getElementById("KhuyenMaiDem1");
var KhuyenMaiDem2 = document.getElementById("KhuyenMaiDem2");
var KhuyenMaiDem3 = document.getElementById("KhuyenMaiDem3");
var KhuyenMaiDoiDiem = document.getElementById("KhuyenMaiDoiDiem");
window.onload = function () {
    KhuyenMaiDem1.innerHTML = KhuyenMaiDemTag1.length;
    KhuyenMaiDem2.innerHTML = KhuyenMaiDemTag2.length;
    KhuyenMaiDem3.innerHTML = KhuyenMaiDemTag3.length;
}
KhuyenMaiDoiDiem.addEventListener("click", () => {
    location.href = "/html/popupdoidiem.html";
});
function KhuyenMaiTinhTong() {
    var dungNgay = document.getElementById("")
}
function openNav() {
    document.getElementById("myHeader2").style.width = "250px";
}
function closeNav() {
    document.getElementById("myHeader2").style.width = "0";
}
function chuChoThueSeeMore1() {
    var more1 = document.getElementById("more1");
    var seeMore1 = document.getElementById("seeMore1");
    if (more1.style.display === "none") {
        seeMore1.innerHTML = "Xem thêm...";
        more1.style.display = "none";
    } else {
        seeMore1.innerHTML = "";
        more1.style.display = "flex";
        more1.style.flexWrap ="wrap";
        more1.style.justifyContent="center";
    }
}
function chuChoThueSeeMore2() {
    var more2 = document.getElementById("more2");
    var seeMore2 = document.getElementById("seeMore2");
    if (more2.style.display === "none") {
        seeMore2.innerHTML = "Xem thêm...";
        more2.style.display = "none";
    } else {
        seeMore2.innerHTML = "";
        more2.style.display = "flex";
        more2.style.flexWrap ="wrap";
        more2.style.justifyContent="center";
    }
}
function chuChoThueSeeMore3() {
    var more3 = document.getElementById("more3");
    var seeMore3 = document.getElementById("seeMore3");
    if (more3.style.display === "none") {
        seeMore3.innerHTML = "Xem thêm...";
        more3.style.display = "none";
    } else {
        seeMore3.innerHTML = "";
        more3.style.display = "flex";
        more3.style.flexWrap ="wrap";
        more3.style.justifyContent="center";
    }
}