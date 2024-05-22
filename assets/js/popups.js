$(function () {
    "use strict";

    $(".containerTeam .imgMembers").click(function () {
        var $src = $(this).attr("src");
        document.getElementById("descPopUp").textContent = getSiblings($(this),".desc").text();
        document.getElementById("namePopUp").textContent = getSiblings($(this),".name").text();
        document.getElementById("jobPopUp").textContent = getSiblings($(this),".job").text();
        $(".img-show img").attr("src", $src);
        fadeIn();
    });

    $(".read-more-less").click(function () {
        $("#principalPopUp").empty().append(getChildrens($(this),".title"));
        $("#descPopUp").empty().append(getChildrens($(this),".project-content"));
        fadeIn();
    });

    function getSiblings(clicked, sibling){
        return clicked.siblings(sibling);
    }

    function getChildrens(clicked, sibling){
        return getSiblings(clicked,sibling).children().clone();
    }

    function fadeIn(){
        $(".showPopUp").fadeIn();
        $("html").addClass("no-scroll");
    }
    
    $("span, .overlay").click(function () {
        $(".showPopUp").fadeOut();
        $("html").removeClass("no-scroll");
    });
    
});
