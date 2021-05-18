/*!
* Start Bootstrap - Clean Blog v5.1.0 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
(function ($) {
    "use strict"; // Start of use strict

    // Floating label headings for the contact form
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
        $(this).removeClass("floating-label-form-group-with-focus");
    });

    // Show the navbar when the page is scrolled up
    var MQL = 992;

})(jQuery); // End of use strict

//change header image based on screen size

const masthead = document.getElementById("masthead");

if (window.innerWidth < 800) {
    masthead.classList.add("small-banner");
} else {
    masthead.classList.remove("small-banner");
};


//make carousel dynamic by adding "active" to first slide
$(document).ready(function () {
    $('.carousel-item').first().addClass('active');
    $('.carouselExampleControls > li').first().addClass('active');
});


//Summer Note - Responsive image fix        //$(document).ready(function () {        //    $("img").addClass("img-fluid");        //    $("img").css("max-width", "100%");        //    $("img").css("height", "auto");        //    $("img").css("width", "auto");        //    $("img").css("aspect-ratio", "auto");        //    $("img").parent("span").css("width", "auto");        //    $("img").parent("span").css("height", "auto");        //});
