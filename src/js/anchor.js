(function($) {
    "use strict"
    $(function() {
        
        $('.anchor-target').click(function() {
            var anchorId = $(this).attr('data-anchorid')
            if($(this).hasClass('is--slider') && !$(this).hasClass('is--snums')) {
                $.fn.fullpage.moveSectionDown();
            }else if ($(this).hasClass('is--slider') && $(this).hasClass('is--snums')) {
                $.fn.fullpage.moveTo(anchorId);
            }else if ($(this).hasClass('is--default')) {
                $('html, body').animate({scrollTop: $('.__anchor-block[data-anchorid="' + anchorId + '"]').offset().top}, 800)
            }
        });

    })
})(jQuery);