(function($) {
    "use strict"
    $(function() {

        var items = {
            button: ".navbar__menu__btn button",
            menu: ".navbar__content__menu",
            navbar: ".navbar"
        }

        $(items.button).on('click', function() {
            $(items.navbar).toggleClass('is--open')
            console.log("debug")
        })

    })
})(jQuery);