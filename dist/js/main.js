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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5qcyIsInNjcm9sbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIGl0ZW1zID0ge1xyXG4gICAgICAgICAgICBidXR0b246IFwiLm5hdmJhcl9fbWVudV9fYnRuIGJ1dHRvblwiLFxyXG4gICAgICAgICAgICBtZW51OiBcIi5uYXZiYXJfX2NvbnRlbnRfX21lbnVcIixcclxuICAgICAgICAgICAgbmF2YmFyOiBcIi5uYXZiYXJcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJChpdGVtcy5idXR0b24pLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKGl0ZW1zLm5hdmJhcikudG9nZ2xlQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkZWJ1Z1wiKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIvLyAoZnVuY3Rpb24oJCkge1xyXG4vLyAgICAgXCJ1c2Ugc3RyaWN0XCJcclxuLy8gICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4vLyAgICAgICAgIHZhciBhY2Nlc3MgPSB0cnVlLFxyXG4vLyAgICAgICAgICAgICBzbGlkZXMgPSBbXSxcclxuLy8gICAgICAgICAgICAgbmFtZSA9ICcucHJlc3Njcm9sbCcsXHJcbi8vICAgICAgICAgICAgIGN1cnJlbnQsXHJcbi8vICAgICAgICAgICAgIGxlbmd0aDtcclxuXHJcbi8vICAgICAgICAgJChuYW1lKS5maW5kKCcuYW5jaHNsaWRlJykuZWFjaChmdW5jdGlvbigpIHtcclxuLy8gICAgICAgICAgICAgc2xpZGVzLnB1c2goJyMnICsgdGhpcy5pZClcclxuLy8gICAgICAgICB9KVxyXG5cclxuLy8gICAgICAgICBpZihzbGlkZXMpIHtcclxuLy8gICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuLy8gICAgICAgICAgICAgICAgIGlmIChzbGlkZXNbaV0gPT0gZG9jdW1lbnQubG9jYXRpb24uaGFzaCkgY3VycmVudCA9IGk7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgbGVuZ3RoID0gc2xpZGVzLmxlbmd0aCAtIDE7ICAgICAgICAgIFxyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgJChuYW1lKS5vbignbW91c2V3aGVlbCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbi8vICAgICAgICAgICAgIGlmKGFjY2Vzcykge1xyXG4vLyAgICAgICAgICAgICAgICAgYWNjZXNzID0gZmFsc2U7XHJcbi8vICAgICAgICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKHNsaWRlc1tzbGlkZXMubGVuZ3RoICsgMV0pLm9mZnNldCgpLnRvcFxyXG4vLyAgICAgICAgICAgICAgICAgfSwgNTAwLCBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBhY2Nlc3MgPSB0cnVlXHJcbi8vICAgICAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIC8vIGV2ZW50LmRlbHRhWVxyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgfSlcclxuLy8gfSkoalF1ZXJ5KTsiXX0=
