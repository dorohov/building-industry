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

//         var access = true,
//             slides = [],
//             name = '.presscroll',
//             current,
//             length;

//         $(name).find('.anchslide').each(function() {
//             slides.push('#' + this.id)
//         })

//         if(slides) {
//             for (var i = 0; i < slides.length; i++) {
//                 if (slides[i] == document.location.hash) current = i;
//             }
//             length = slides.length - 1;          
//         }

//         $(name).on('mousewheel', function(event) {
//             if(access) {
//                 access = false;
//                 $('html, body').animate({
//                     scrollTop: $(slides[slides.length + 1]).offset().top
//                 }, 500, function() {
//                     access = true
//                 })
//                 event.preventDefault()
//             }
//             // event.deltaY
//         });
//     })
// })(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuY2hvci5qcyIsIm5hdmJhci5qcyIsInNjcm9sbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJCgnLmFuY2hvci10YXJnZXQnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGFuY2hvcklkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWFuY2hvcmlkJylcclxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogJChhbmNob3JJZCkub2Zmc2V0KCkudG9wfSwgODAwKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBpdGVtcyA9IHtcclxuICAgICAgICAgICAgYnV0dG9uOiBcIi5uYXZiYXJfX21lbnVfX2J0biBidXR0b25cIixcclxuICAgICAgICAgICAgbWVudTogXCIubmF2YmFyX19tZW51XCIsXHJcbiAgICAgICAgICAgIG5hdmJhcjogXCIubmF2YmFyXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoaXRlbXMuYnV0dG9uKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdpcy0tbWVudS1vcGVuJylcclxuICAgICAgICAgICAgJChpdGVtcy5tZW51KS50b2dnbGVDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgICAgICAkKGl0ZW1zLmJ1dHRvbikudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIi8vIChmdW5jdGlvbigkKSB7XHJcbi8vICAgICBcInVzZSBzdHJpY3RcIlxyXG4vLyAgICAgJChmdW5jdGlvbigpIHtcclxuXHJcbi8vICAgICAgICAgdmFyIGFjY2VzcyA9IHRydWUsXHJcbi8vICAgICAgICAgICAgIHNsaWRlcyA9IFtdLFxyXG4vLyAgICAgICAgICAgICBuYW1lID0gJy5wcmVzc2Nyb2xsJyxcclxuLy8gICAgICAgICAgICAgY3VycmVudCxcclxuLy8gICAgICAgICAgICAgbGVuZ3RoO1xyXG5cclxuLy8gICAgICAgICAkKG5hbWUpLmZpbmQoJy5hbmNoc2xpZGUnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICAgICAgICBzbGlkZXMucHVzaCgnIycgKyB0aGlzLmlkKVxyXG4vLyAgICAgICAgIH0pXHJcblxyXG4vLyAgICAgICAgIGlmKHNsaWRlcykge1xyXG4vLyAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgICAgICAgICAgICAgaWYgKHNsaWRlc1tpXSA9PSBkb2N1bWVudC5sb2NhdGlvbi5oYXNoKSBjdXJyZW50ID0gaTtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICBsZW5ndGggPSBzbGlkZXMubGVuZ3RoIC0gMTsgICAgICAgICAgXHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAkKG5hbWUpLm9uKCdtb3VzZXdoZWVsJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuLy8gICAgICAgICAgICAgaWYoYWNjZXNzKSB7XHJcbi8vICAgICAgICAgICAgICAgICBhY2Nlc3MgPSBmYWxzZTtcclxuLy8gICAgICAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICQoc2xpZGVzW3NsaWRlcy5sZW5ndGggKyAxXSkub2Zmc2V0KCkudG9wXHJcbi8vICAgICAgICAgICAgICAgICB9LCA1MDAsIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGFjY2VzcyA9IHRydWVcclxuLy8gICAgICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgLy8gZXZlbnQuZGVsdGFZXHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICB9KVxyXG4vLyB9KShqUXVlcnkpOyJdfQ==
