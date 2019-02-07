(function($) {
    "use strict"
    $(function() {

        $(document).ready(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 5)
        });
        
        var items = {
                container: '.slides-container',
                element: '.slide',
                darkClass: 'is--ndark'
            },
            elements = $(items.container).find(items.element),
            ids = [],
            current = 0,
            scroll = true,
            scroll2 = true,
            bar

        elements.each(function() {
            ids.push($(this).attr('id'))
        })

        $('.anchor-target').click(function() {
            if(scroll) {
                var anchorId = $(this).attr('data-anchorid')

                if(anchorId == 'next') {
                    scroll2 = false
                    $('html, body').animate({
                        scrollTop: $('.form').offset().top
                    }, 500, function() {
                        scroll = true
                    })
                }else {
                    current = anchorId
                    $('html, body').animate({
                        scrollTop: $('#' + ids[anchorId]).offset().top
                    }, 500, function() {
                        scroll = true
                    })
                }
            }
        });

        $(window).on('scroll', function(e) {
            // console.log(document.getElementById("form").getBoundingClientRect())
            // console.log(window.innerHeight)

            if(document.getElementById("form").getBoundingClientRect().top <= 150) {
                $('header').addClass('is--bg')
            }else {
                $('header').removeClass('is--bg')
            }
        })

        $(window).on('mousewheel', function(e) {
            if(current + 1 == ids.length) {
                scroll2 = false
            }else {
                e.preventDefault()
            }

            if (
                $(document).scrollTop() + $(window).height() > $('#in-sl5').offset().top && 
                $(document).scrollTop() - $('#in-sl5').offset().top < $('#in-sl5').height()
                ) 
            {
                scroll2 = true
            }

            if(scroll && scroll2) {
                if(e.deltaY < 0) {
                    if(current + 1 == ids.length ) {
                        
                    }else {
                        current++;
                    }
                }else if(e.deltaY > 0 && scroll) {
                    if(current == 0) {
    
                    }else {
                        current--;
                    }
                }
    
                    $('html, body').animate({
                        scrollTop: $('#' + ids[current]).offset().top
                    }, 500, function() {
                        scroll = true
                    })
    
                scroll = false
            }
            if($('#' + ids[current]).hasClass(items.darkClass)) {
                $('.navbar').addClass('is--idark')
            }else {
                $('.navbar').removeClass('is--idark')
            }

            // console.log('Текущий слайдер', ids[current])

        });
        
    })
})(jQuery);