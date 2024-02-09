function sendForm(alertText) {
    var formInvalid = false;
    var option = document.getElementById("select-form").value;
    var name = document.getElementById("name").value;
    document.getElementById("form-subject").value = option + "-" + name;
    var pathname = window.location.pathname;
    var link = window.location.host;
    if (!pathname.includes("/en/")) {
        link = link + pathname.slice(0, pathname.lastIndexOf("/")) + "/about";
    }
    document.getElementById("form-redirect").value = "http://" + link;
    $("#contact-form input, #contact-form textarea ").each(function () {
        if ($(this).val() === "") {
            formInvalid = true;
        }
    });
    if ($("#select-form :selected").val()=== ""){
        formInvalid = true;
    }
    if (!formInvalid) {
        alert(alertText);
    }
};
function hcaptchaCallback() {
    $("#contact-form button").removeAttr("disabled");
}