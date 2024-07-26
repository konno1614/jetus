import $ from "jquery";

$(function() {
    // header
    const scrollY = $(window).height();
    if ($(window).scrollTop() > scrollY) {
        $(".js-header").addClass("is-active");
    } else {
        $(".js-header").removeClass("is-active");
    }
    $(window).on("scroll", function() {
        const scrollY = $(window).height();
        if ($(window).scrollTop() > scrollY) {
            $(".js-header").addClass("is-active");
        } else {
            $(".js-header").removeClass("is-active");
        }
    });

});
