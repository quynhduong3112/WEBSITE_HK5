var inputFirstPwd = document.getElementById("input--pwd");
var inputSecondPwd = document.getElementById("input--pwd2");
const form = document.querySelector('.right--content form');
const inputs = document.querySelectorAll('.right--content form input');
var firstpwd = inputFirstPwd.value;
var secondpwd = inputSecondPwd.value;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputs.forEach((input) => {
        if(!input.value) {
            input.parentElement.classList.add('error');
        }
        else {
            input.parentElement.classList.remove('error');
        }
    });
});


function validatePhoneNumber(input_str) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    return re.test(input_str);
}

function validateForm(event) {
    var isDonePhone = false;
    var isDonePass = false;
    var isDone = false;
    var phone = document.getElementById("input--phone").value;
    if (!validatePhoneNumber(phone)) {
        document.getElementById('phone_error').classList.remove('hidden');
            document.getElementById("icon-phone").parentElement.classList.add('error');
    } else {
        document.getElementById('phone_error').classList.add('hidden');
        document.getElementById("icon-phone").parentElement.classList.remove('error');
        isDonePhone = true;
    }
    if (firstpwd != secondpwd) {
        inputSecondPwd.focus;
        alert("sai rồi");
      } else{ isDonePass = true;}
    event.preventDefault();
    if(isDonePhone == true && isDonePass == true){
        isDone = true;
        $(this).trigger('submit');
    }
}

form.addEventListener('submit', validateForm);