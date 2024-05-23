$(function () {
    "use strict";

    $(".containerTeam .imgMembers").click(function () {
        var $src = $(this).attr("src");
        setText("descPopUp",$(this),".desc");
        setText("namePopUp",$(this),".name");
        setText("jobPopUp",$(this),".job");
        $(".img-show img").attr("src", $src);
        fadeIn();
    });

    $(".read-more-less").click(function () {
        appendChildren("#principalPopUp",$(this),".title");
        appendChildren("#descPopUp",$(this),".project-content");
        fadeIn();
    });

    function getSiblings(clicked, sibling){
        return clicked.siblings(sibling);
    }

    function getChildren(clicked, sibling){
        return getSiblings(clicked,sibling).children().clone();
    }

    function setText(id,clicked, sibling){
        document.getElementById(id).textContent = getSiblings(clicked,sibling).text();
    }
    
    function appendChildren(id, clicked, sibling){
        $(id).empty().append(getChildren(clicked,sibling));
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
