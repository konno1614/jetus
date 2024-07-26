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

    // fadein
    $(window).scroll(function() {
        const wHeight = $(window).height();
        const wScroll = $(window).scrollTop();
            $(".js-fadein").each(function () {
                const bPosition = $(this).offset().top;
            if (wScroll > bPosition - wHeight + 200) {
                $(this).addClass("is-active");
            }
        });
    });

    // fadeup
    $('.js-fadeup span').delay(500).addClass('is-active');
});
