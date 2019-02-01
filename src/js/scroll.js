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