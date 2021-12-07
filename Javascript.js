    // My
    setInterval(function time(){
    let d = new Date();
    let hours = 24 - d.getHours();
    let min = 60 - d.getMinutes();
    let sec = 60 - d.getSeconds();
    if((min + '').length == 1){
        min = '0' + min;
    }
    sec = 60 - d.getSeconds();
    if((sec + '').length == 1){
            sec = '0' + sec;
    }
    document.getElementById("demo").innerHTML = hours+'h : '+min + 'm : '+sec + 's';
    if (hours<0) {
        clearInterval(time);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
    }, 1000);



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

    // Dat thue
    var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    document.getElementById("date").innerHTML = date;   
    let isConfirm = false;

    var today = new Date();      
    var time = today.getHours() + ":" + today.getMinutes();
    document.getElementById("time").innerHTML = time;

    // mấy cái thông tin ở trên nè
    let personalFullName = document.getElementById("personal-full-name"); // -> Họ và tên
    let personalNumberPhone = document.getElementById("personal-phone"); // -> Số điện thoại
    let personalIdentifyNumber = document.getElementById("personal-identify-number"); // -> CMND/CCCD
    let personalEmail = document.getElementById("personal-email"); // -> Email
    // Các thông tin ở dưới nè
    let secondFullName = document.getElementById("second-name"); // -> Họ và tên
    let secondNumberPhone = document.getElementById("second-phone"); // -> Số điện thoại
    let secondIdentifyNumber = document.getElementById("second-identify-number"); // -> CMND/CCCD
    let secondEmail = document.getElementById("second-email"); // -> Email

    // hàm để đặt thuê
    function renting() {
    if (handleErrorValidate()) {  // -> kiểm tra validate oke thì sẽ submit form để qua trang khác ->? chưa có trang nên nhỏ tự thêm thẻ vô
        document.getElementById("submit-form").onsubmit;
    }
    }

    // xử lý khib  gặp lỗi nè
    function handleErrorValidate() {
    let isError = true;
    if (!validateFullName(personalFullName.value)) { // hàm kiểm tra lỗi của tên
    isError = false;
    personalFullName.classList.add("error");  // add thêm 1 class error vào, mấy cái dưới tương tự
    secondFullName.classList.add("error");
    } else {
    debugger;
    personalFullName.classList.remove("error"); // loại bỏ 1 class error đó ra, mấy cái dưới tương tự
    secondFullName.classList.remove("error");
    }

    if (!validateNumberPhone(personalNumberPhone.value)) {
    isError = false;
    personalNumberPhone.classList.add("error");
    secondNumberPhone.classList.add("error");
    } else {
    personalNumberPhone.classList.remove("error");
    secondNumberPhone.classList.remove("error");
    }

    if (!validateIdentifyNumber(personalIdentifyNumber.value)) {
    isError = false;
    personalIdentifyNumber.classList.add("error");
    secondIdentifyNumber.classList.add("error");
    } else {
    personalIdentifyNumber.classList.remove("error");
    secondIdentifyNumber.classList.remove("error");
    }
    debugger
    if (!validateEmail(personalEmail.value)) {
    isError = false;
    personalEmail.classList.add("error");
    secondEmail.classList.add("error");
    } else {
    personalEmail.classList.remove("error");
    secondEmail.classList.remove("error");
    }
    return isError;
    }

    // hàm kiểm tra lỗi của tên
    function validateFullName(personalFullName) {
    const regex = /(.[^\d\!\@\#\$\%\^\&\*\(\)\-\=\+\_\;\:\'\"\,\<\.\>\/\?])+/g;  //-> regex này là nó lấy tấy cả các kí tự ngoại trừ những kí tự đặc biệt và số
    return regex.test(personalFullName); //dùng để kiểm tra xem một string có chứa khuôn mẫu đã định nghĩa hay không. Nếu có thì kết quả trả về là TRUE và ngược lại thì là FALSE.
    }
    // hàm kiểm tra lỗi của số điện thoại
    function validateNumberPhone(personalNumberPhone) {
    const regex = /^\d{10}$/g; //-> regex này là nó lấy chỉ có số và phải đủ 10 số
    return regex.test(personalNumberPhone);
    }

    function validateIdentifyNumber(personalIdentifyNumber) {
    const regex = /^\d{9}$/g; //-> regex này là nó lấy chỉ có số và phải đủ 9 số
    return regex.test(personalIdentifyNumber);
    }

    function validateEmail(personalEmail) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g; //-> regex này là nó lấy đúng định dạng email abc@abc.abc
    return regex.test(personalEmail);               
    }

    // check checkbox người nhận là bạn
    function confirmInfor() {
    isConfirm = !isConfirm;  // 1 biến để lưu status hiện tại của checkbox đó
    if (isConfirm) {  // nếu là tick checkbox
    secondFullName.disabled = true;  // disable mấy thẻ ni luôn, k cho nhập
    secondNumberPhone.disabled = true;
    secondIdentifyNumber.disabled = true;
    secondEmail.disabled = true;
    secondFullName.value = document.getElementById("personal-full-name").value;  // lấy giá trị tương ứng ở trên bỏ vào đây
    secondNumberPhone.value = document.getElementById("personal-phone").value;
    secondIdentifyNumber.value = document.getElementById("personal-identify-number").value;
    secondEmail.value = document.getElementById("personal-email").value;
    } else {
    secondFullName.disabled = false;  // ngược lại ở trên
    secondNumberPhone.disabled = false;
    secondIdentifyNumber.disabled = false;
    secondEmail.disabled = false;
    }
    }

    // hàm thay đổi input tên ở trên k phải ở dưới
    function changeName(data) {
    if (isConfirm) {
    secondFullName.value = data;  // gán ô ở dưới với value ở trên tương ứng -> name với name, sdt với sđt
    }
    }

    // hàm thay đổi input tên ở trên k phải ở dưới
    function changePhone(data) {
    if (isConfirm) {
    secondNumberPhone.value = data;
    }
    }

    // hàm thay đổi input tên ở trên k phải ở dưới
    function changeIdentifyNumber(data) {
    if (isConfirm) {
    secondIdentifyNumber.value = data;
    }
    }

    // hàm thay đổi input tên ở trên k phải ở dưới
    function changeEmail(data) {
    if (isConfirm) {
    secondEmail.value = data;
    }
    }