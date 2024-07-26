import $ from "jquery";

$(function() {
    const mvSwiper = new Swiper('.mv__swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            reverseDirection: false
        },
        effect: 'fade',
        speed: 1500,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        allowTouchMove: false
    });
});
