(function($) {
    "use strict"
    $(function() {
            
        $('.catalog__delivery__content').hide()
        
        $('.catalog__delivery__title').on('click', function() {
            $(this).closest('.catalog__delivery').toggleClass('is--open')
            $('.catalog__delivery__content').slideToggle();
        })
            
    })
})(jQuery);