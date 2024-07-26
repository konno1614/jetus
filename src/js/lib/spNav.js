import $ from "jquery";

$(function() {
    $(".js-toggle-nav").on("click", function () {
        $(this).toggleClass("is-open");
        $(".c-sp-nav").toggleClass("is-open");
        $("body").toggleClass("is-open");
    });
    $(".c-sp-nav a").on("click", function () {
        $(".js-toggle-nav").removeClass("is-open");
        $(".c-sp-nav").removeClass("is-open");
        $("body").removeClass("is-open");
    });
    // リサイズされたらリセット
    $(window).on("resize", function() {
        $(".js-toggle-nav").removeClass("is-open");
        $(".c-sp-nav").removeClass("is-open");
        $("body").removeClass("is-open");
    });
});
