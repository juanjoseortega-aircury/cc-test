$(function () {
    "use strict";

    $(".containerTeam .imgMembers").click(function () {
        var $src = $(this).attr("src"); 
        var $description = $(this).siblings("#desc").text();
        var $name = $(this).siblings("h1").text();
        var $job = $(this).siblings(".job").text();
        document.getElementById("descPopUp").textContent = $description;
        document.getElementById("namePopUp").textContent = $name;
        document.getElementById("jobPopUp").textContent = $job;
        $(".img-show img").attr("src", $src);
        fadeIn();
    });

    $(".read-more-less").click(function () {
        var titleSubtitleUbication = $(this).siblings(".title").children().clone();
        $("#principalPopUp").empty().append(titleSubtitleUbication);
        var description = $(this).siblings(".project-content").children().clone();
        $("#descPopUp").empty().append(description);
        fadeIn();
    });

    function fadeIn(){
        $(".showPopUp").fadeIn();
        $("html").addClass("no-scroll");
    }
    
    $("span, .overlay").click(function () {
        $(".showPopUp").fadeOut();
        $("html").removeClass("no-scroll");
    });
    
});
