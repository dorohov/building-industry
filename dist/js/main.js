// (function($) {
//     "use strict"
//     $(function() {
        
//         $('.anchor-target').click(function() {
//             var anchorId = $(this).attr('data-anchorid')
//             $('html, body').animate({scrollTop: $(anchorId).offset().top}, 800)
//         });
//     })
// })(jQuery);
(function($) {
    "use strict"
    $(function() {
            
        $('#file').on('change', function(e) {
            console.log($(this).val().replace(/.*(\/|\\)/, ''))
            $('.is--file-label').html($(this).val().replace(/.*(\/|\\)/, ''))
        })
            
    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {

        $('.in-slide3').mousemove(function(e) {
            // var coords = {
            //     y: e.clientY / 30,
            //     x: e.clientX / 30
            // }

            // $('.in-slide3__inner__photo img').css({
            //     "margin-top": coords.y + "px",
            //     "margin-left": "-" + coords.x + "px"
            // })

            
        })
        
    })
})(jQuery);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuY2hvci5qcyIsImZvcm0uanMiLCJpbmRleF9tb3VzZS5qcyIsIm5hdmJhci5qcyIsInNjcm9sbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKGZ1bmN0aW9uKCQpIHtcclxuLy8gICAgIFwidXNlIHN0cmljdFwiXHJcbi8vICAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4vLyAgICAgICAgICQoJy5hbmNob3ItdGFyZ2V0JykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICAgICAgIHZhciBhbmNob3JJZCA9ICQodGhpcykuYXR0cignZGF0YS1hbmNob3JpZCcpXHJcbi8vICAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6ICQoYW5jaG9ySWQpLm9mZnNldCgpLnRvcH0sIDgwMClcclxuLy8gICAgICAgICB9KTtcclxuLy8gICAgIH0pXHJcbi8vIH0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAkKCcjZmlsZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCQodGhpcykudmFsKCkucmVwbGFjZSgvLiooXFwvfFxcXFwpLywgJycpKVxyXG4gICAgICAgICAgICAkKCcuaXMtLWZpbGUtbGFiZWwnKS5odG1sKCQodGhpcykudmFsKCkucmVwbGFjZSgvLiooXFwvfFxcXFwpLywgJycpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQoJy5pbi1zbGlkZTMnKS5tb3VzZW1vdmUoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAvLyB2YXIgY29vcmRzID0ge1xyXG4gICAgICAgICAgICAvLyAgICAgeTogZS5jbGllbnRZIC8gMzAsXHJcbiAgICAgICAgICAgIC8vICAgICB4OiBlLmNsaWVudFggLyAzMFxyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAvLyAkKCcuaW4tc2xpZGUzX19pbm5lcl9fcGhvdG8gaW1nJykuY3NzKHtcclxuICAgICAgICAgICAgLy8gICAgIFwibWFyZ2luLXRvcFwiOiBjb29yZHMueSArIFwicHhcIixcclxuICAgICAgICAgICAgLy8gICAgIFwibWFyZ2luLWxlZnRcIjogXCItXCIgKyBjb29yZHMueCArIFwicHhcIlxyXG4gICAgICAgICAgICAvLyB9KVxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgaXRlbXMgPSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbjogXCIubmF2YmFyX19tZW51X19idG4gYnV0dG9uXCIsXHJcbiAgICAgICAgICAgIG1lbnU6IFwiLm5hdmJhcl9fbWVudVwiLFxyXG4gICAgICAgICAgICBuYXZiYXI6IFwiLm5hdmJhclwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKGl0ZW1zLmJ1dHRvbikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnaXMtLW1lbnUtb3BlbicpXHJcbiAgICAgICAgICAgICQoaXRlbXMubWVudSkudG9nZ2xlQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICAgICAgJChpdGVtcy5idXR0b24pLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDBcclxuICAgICAgICAgICAgfSwgNSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgaXRlbXMgPSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXI6ICcuc2xpZGVzLWNvbnRhaW5lcicsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiAnLnNsaWRlJyxcclxuICAgICAgICAgICAgICAgIGRhcmtDbGFzczogJ2lzLS1uZGFyaydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZWxlbWVudHMgPSAkKGl0ZW1zLmNvbnRhaW5lcikuZmluZChpdGVtcy5lbGVtZW50KSxcclxuICAgICAgICAgICAgaWRzID0gW10sXHJcbiAgICAgICAgICAgIGN1cnJlbnQgPSAwLFxyXG4gICAgICAgICAgICBzY3JvbGwgPSB0cnVlLFxyXG4gICAgICAgICAgICBzY3JvbGwyID0gdHJ1ZSxcclxuICAgICAgICAgICAgYmFyXHJcblxyXG4gICAgICAgIGVsZW1lbnRzLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlkcy5wdXNoKCQodGhpcykuYXR0cignaWQnKSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuYW5jaG9yLXRhcmdldCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZihzY3JvbGwpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhbmNob3JJZCA9ICQodGhpcykuYXR0cignZGF0YS1hbmNob3JpZCcpXHJcblxyXG4gICAgICAgICAgICAgICAgaWYoYW5jaG9ySWQgPT0gJ25leHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsMiA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICQoJy5mb3JtJykub2Zmc2V0KCkudG9wXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGFuY2hvcklkXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICQoJyMnICsgaWRzW2FuY2hvcklkXSkub2Zmc2V0KCkudG9wXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSlcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cod2luZG93LmlubmVySGVpZ2h0KVxyXG5cclxuICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA8PSAxNTApIHtcclxuICAgICAgICAgICAgICAgICQoJ2hlYWRlcicpLmFkZENsYXNzKCdpcy0tYmcnKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCdoZWFkZXInKS5yZW1vdmVDbGFzcygnaXMtLWJnJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQod2luZG93KS5vbignbW91c2V3aGVlbCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgaWYoY3VycmVudCArIDEgPT0gaWRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsMiA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5oZWlnaHQoKSA+ICQoJyNpbi1zbDUnKS5vZmZzZXQoKS50b3AgJiYgXHJcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSAtICQoJyNpbi1zbDUnKS5vZmZzZXQoKS50b3AgPCAkKCcjaW4tc2w1JykuaGVpZ2h0KClcclxuICAgICAgICAgICAgICAgICkgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbDIgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHNjcm9sbCAmJiBzY3JvbGwyKSB7XHJcbiAgICAgICAgICAgICAgICBpZihlLmRlbHRhWSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihjdXJyZW50ICsgMSA9PSBpZHMubGVuZ3RoICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihlLmRlbHRhWSA+IDAgJiYgc2Nyb2xsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY3VycmVudCA9PSAwKSB7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQtLTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogJCgnIycgKyBpZHNbY3VycmVudF0pLm9mZnNldCgpLnRvcFxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBzY3JvbGwgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCQoJyMnICsgaWRzW2N1cnJlbnRdKS5oYXNDbGFzcyhpdGVtcy5kYXJrQ2xhc3MpKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcubmF2YmFyJykuYWRkQ2xhc3MoJ2lzLS1pZGFyaycpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5uYXZiYXInKS5yZW1vdmVDbGFzcygnaXMtLWlkYXJrJylcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ9Ci0LXQutGD0YnQuNC5INGB0LvQsNC50LTQtdGAJywgaWRzW2N1cnJlbnRdKVxyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7Il19
