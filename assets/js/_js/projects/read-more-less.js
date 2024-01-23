/*! Mr. Green Jekyll Theme (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
 *  Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
 *  Licensed under MIT
*/

(function () {
  'use strict';

  $(function () {
    let readMoreLess = $(".read-more-less");
    readMoreLess.click(function () {
      var title = $(this).parent().find("h1").text();
      var description = $(this).parent().parent().parent().find(".markdown-style").children();
      var descriptionContainer = document.getElementById("descPopUp");
      while (descriptionContainer.firstChild) {
        descriptionContainer.removeChild(descriptionContainer.firstChild);
      }
      for (var i = 0; i < description.length; i++) {
        descriptionContainer.appendChild(description[i].cloneNode(true));
      }
      document.getElementById("titlePopUp").textContent = title;
      $(".showPopUp").fadeIn();
      $("html").addClass("no-scroll");
    });

  });

})();
