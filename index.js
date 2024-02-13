document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".loginBtn").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission
        validateForm(); // Call validation function
    });

    function validateForm() {
        var username = document.getElementsByName('uname')[0].value;
        var password = document.getElementsByName('psw')[0].value;

        if (username.trim() === '' || password.trim() === '') {
            alert('Нэр нууц үгээ оруулна уу');
            return false;
        }
        else if (username.trim() === 'Nomin123' || password.trim() === 'N0m1n$trongP@$$w0rd123') {

            window.location.href = './new_page.html';
            return true;
        }
    }
});