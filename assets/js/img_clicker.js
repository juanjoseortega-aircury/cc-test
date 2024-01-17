$(function () {
    "use strict";

    $(".containerTeam .imgMembers").click(function () {
        var $src = $(this).attr("src"); 
        var $description = $(this).siblings("#desc").text();
        var $name = $(this).siblings("h4").text();
        var $job = $(this).siblings(".job").text();
        document.getElementById("descPopUp").textContent = $description;
        document.getElementById("namePopUp").textContent = $name;
        document.getElementById("jobPopUp").textContent = $job;
        $(".showPopUp").fadeIn();
        $(".img-show img").attr("src", $src);
        $("html").addClass("no-scroll");
    });

    
    $("span, .overlay").click(function () {
        $(".showPopUp").fadeOut();
        $("html").removeClass("no-scroll");
    });
    
});
