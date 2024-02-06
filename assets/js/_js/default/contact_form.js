function sendForm(alertText) {
    var formInvalid = false;
    var option = document.getElementById("select-form").value;
    var name = document.getElementById("name").value;
    document.getElementById("form-subject").value = option + "-" + name;
    document.getElementById("form-redirect").value = 'http://'+window.location.host;
    $('#contact-form input, #contact-form textarea ').each(function () {
        if ($(this).val() === '') {
            formInvalid = true;
        }
    });
    if ($('#select-form :selected').val()=== ''){
        formInvalid = true;
    }
    if (!formInvalid) {
        alert(alertText);
    }
};
