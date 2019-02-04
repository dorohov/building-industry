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

    })
})(jQuery);