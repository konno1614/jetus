import $ from "jquery";

$(function() {
    const worksSwiper = new Swiper('.works__swiper', {
        loop: true,
        spaceBetween: 16,
        slidesPerView: 1.5,
        autoplay: {
            delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            reverseDirection: false
        },
        speed: 500,
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

    worksSwiper.autoplay.stop();

    $(window).scroll(function() {
        let position = $('.works__swiper').offset().top - $(window).innerHeight() + 150,
            scrollTop = $(window).scrollTop();
        if(scrollTop > position) {
            worksSwiper.autoplay.start();
        }else{
            worksSwiper.autoplay.stop();
        }
    });
});
