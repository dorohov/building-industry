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