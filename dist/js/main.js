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

        setBgForNavbar()

        $(document).on('scroll', function(e) {
            setBgForNavbar()
        })

        function setBgForNavbar() {
            if(window.pageYOffset >= 150) {
                $('header').addClass('is--bg')
            }else {
                $('header').removeClass('is--bg')
            }
        }

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
            if($('body').hasClass('__nscroll')) {
                if(document.getElementById("form").getBoundingClientRect().top <= 150) {
                    $('header').addClass('is--bg')
                }else {
                    $('header').removeClass('is--bg')
                }
    
                if($('#' + ids[current]).hasClass(items.darkClass)) {
                    $('.navbar').addClass('is--idark')
                }else {
                    $('.navbar').removeClass('is--idark')
                }
                if(current + 1 == ids.length) {
                    scroll2 = false
                    console.log('dasd')
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
            }

        })

        $(window).on('mousewheel', function(e, delta) {

            if(scroll && scroll2 && $('body').hasClass('__nscroll')) {
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

            if(current + 1 == ids.length && $('body').hasClass('__nscroll')) {
                var scrollTop = $(this).scrollTop();
                $(this).scrollTop(scrollTop-Math.round(delta * 100));
            }

            // console.log('Текущий слайдер', ids[current])

        });
        
    })
})(jQuery);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuY2hvci5qcyIsImZvcm0uanMiLCJpbmRleF9tb3VzZS5qcyIsIm5hdmJhci5qcyIsInNjcm9sbC5qcyIsInNsaWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNySEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKGZ1bmN0aW9uKCQpIHtcclxuLy8gICAgIFwidXNlIHN0cmljdFwiXHJcbi8vICAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4vLyAgICAgICAgICQoJy5hbmNob3ItdGFyZ2V0JykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICAgICAgIHZhciBhbmNob3JJZCA9ICQodGhpcykuYXR0cignZGF0YS1hbmNob3JpZCcpXHJcbi8vICAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6ICQoYW5jaG9ySWQpLm9mZnNldCgpLnRvcH0sIDgwMClcclxuLy8gICAgICAgICB9KTtcclxuLy8gICAgIH0pXHJcbi8vIH0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAkKCcjZmlsZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCQodGhpcykudmFsKCkucmVwbGFjZSgvLiooXFwvfFxcXFwpLywgJycpKVxyXG4gICAgICAgICAgICAkKCcuaXMtLWZpbGUtbGFiZWwnKS5odG1sKCQodGhpcykudmFsKCkucmVwbGFjZSgvLiooXFwvfFxcXFwpLywgJycpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQoJy5pbi1zbGlkZTMnKS5tb3VzZW1vdmUoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAvLyB2YXIgY29vcmRzID0ge1xyXG4gICAgICAgICAgICAvLyAgICAgeTogZS5jbGllbnRZIC8gMzAsXHJcbiAgICAgICAgICAgIC8vICAgICB4OiBlLmNsaWVudFggLyAzMFxyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAvLyAkKCcuaW4tc2xpZGUzX19pbm5lcl9fcGhvdG8gaW1nJykuY3NzKHtcclxuICAgICAgICAgICAgLy8gICAgIFwibWFyZ2luLXRvcFwiOiBjb29yZHMueSArIFwicHhcIixcclxuICAgICAgICAgICAgLy8gICAgIFwibWFyZ2luLWxlZnRcIjogXCItXCIgKyBjb29yZHMueCArIFwicHhcIlxyXG4gICAgICAgICAgICAvLyB9KVxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgaXRlbXMgPSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbjogXCIubmF2YmFyX19tZW51X19idG4gYnV0dG9uXCIsXHJcbiAgICAgICAgICAgIG1lbnU6IFwiLm5hdmJhcl9fbWVudVwiLFxyXG4gICAgICAgICAgICBuYXZiYXI6IFwiLm5hdmJhclwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKGl0ZW1zLmJ1dHRvbikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnaXMtLW1lbnUtb3BlbicpXHJcbiAgICAgICAgICAgICQoaXRlbXMubWVudSkudG9nZ2xlQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICAgICAgJChpdGVtcy5idXR0b24pLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHNldEJnRm9yTmF2YmFyKClcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgc2V0QmdGb3JOYXZiYXIoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldEJnRm9yTmF2YmFyKCkge1xyXG4gICAgICAgICAgICBpZih3aW5kb3cucGFnZVlPZmZzZXQgPj0gMTUwKSB7XHJcbiAgICAgICAgICAgICAgICAkKCdoZWFkZXInKS5hZGRDbGFzcygnaXMtLWJnJylcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2lzLS1iZycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDBcclxuICAgICAgICAgICAgfSwgNSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgaXRlbXMgPSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXI6ICcuc2xpZGVzLWNvbnRhaW5lcicsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiAnLnNsaWRlJyxcclxuICAgICAgICAgICAgICAgIGRhcmtDbGFzczogJ2lzLS1uZGFyaydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZWxlbWVudHMgPSAkKGl0ZW1zLmNvbnRhaW5lcikuZmluZChpdGVtcy5lbGVtZW50KSxcclxuICAgICAgICAgICAgaWRzID0gW10sXHJcbiAgICAgICAgICAgIGN1cnJlbnQgPSAwLFxyXG4gICAgICAgICAgICBzY3JvbGwgPSB0cnVlLFxyXG4gICAgICAgICAgICBzY3JvbGwyID0gdHJ1ZSxcclxuICAgICAgICAgICAgYmFyXHJcblxyXG4gICAgICAgIGVsZW1lbnRzLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlkcy5wdXNoKCQodGhpcykuYXR0cignaWQnKSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuYW5jaG9yLXRhcmdldCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZihzY3JvbGwpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhbmNob3JJZCA9ICQodGhpcykuYXR0cignZGF0YS1hbmNob3JpZCcpXHJcblxyXG4gICAgICAgICAgICAgICAgaWYoYW5jaG9ySWQgPT0gJ25leHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsMiA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICQoJy5mb3JtJykub2Zmc2V0KCkudG9wXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGFuY2hvcklkXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICQoJyMnICsgaWRzW2FuY2hvcklkXSkub2Zmc2V0KCkudG9wXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSlcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cod2luZG93LmlubmVySGVpZ2h0KVxyXG4gICAgICAgICAgICBpZigkKCdib2R5JykuaGFzQ2xhc3MoJ19fbnNjcm9sbCcpKSB7XHJcbiAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIikuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDw9IDE1MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ2hlYWRlcicpLmFkZENsYXNzKCdpcy0tYmcnKVxyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ2hlYWRlcicpLnJlbW92ZUNsYXNzKCdpcy0tYmcnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBpZigkKCcjJyArIGlkc1tjdXJyZW50XSkuaGFzQ2xhc3MoaXRlbXMuZGFya0NsYXNzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5uYXZiYXInKS5hZGRDbGFzcygnaXMtLWlkYXJrJylcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubmF2YmFyJykucmVtb3ZlQ2xhc3MoJ2lzLS1pZGFyaycpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihjdXJyZW50ICsgMSA9PSBpZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsMiA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Rhc2QnKVxyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgKyAkKHdpbmRvdykuaGVpZ2h0KCkgPiAkKCcjaW4tc2w1Jykub2Zmc2V0KCkudG9wICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpIC0gJCgnI2luLXNsNScpLm9mZnNldCgpLnRvcCA8ICQoJyNpbi1zbDUnKS5oZWlnaHQoKVxyXG4gICAgICAgICAgICAgICAgICAgICkgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsMiA9IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKHdpbmRvdykub24oJ21vdXNld2hlZWwnLCBmdW5jdGlvbihlLCBkZWx0YSkge1xyXG5cclxuICAgICAgICAgICAgaWYoc2Nyb2xsICYmIHNjcm9sbDIgJiYgJCgnYm9keScpLmhhc0NsYXNzKCdfX25zY3JvbGwnKSkge1xyXG4gICAgICAgICAgICAgICAgaWYoZS5kZWx0YVkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY3VycmVudCArIDEgPT0gaWRzLmxlbmd0aCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoZS5kZWx0YVkgPiAwICYmIHNjcm9sbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGN1cnJlbnQgPT0gMCkge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50LS07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICQoJyMnICsgaWRzW2N1cnJlbnRdKS5vZmZzZXQoKS50b3BcclxuICAgICAgICAgICAgICAgICAgICB9LCA1MDAsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGwgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoY3VycmVudCArIDEgPT0gaWRzLmxlbmd0aCAmJiAkKCdib2R5JykuaGFzQ2xhc3MoJ19fbnNjcm9sbCcpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuc2Nyb2xsVG9wKHNjcm9sbFRvcC1NYXRoLnJvdW5kKGRlbHRhICogMTAwKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfQotC10LrRg9GJ0LjQuSDRgdC70LDQudC00LXRgCcsIGlkc1tjdXJyZW50XSlcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgJCgnLnByb2R1Y3RzX19zbGlkZXJfX2l0ZW1zJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgIHByZXZBcnJvdzogJy5wcm9kdWN0c19fc2xpZGVyX19hcnJvdy5pcy0tbGVmdCcsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogJy5wcm9kdWN0c19fc2xpZGVyX19hcnJvdy5pcy0tcmlnaHQnLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7Il19
