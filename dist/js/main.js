(function($) {
    "use strict"
    $(function() {
        
        $('.anchor-target').click(function() {
            var anchorId = $(this).attr('data-anchorid')
            $('html, body').animate({scrollTop: $(anchorId).offset().top}, 800)
        });
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
// (function($) {
//     "use strict"
//     $(function() {
        
//         var items = {
//                 container: '.slides-container',
//                 element: '.slide',
//                 darkClass: 'is--ndark'
//             },
//             elements = $(items.container).find(items.element),
//             ids = [],
//             current = 0,
//             scroll = true,
//             scroll2 = true

//         elements.each(function() {
//             ids.push($(this).attr('id'))
//         })

//         $(window).on('mousewheel', function(e) {

//             if(current + 1 == ids.length) {
//                 scroll2 = false
//             }else {
//                 e.preventDefault()
//             }

//             if (
//                 $(document).scrollTop() + $(window).height() > $('#in-sl5').offset().top && 
//                 $(document).scrollTop() - $('#in-sl5').offset().top < $('#in-sl5').height()
//                 ) 
//             {
//                 scroll2 = true
//             }

//             if(scroll && scroll2) {
//                 if(e.deltaY < 0) {
//                     if(current + 1 == ids.length ) {
                        
//                     }else {
//                         current++;
//                     }
//                 }else if(e.deltaY > 0 && scroll) {
//                     if(current == 0) {
    
//                     }else {
//                         current--;
//                     }
//                 }
    
//                     $('html, body').animate({
//                         scrollTop: $($('#' + ids[current])).offset().top
//                     }, 500, function() {
//                         scroll = true
//                     })
    
//                 scroll = false
//             }

//             console.log($('#' + ids[current]))
//             if($('#' + ids[current]).hasClass(items.darkClass)) {
//                 $('.navbar').addClass('is--idark')
//                 console.log('dasd')
//             }else {
//                 $('.navbar').removeClass('is--idark')
//             }

//         });
        
//     })
// })(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuY2hvci5qcyIsIm5hdmJhci5qcyIsInNjcm9sbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJCgnLmFuY2hvci10YXJnZXQnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGFuY2hvcklkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWFuY2hvcmlkJylcclxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogJChhbmNob3JJZCkub2Zmc2V0KCkudG9wfSwgODAwKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBpdGVtcyA9IHtcclxuICAgICAgICAgICAgYnV0dG9uOiBcIi5uYXZiYXJfX21lbnVfX2J0biBidXR0b25cIixcclxuICAgICAgICAgICAgbWVudTogXCIubmF2YmFyX19tZW51XCIsXHJcbiAgICAgICAgICAgIG5hdmJhcjogXCIubmF2YmFyXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoaXRlbXMuYnV0dG9uKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdpcy0tbWVudS1vcGVuJylcclxuICAgICAgICAgICAgJChpdGVtcy5tZW51KS50b2dnbGVDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgICAgICAkKGl0ZW1zLmJ1dHRvbikudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIi8vIChmdW5jdGlvbigkKSB7XHJcbi8vICAgICBcInVzZSBzdHJpY3RcIlxyXG4vLyAgICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICBcclxuLy8gICAgICAgICB2YXIgaXRlbXMgPSB7XHJcbi8vICAgICAgICAgICAgICAgICBjb250YWluZXI6ICcuc2xpZGVzLWNvbnRhaW5lcicsXHJcbi8vICAgICAgICAgICAgICAgICBlbGVtZW50OiAnLnNsaWRlJyxcclxuLy8gICAgICAgICAgICAgICAgIGRhcmtDbGFzczogJ2lzLS1uZGFyaydcclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgZWxlbWVudHMgPSAkKGl0ZW1zLmNvbnRhaW5lcikuZmluZChpdGVtcy5lbGVtZW50KSxcclxuLy8gICAgICAgICAgICAgaWRzID0gW10sXHJcbi8vICAgICAgICAgICAgIGN1cnJlbnQgPSAwLFxyXG4vLyAgICAgICAgICAgICBzY3JvbGwgPSB0cnVlLFxyXG4vLyAgICAgICAgICAgICBzY3JvbGwyID0gdHJ1ZVxyXG5cclxuLy8gICAgICAgICBlbGVtZW50cy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICAgICAgICBpZHMucHVzaCgkKHRoaXMpLmF0dHIoJ2lkJykpXHJcbi8vICAgICAgICAgfSlcclxuXHJcbi8vICAgICAgICAgJCh3aW5kb3cpLm9uKCdtb3VzZXdoZWVsJywgZnVuY3Rpb24oZSkge1xyXG5cclxuLy8gICAgICAgICAgICAgaWYoY3VycmVudCArIDEgPT0gaWRzLmxlbmd0aCkge1xyXG4vLyAgICAgICAgICAgICAgICAgc2Nyb2xsMiA9IGZhbHNlXHJcbi8vICAgICAgICAgICAgIH1lbHNlIHtcclxuLy8gICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4vLyAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICBpZiAoXHJcbi8vICAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5oZWlnaHQoKSA+ICQoJyNpbi1zbDUnKS5vZmZzZXQoKS50b3AgJiYgXHJcbi8vICAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSAtICQoJyNpbi1zbDUnKS5vZmZzZXQoKS50b3AgPCAkKCcjaW4tc2w1JykuaGVpZ2h0KClcclxuLy8gICAgICAgICAgICAgICAgICkgXHJcbi8vICAgICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgICAgIHNjcm9sbDIgPSB0cnVlXHJcbi8vICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgIGlmKHNjcm9sbCAmJiBzY3JvbGwyKSB7XHJcbi8vICAgICAgICAgICAgICAgICBpZihlLmRlbHRhWSA8IDApIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBpZihjdXJyZW50ICsgMSA9PSBpZHMubGVuZ3RoICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQrKztcclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICB9ZWxzZSBpZihlLmRlbHRhWSA+IDAgJiYgc2Nyb2xsKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaWYoY3VycmVudCA9PSAwKSB7XHJcbiAgICBcclxuLy8gICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQtLTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuLy8gICAgICAgICAgICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogJCgkKCcjJyArIGlkc1tjdXJyZW50XSkpLm9mZnNldCgpLnRvcFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIH0sIDUwMCwgZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbCA9IHRydWVcclxuLy8gICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgXHJcbi8vICAgICAgICAgICAgICAgICBzY3JvbGwgPSBmYWxzZVxyXG4vLyAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZygkKCcjJyArIGlkc1tjdXJyZW50XSkpXHJcbi8vICAgICAgICAgICAgIGlmKCQoJyMnICsgaWRzW2N1cnJlbnRdKS5oYXNDbGFzcyhpdGVtcy5kYXJrQ2xhc3MpKSB7XHJcbi8vICAgICAgICAgICAgICAgICAkKCcubmF2YmFyJykuYWRkQ2xhc3MoJ2lzLS1pZGFyaycpXHJcbi8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGFzZCcpXHJcbi8vICAgICAgICAgICAgIH1lbHNlIHtcclxuLy8gICAgICAgICAgICAgICAgICQoJy5uYXZiYXInKS5yZW1vdmVDbGFzcygnaXMtLWlkYXJrJylcclxuLy8gICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICB9KTtcclxuICAgICAgICBcclxuLy8gICAgIH0pXHJcbi8vIH0pKGpRdWVyeSk7Il19
