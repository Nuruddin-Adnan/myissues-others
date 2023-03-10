"use strict";

$(document).ready(function () {
    // post-details-slider
    const $slideStatus = $('.custom-pagination');
    const $slickElement = $('.post-details-slider');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        let i = (currentSlide ? currentSlide : 0) + 1;
        $slideStatus.text(i + '/' + slick.slideCount);
    });

    $slickElement.slick({
        dots: false,
        prevArrow: '<button type="button" class="btn button-prev border-start"><i class="fal fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="btn button-next border-start"><i class="fal fa-angle-right"></i></button>',
    });

    $('.modal').on('shown.bs.modal', function (e) {
        $('.post-details-slider').slick('setPosition');
    })
})