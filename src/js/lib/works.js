import $ from "jquery";

$(function() {
    const worksSwiper = new Swiper('.works__swiper', {
        loop: true,
        spaceBetween: 16,
        slidesPerView: 1.5,
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            reverseDirection: false
        },
        speed: 1000,
        centeredSlides: true,
        navigation: {
            nextEl: '.works__swiper-button-next',
            prevEl: '.works__swiper-button-prev'
        },
        pagination: {
            el: '.works__swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            599: {
                slidesPerView: 3.5,
            },
        },
    });
});
