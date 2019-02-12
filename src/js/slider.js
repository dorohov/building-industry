(function($) {
    "use strict"
    $(function() {

        $('.products__slider__items').slick({
            slidesToShow: 3,
            prevArrow: '.products__slider__arrow.is--left',
            nextArrow: '.products__slider__arrow.is--right',
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        arrows: false
                    }
                }
            ]
        })
        
    })
})(jQuery);