$(document).ready(function () {
    // Navbar Shrink
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 90) {
            $("nav").addClass("navbar-shrink");
        } else {
            $("nav").removeClass("navbar-shrink");
        }
    });

    $.scrollIt({
        topOffset: -50,
    });

    $(".nav-toogle").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });
});

function nav() {
    const navToggler = document.querySelector(".js-nav-toggler");
    const nav = document.querySelector(".js-nav");
    const togglerNav = () => {
        navToggler.classList.toggle("active");
        nav.classList.toggle("open");
    };

    navToggler.addEventListener("click", togglerNav);
}
nav();