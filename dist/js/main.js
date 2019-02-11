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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuY2hvci5qcyIsImZvcm0uanMiLCJpbmRleF9tb3VzZS5qcyIsIm5hdmJhci5qcyIsInNjcm9sbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIChmdW5jdGlvbigkKSB7XHJcbi8vICAgICBcInVzZSBzdHJpY3RcIlxyXG4vLyAgICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICBcclxuLy8gICAgICAgICAkKCcuYW5jaG9yLXRhcmdldCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICAgICAgICB2YXIgYW5jaG9ySWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtYW5jaG9yaWQnKVxyXG4vLyAgICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkKGFuY2hvcklkKS5vZmZzZXQoKS50b3B9LCA4MDApXHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICB9KVxyXG4vLyB9KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgJCgnI2ZpbGUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygkKHRoaXMpLnZhbCgpLnJlcGxhY2UoLy4qKFxcL3xcXFxcKS8sICcnKSlcclxuICAgICAgICAgICAgJCgnLmlzLS1maWxlLWxhYmVsJykuaHRtbCgkKHRoaXMpLnZhbCgpLnJlcGxhY2UoLy4qKFxcL3xcXFxcKS8sICcnKSlcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAkKCcuaW4tc2xpZGUzJykubW91c2Vtb3ZlKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgLy8gdmFyIGNvb3JkcyA9IHtcclxuICAgICAgICAgICAgLy8gICAgIHk6IGUuY2xpZW50WSAvIDMwLFxyXG4gICAgICAgICAgICAvLyAgICAgeDogZS5jbGllbnRYIC8gMzBcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgLy8gJCgnLmluLXNsaWRlM19faW5uZXJfX3Bob3RvIGltZycpLmNzcyh7XHJcbiAgICAgICAgICAgIC8vICAgICBcIm1hcmdpbi10b3BcIjogY29vcmRzLnkgKyBcInB4XCIsXHJcbiAgICAgICAgICAgIC8vICAgICBcIm1hcmdpbi1sZWZ0XCI6IFwiLVwiICsgY29vcmRzLnggKyBcInB4XCJcclxuICAgICAgICAgICAgLy8gfSlcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIGl0ZW1zID0ge1xyXG4gICAgICAgICAgICBidXR0b246IFwiLm5hdmJhcl9fbWVudV9fYnRuIGJ1dHRvblwiLFxyXG4gICAgICAgICAgICBtZW51OiBcIi5uYXZiYXJfX21lbnVcIixcclxuICAgICAgICAgICAgbmF2YmFyOiBcIi5uYXZiYXJcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJChpdGVtcy5idXR0b24pLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ2lzLS1tZW51LW9wZW4nKVxyXG4gICAgICAgICAgICAkKGl0ZW1zLm1lbnUpLnRvZ2dsZUNsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgICAgICQoaXRlbXMuYnV0dG9uKS50b2dnbGVDbGFzcygnaXMtYWN0aXZlJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBzZXRCZ0Zvck5hdmJhcigpXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHNldEJnRm9yTmF2YmFyKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXRCZ0Zvck5hdmJhcigpIHtcclxuICAgICAgICAgICAgaWYod2luZG93LnBhZ2VZT2Zmc2V0ID49IDE1MCkge1xyXG4gICAgICAgICAgICAgICAgJCgnaGVhZGVyJykuYWRkQ2xhc3MoJ2lzLS1iZycpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJ2hlYWRlcicpLnJlbW92ZUNsYXNzKCdpcy0tYmcnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXHJcbiAgICAgICAgICAgIH0sIDUpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGl0ZW1zID0ge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiAnLnNsaWRlcy1jb250YWluZXInLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogJy5zbGlkZScsXHJcbiAgICAgICAgICAgICAgICBkYXJrQ2xhc3M6ICdpcy0tbmRhcmsnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVsZW1lbnRzID0gJChpdGVtcy5jb250YWluZXIpLmZpbmQoaXRlbXMuZWxlbWVudCksXHJcbiAgICAgICAgICAgIGlkcyA9IFtdLFxyXG4gICAgICAgICAgICBjdXJyZW50ID0gMCxcclxuICAgICAgICAgICAgc2Nyb2xsID0gdHJ1ZSxcclxuICAgICAgICAgICAgc2Nyb2xsMiA9IHRydWUsXHJcbiAgICAgICAgICAgIGJhclxyXG5cclxuICAgICAgICBlbGVtZW50cy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZHMucHVzaCgkKHRoaXMpLmF0dHIoJ2lkJykpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmFuY2hvci10YXJnZXQnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYoc2Nyb2xsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYW5jaG9ySWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtYW5jaG9yaWQnKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKGFuY2hvcklkID09ICduZXh0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbDIgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKCcuZm9ybScpLm9mZnNldCgpLnRvcFxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBhbmNob3JJZFxyXG4gICAgICAgICAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKCcjJyArIGlkc1thbmNob3JJZF0pLm9mZnNldCgpLnRvcFxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIikuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHdpbmRvdy5pbm5lckhlaWdodClcclxuICAgICAgICAgICAgaWYoJCgnYm9keScpLmhhc0NsYXNzKCdfX25zY3JvbGwnKSkge1xyXG4gICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA8PSAxNTApIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCdoZWFkZXInKS5hZGRDbGFzcygnaXMtLWJnJylcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCdoZWFkZXInKS5yZW1vdmVDbGFzcygnaXMtLWJnJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoJCgnIycgKyBpZHNbY3VycmVudF0pLmhhc0NsYXNzKGl0ZW1zLmRhcmtDbGFzcykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubmF2YmFyJykuYWRkQ2xhc3MoJ2lzLS1pZGFyaycpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm5hdmJhcicpLnJlbW92ZUNsYXNzKCdpcy0taWRhcmsnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudCArIDEgPT0gaWRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbDIgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXNkJylcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpICsgJCh3aW5kb3cpLmhlaWdodCgpID4gJCgnI2luLXNsNScpLm9mZnNldCgpLnRvcCAmJiBcclxuICAgICAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSAtICQoJyNpbi1zbDUnKS5vZmZzZXQoKS50b3AgPCAkKCcjaW4tc2w1JykuaGVpZ2h0KClcclxuICAgICAgICAgICAgICAgICAgICApIFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbDIgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdtb3VzZXdoZWVsJywgZnVuY3Rpb24oZSwgZGVsdGEpIHtcclxuXHJcbiAgICAgICAgICAgIGlmKHNjcm9sbCAmJiBzY3JvbGwyICYmICQoJ2JvZHknKS5oYXNDbGFzcygnX19uc2Nyb2xsJykpIHtcclxuICAgICAgICAgICAgICAgIGlmKGUuZGVsdGFZIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGN1cnJlbnQgKyAxID09IGlkcy5sZW5ndGggKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGUuZGVsdGFZID4gMCAmJiBzY3JvbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihjdXJyZW50ID09IDApIHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKCcjJyArIGlkc1tjdXJyZW50XSkub2Zmc2V0KCkudG9wXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICBcclxuICAgICAgICAgICAgICAgIHNjcm9sbCA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGN1cnJlbnQgKyAxID09IGlkcy5sZW5ndGggJiYgJCgnYm9keScpLmhhc0NsYXNzKCdfX25zY3JvbGwnKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnNjcm9sbFRvcChzY3JvbGxUb3AtTWF0aC5yb3VuZChkZWx0YSAqIDEwMCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn0KLQtdC60YPRidC40Lkg0YHQu9Cw0LnQtNC10YAnLCBpZHNbY3VycmVudF0pXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiXX0=
