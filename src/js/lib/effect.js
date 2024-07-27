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
            var ua = navigator.userAgent;
            if ((ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0) && ua.indexOf('Mobile') > 0) {
                const scrollTiming = 100;
                if (wScroll > bPosition - wHeight + scrollTiming) {
                    $(this).addClass("is-active");
                }
            } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
                const scrollTiming = 150;
                if (wScroll > bPosition - wHeight + scrollTiming) {
                    $(this).addClass("is-active");
                }
            } else {
                const scrollTiming = 200;
                if (wScroll > bPosition - wHeight + scrollTiming) {
                    $(this).addClass("is-active");
                }
            }
        });
    });

    // fadeup
    $('.js-fadeup span').delay(500).addClass('is-active');

    // fadeup title
    $(window).scroll(function () {
        $('.js-fadeup-title span').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
        if (scroll > position - windowHeight){
            $(this).addClass('is-active');
        }
        });
    });
});
