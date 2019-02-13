(function($) {
    "use strict"
    $(function() {

        var items = {
            button: ".navbar__menu__btn button",
            menu: ".navbar__menu",
            navbar: ".navbar"
        }

        $(items.button).on('click', function() {
            $('body').toggleClass('is--menu-open')
            $(items.menu).toggleClass('is--open')
            $(items.button).toggleClass('is-active')
        })

        setBgForNavbar()

        $(document).on('scroll', function(e) {
            setBgForNavbar()
        })

        function setBgForNavbar() {
            if(window.pageYOffset >= 150) {
                $('header').addClass('is--bg')
            }else {
                if(!$('header').hasClass('is--norev')) {
                    $('header').removeClass('is--bg')
                }
            }
        }

    })
})(jQuery);