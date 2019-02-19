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
            
        $('.catalog__delivery__content').hide()
        
        $('.catalog__delivery__title').on('click', function() {
            $(this).closest('.catalog__delivery').toggleClass('is--open')
            $('.catalog__delivery__content').slideToggle();
        })
            
    })
})(jQuery);
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
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(52.917786, 36.005085),
        zoom: 17,
        disableDefaultUI: true,
        styles: [
            {
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "gamma": 0.54
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "stylers": [
                    {
                        "color": "#4d4946"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "gamma": 0.48
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "gamma": 7.18
                    }
                ]
            }
        ]
    });
    var icon = 'http://frontend.dorohovdesign.ru/b_ind/img/marker.png';

    new google.maps.Marker({
            position: new google.maps.LatLng(52.917585, 36.007681),
            icon: icon,
            map: map
    });
    new google.maps.Marker({
            position: new google.maps.LatLng(52.888883, 36.169227),
            icon: icon,
            map: map
    });
}
(function($) {
    "use strict"
    $(function() {

        var items = {
            navbar: '.navbar',
            button: '#open-menu',
            menu: '.navbar__menu',
            btnContainer: ".navbar__btnmenu"
        },
        is_open = false,
        animate = true,
        menu = document.querySelectorAll('.navbar__menu ul li a')

        var fullpage_api = $('.slides-container').fullpage({
            css3: true,
            scrollingSpeed: 1000,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            scrollBar: false,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            continuousHorizontal: false,
            scrollHorizontally: false,
            interlockedSlides: false,
            offsetSections: false,
            normalScrollElements: '.scrollable',
            scrollOverflow: true,
            scrollOverflowReset: false,
            touchSensitivity: 23,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,
            slideSelector: '.slide1312',
            onLeave: function(origin, destination, direction){
                fixedMenuControllerForSlider(destination)
            },
            afterLoad: function(origin, destination, direction){
                fixedMenuControllerForSlider(destination)
            },
        });

        document.addEventListener('scroll', function (e) {
            fixedMenuController()
        }, true);

        fixedMenuController()

        $(items.button).on('click', function(e) {
            e.preventDefault()
            if(!$(items.navbar).hasClass('is--fixed')) {
                if(!is_open && animate) {
                    openMenu()
                }else if(is_open && animate) {
                    hideMenu()
                }
                animate = false
            }else {
                if(!is_open && animate) {
                    openFixedMenu()
                }else if(is_open && animate) {
                    hideFixedMenu()
                }
            }
        })

        function openMenu() {
            console.log('openMenu function trigger')
            $(items.button).addClass('is-active')
            TweenMax.set(items.menu, {
                right: "-100%",
                visibility: "visible"
            })
            TweenMax.to(items.btnContainer, .5, {
                width: "300px",
                ease: Power4.easeOut
            })
            TweenMax.to('.navbar__btnmenu__bg__blue', .3, {
                width: "100%",
                ease: Power1.easeOut
            })
            TweenMax.staggerTo(items.menu, .5, {
                right: "0px",
                height: "100%",
                width: "300px",
                padding: "50px 0 0 0",
                ease: Power4.easeOut
            }, .5)
            TweenMax.staggerTo(menu, .3, {
                paddingLeft: "40px",
                opacity: 1,
                onComplete: function() {
                    animate = true
                    is_open = true
                }
            }, .12)
            $(items.navbar).addClass('menu_open')
        }

        function hideMenu(type) {
            console.log('hideMenu function trigger')
            $(items.button).removeClass('is-active')
            if(type = 'scroll') {
                TweenMax.staggerTo(items.menu, .01, {
                    right: "-100%",
                    height: "100%",
                    ease: Power4.easeOut,
                }, .5)
            }
            TweenMax.staggerTo(items.menu, 5, {
                right: "-100%",
                height: "100%",
                ease: Power4.easeOut,
            }, .5)
            TweenMax.to(items.btnContainer, .5, {
                width: "230px",
                ease: Power4.easeOut
            })
            TweenMax.staggerTo(menu, .3, {
                paddingLeft: "0px",
                opacity: 0,
            }, .12)
            TweenMax.to('.navbar__btnmenu__bg__blue', .6, {
                width: "0%",
                ease: Power1.easeOut,
                onComplete: function() {
                    animate = true
                    is_open = false
                    // $(items.menu).css('visibility', 'hidden')
                }
            })

            $(items.navbar).removeClass('menu_open')
        }

        function openFixedMenu() {
            console.log('openFixedMenu function trigger')
            $(items.button).addClass('is-active')
            TweenMax.set(items.menu, {
                right: "30px",
                width: $('.navbar__content__inner').outerWidth(),
                height: "0%"
            })
            TweenMax.to('.navbar__mobile__overlay', .5, {
                width: "100%",
                ease: Power4.easeOut
            })
            TweenMax.to(items.menu, .2, {
                visibility: "visible",
                opacity: 1,
                height: "70vh",
                padding: "50px 0 0 0",
                width: $('.navbar__content__inner').outerWidth(),
                right: "30px"
            })
            TweenMax.staggerTo(menu, .3, {
                paddingLeft: "40px",
                opacity: 1,
                onComplete: function() {
                    animate = true
                    is_open = true
                }
            }, .12)

            $(items.navbar).addClass('menu_open')
        }

        function hideFixedMenu(type) {
            console.log('hideFixedMenu function trigger')
            $(items.button).removeClass('is-active')
                    if(type = 'scroll') {
                        TweenMax.to(items.menu, .01, {
                            height: "0%",
                            padding: "0px",
                            ease: Power4.easeOut,
                            onComplete: function() {
                                $(items.menu).css('visibility', 'hidden')
                            }
                        })
                    }
                    else {
                        TweenMax.to(items.menu, .7, {
                            height: "0%",
                            padding: "0px",
                            ease: Power4.easeOut,
                            onComplete: function() {
                                $(items.menu).css('visibility', 'hidden')
                            }
                        })
                    }
                    TweenMax.to('.navbar__mobile__overlay', .5, {
                        width: "0%",
                        ease: Power4.easeOut,
                        onComplete: function() {
                            animate = true
                            is_open = false
                        }
                    })
                    
                    TweenMax.staggerTo(menu, .3, {
                        paddingLeft: "0px",
                        opacity: 0,
                    }, .12)

                    $(items.navbar).removeClass('menu_open')
        }

        function fixedMenuController(destination) {
            var navbar = $('.navbar'),
                navbarTop = $(window).scrollTop()
            if(navbarTop >= navbar.outerHeight() && !$(items.navbar).hasClass('is--fixed')) {
                $(items.navbar).addClass('is--fixed')
                hideMenu('scroll')
            }else if(navbarTop <= navbar.outerHeight() && $(items.navbar).hasClass('is--fixed')){
                $(items.navbar).removeClass('is--fixed')
                hideFixedMenu('scroll')
            }
        }

        function fixedMenuControllerForSlider(destination) {
            if(destination == 1) {
                $(items.navbar).removeClass('is--fixed')
                hideFixedMenu()
            }else if (destination > 1 && !$(items.navbar).hasClass('is--fixed')) {
                $(items.navbar).addClass('is--fixed')
                hideMenu()
            }
        }

        $('#open-mobile-menu').on('click', function() {
            $(this).toggleClass('is-active')
            $('.navbar__mobile').toggleClass('is--open')
            $('body').toggleClass('mobile_menu_open')
        })

        if(window.innerWidth < 1025) {
            if($('.slides-container')[0]) {
                $.fn.fullpage.destroy('all');
            }
        }

        if(window.innerWidth < 768) {
            $('.navbar').remove()
        }
        
        if($('main.__custom-height')) $('main').css('min-height', "calc(100vh - " + $('footer').innerHeight() + "px)")

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
(function($) {
    "use strict"
    $(function() {

        var classes = {
            trigger: '.__tab-trigger',
            block: '.__tab-container',
            data: 'data-tabid'
        }

        var current = $(classes.trigger + '.is--active')

        current.each(function() {
            var id = $(this).attr(classes.data)
            if(id) showTab($(this).attr(classes.data))
        })

        $(classes.trigger).on('click', function() {
            $(classes.block).hide()
            $(classes.trigger).removeClass('is--active')
            showTab($(this).attr(classes.data))
            $(this).addClass('is--active')
        })
            
        function showTab(id) {
            $(classes.block + "[" +  classes.data+ "=" + id + "]").css('display', 'block')
        }
    })
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuY2hvci5qcyIsImRlbGl2ZXJ5LmpzIiwiZm9ybS5qcyIsImluZGV4X21vdXNlLmpzIiwibWFwLmpzIiwibmF2YmFyLmpzIiwic2Nyb2xsLmpzIiwic2xpZGVyLmpzIiwidGFicy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1UEE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIChmdW5jdGlvbigkKSB7XHJcbi8vICAgICBcInVzZSBzdHJpY3RcIlxyXG4vLyAgICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICBcclxuLy8gICAgICAgICAkKCcuYW5jaG9yLXRhcmdldCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICAgICAgICB2YXIgYW5jaG9ySWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtYW5jaG9yaWQnKVxyXG4vLyAgICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkKGFuY2hvcklkKS5vZmZzZXQoKS50b3B9LCA4MDApXHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICB9KVxyXG4vLyB9KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgJCgnLmNhdGFsb2dfX2RlbGl2ZXJ5X19jb250ZW50JykuaGlkZSgpXHJcbiAgICAgICAgXHJcbiAgICAgICAgJCgnLmNhdGFsb2dfX2RlbGl2ZXJ5X190aXRsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5jYXRhbG9nX19kZWxpdmVyeScpLnRvZ2dsZUNsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgICAgICQoJy5jYXRhbG9nX19kZWxpdmVyeV9fY29udGVudCcpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgJCgnI2ZpbGUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygkKHRoaXMpLnZhbCgpLnJlcGxhY2UoLy4qKFxcL3xcXFxcKS8sICcnKSlcclxuICAgICAgICAgICAgJCgnLmlzLS1maWxlLWxhYmVsJykuaHRtbCgkKHRoaXMpLnZhbCgpLnJlcGxhY2UoLy4qKFxcL3xcXFxcKS8sICcnKSlcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAkKCcuaW4tc2xpZGUzJykubW91c2Vtb3ZlKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgLy8gdmFyIGNvb3JkcyA9IHtcclxuICAgICAgICAgICAgLy8gICAgIHk6IGUuY2xpZW50WSAvIDMwLFxyXG4gICAgICAgICAgICAvLyAgICAgeDogZS5jbGllbnRYIC8gMzBcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgLy8gJCgnLmluLXNsaWRlM19faW5uZXJfX3Bob3RvIGltZycpLmNzcyh7XHJcbiAgICAgICAgICAgIC8vICAgICBcIm1hcmdpbi10b3BcIjogY29vcmRzLnkgKyBcInB4XCIsXHJcbiAgICAgICAgICAgIC8vICAgICBcIm1hcmdpbi1sZWZ0XCI6IFwiLVwiICsgY29vcmRzLnggKyBcInB4XCJcclxuICAgICAgICAgICAgLy8gfSlcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsInZhciBtYXA7XHJcbmZ1bmN0aW9uIGluaXRNYXAoKSB7XHJcbiAgICBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xyXG4gICAgICAgIGNlbnRlcjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg1Mi45MTc3ODYsIDM2LjAwNTA4NSksXHJcbiAgICAgICAgem9vbTogMTcsXHJcbiAgICAgICAgZGlzYWJsZURlZmF1bHRVSTogdHJ1ZSxcclxuICAgICAgICBzdHlsZXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9uXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IC0xMDBcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJnYW1tYVwiOiAwLjU0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy5pY29uXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjNGQ0OTQ2XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcclxuICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMuaWNvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pXCIsXHJcbiAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHRcIixcclxuICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJzaW1wbGlmaWVkXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXHJcbiAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmxvY2FsXCIsXHJcbiAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHRcIixcclxuICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJzaW1wbGlmaWVkXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdC5saW5lXCIsXHJcbiAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcclxuICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImdhbW1hXCI6IDAuNDhcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0LnN0YXRpb25cIixcclxuICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMuaWNvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LnN0cm9rZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2FtbWFcIjogNy4xOFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0pO1xyXG4gICAgdmFyIGljb24gPSAnaHR0cDovL2Zyb250ZW5kLmRvcm9ob3ZkZXNpZ24ucnUvYl9pbmQvaW1nL21hcmtlci5wbmcnO1xyXG5cclxuICAgIG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg1Mi45MTc1ODUsIDM2LjAwNzY4MSksXHJcbiAgICAgICAgICAgIGljb246IGljb24sXHJcbiAgICAgICAgICAgIG1hcDogbWFwXHJcbiAgICB9KTtcclxuICAgIG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg1Mi44ODg4ODMsIDM2LjE2OTIyNyksXHJcbiAgICAgICAgICAgIGljb246IGljb24sXHJcbiAgICAgICAgICAgIG1hcDogbWFwXHJcbiAgICB9KTtcclxufSIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIGl0ZW1zID0ge1xyXG4gICAgICAgICAgICBuYXZiYXI6ICcubmF2YmFyJyxcclxuICAgICAgICAgICAgYnV0dG9uOiAnI29wZW4tbWVudScsXHJcbiAgICAgICAgICAgIG1lbnU6ICcubmF2YmFyX19tZW51JyxcclxuICAgICAgICAgICAgYnRuQ29udGFpbmVyOiBcIi5uYXZiYXJfX2J0bm1lbnVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXNfb3BlbiA9IGZhbHNlLFxyXG4gICAgICAgIGFuaW1hdGUgPSB0cnVlLFxyXG4gICAgICAgIG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2YmFyX19tZW51IHVsIGxpIGEnKVxyXG5cclxuICAgICAgICB2YXIgZnVsbHBhZ2VfYXBpID0gJCgnLnNsaWRlcy1jb250YWluZXInKS5mdWxscGFnZSh7XHJcbiAgICAgICAgICAgIGNzczM6IHRydWUsXHJcbiAgICAgICAgICAgIHNjcm9sbGluZ1NwZWVkOiAxMDAwLFxyXG4gICAgICAgICAgICBhdXRvU2Nyb2xsaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBmaXRUb1NlY3Rpb246IHRydWUsXHJcbiAgICAgICAgICAgIGZpdFRvU2VjdGlvbkRlbGF5OiAxMDAwLFxyXG4gICAgICAgICAgICBzY3JvbGxCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBlYXNpbmc6ICdlYXNlSW5PdXRDdWJpYycsXHJcbiAgICAgICAgICAgIGVhc2luZ2NzczM6ICdlYXNlJyxcclxuICAgICAgICAgICAgbG9vcEJvdHRvbTogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvb3BUb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICBsb29wSG9yaXpvbnRhbDogdHJ1ZSxcclxuICAgICAgICAgICAgY29udGludW91c1ZlcnRpY2FsOiBmYWxzZSxcclxuICAgICAgICAgICAgY29udGludW91c0hvcml6b250YWw6IGZhbHNlLFxyXG4gICAgICAgICAgICBzY3JvbGxIb3Jpem9udGFsbHk6IGZhbHNlLFxyXG4gICAgICAgICAgICBpbnRlcmxvY2tlZFNsaWRlczogZmFsc2UsXHJcbiAgICAgICAgICAgIG9mZnNldFNlY3Rpb25zOiBmYWxzZSxcclxuICAgICAgICAgICAgbm9ybWFsU2Nyb2xsRWxlbWVudHM6ICcuc2Nyb2xsYWJsZScsXHJcbiAgICAgICAgICAgIHNjcm9sbE92ZXJmbG93OiB0cnVlLFxyXG4gICAgICAgICAgICBzY3JvbGxPdmVyZmxvd1Jlc2V0OiBmYWxzZSxcclxuICAgICAgICAgICAgdG91Y2hTZW5zaXRpdml0eTogMjMsXHJcbiAgICAgICAgICAgIG5vcm1hbFNjcm9sbEVsZW1lbnRUb3VjaFRocmVzaG9sZDogNSxcclxuICAgICAgICAgICAgYmlnU2VjdGlvbnNEZXN0aW5hdGlvbjogbnVsbCxcclxuICAgICAgICAgICAgc2xpZGVTZWxlY3RvcjogJy5zbGlkZTEzMTInLFxyXG4gICAgICAgICAgICBvbkxlYXZlOiBmdW5jdGlvbihvcmlnaW4sIGRlc3RpbmF0aW9uLCBkaXJlY3Rpb24pe1xyXG4gICAgICAgICAgICAgICAgZml4ZWRNZW51Q29udHJvbGxlckZvclNsaWRlcihkZXN0aW5hdGlvbilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYWZ0ZXJMb2FkOiBmdW5jdGlvbihvcmlnaW4sIGRlc3RpbmF0aW9uLCBkaXJlY3Rpb24pe1xyXG4gICAgICAgICAgICAgICAgZml4ZWRNZW51Q29udHJvbGxlckZvclNsaWRlcihkZXN0aW5hdGlvbilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZml4ZWRNZW51Q29udHJvbGxlcigpXHJcbiAgICAgICAgfSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGZpeGVkTWVudUNvbnRyb2xsZXIoKVxyXG5cclxuICAgICAgICAkKGl0ZW1zLmJ1dHRvbikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgaWYoISQoaXRlbXMubmF2YmFyKS5oYXNDbGFzcygnaXMtLWZpeGVkJykpIHtcclxuICAgICAgICAgICAgICAgIGlmKCFpc19vcGVuICYmIGFuaW1hdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGVuTWVudSgpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihpc19vcGVuICYmIGFuaW1hdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBoaWRlTWVudSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhbmltYXRlID0gZmFsc2VcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYoIWlzX29wZW4gJiYgYW5pbWF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wZW5GaXhlZE1lbnUoKVxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoaXNfb3BlbiAmJiBhbmltYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZUZpeGVkTWVudSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvcGVuTWVudSgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ29wZW5NZW51IGZ1bmN0aW9uIHRyaWdnZXInKVxyXG4gICAgICAgICAgICAkKGl0ZW1zLmJ1dHRvbikuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgICAgIFR3ZWVuTWF4LnNldChpdGVtcy5tZW51LCB7XHJcbiAgICAgICAgICAgICAgICByaWdodDogXCItMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogXCJ2aXNpYmxlXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgVHdlZW5NYXgudG8oaXRlbXMuYnRuQ29udGFpbmVyLCAuNSwge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMzAwcHhcIixcclxuICAgICAgICAgICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFR3ZWVuTWF4LnRvKCcubmF2YmFyX19idG5tZW51X19iZ19fYmx1ZScsIC4zLCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBlYXNlOiBQb3dlcjEuZWFzZU91dFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBUd2Vlbk1heC5zdGFnZ2VyVG8oaXRlbXMubWVudSwgLjUsIHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBcIjBweFwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjMwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjUwcHggMCAwIDBcIixcclxuICAgICAgICAgICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XHJcbiAgICAgICAgICAgIH0sIC41KVxyXG4gICAgICAgICAgICBUd2Vlbk1heC5zdGFnZ2VyVG8obWVudSwgLjMsIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGlzX29wZW4gPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIC4xMilcclxuICAgICAgICAgICAgJChpdGVtcy5uYXZiYXIpLmFkZENsYXNzKCdtZW51X29wZW4nKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGlkZU1lbnUodHlwZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGlkZU1lbnUgZnVuY3Rpb24gdHJpZ2dlcicpXHJcbiAgICAgICAgICAgICQoaXRlbXMuYnV0dG9uKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJylcclxuICAgICAgICAgICAgaWYodHlwZSA9ICdzY3JvbGwnKSB7XHJcbiAgICAgICAgICAgICAgICBUd2Vlbk1heC5zdGFnZ2VyVG8oaXRlbXMubWVudSwgLjAxLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IFwiLTEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0LFxyXG4gICAgICAgICAgICAgICAgfSwgLjUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgVHdlZW5NYXguc3RhZ2dlclRvKGl0ZW1zLm1lbnUsIDUsIHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBcIi0xMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXQsXHJcbiAgICAgICAgICAgIH0sIC41KVxyXG4gICAgICAgICAgICBUd2Vlbk1heC50byhpdGVtcy5idG5Db250YWluZXIsIC41LCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIyMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgVHdlZW5NYXguc3RhZ2dlclRvKG1lbnUsIC4zLCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIwcHhcIixcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICAgIH0sIC4xMilcclxuICAgICAgICAgICAgVHdlZW5NYXgudG8oJy5uYXZiYXJfX2J0bm1lbnVfX2JnX19ibHVlJywgLjYsIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjAlXCIsXHJcbiAgICAgICAgICAgICAgICBlYXNlOiBQb3dlcjEuZWFzZU91dCxcclxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgaXNfb3BlbiA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gJChpdGVtcy5tZW51KS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICQoaXRlbXMubmF2YmFyKS5yZW1vdmVDbGFzcygnbWVudV9vcGVuJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5GaXhlZE1lbnUoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvcGVuRml4ZWRNZW51IGZ1bmN0aW9uIHRyaWdnZXInKVxyXG4gICAgICAgICAgICAkKGl0ZW1zLmJ1dHRvbikuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgICAgIFR3ZWVuTWF4LnNldChpdGVtcy5tZW51LCB7XHJcbiAgICAgICAgICAgICAgICByaWdodDogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJCgnLm5hdmJhcl9fY29udGVudF9faW5uZXInKS5vdXRlcldpZHRoKCksXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMCVcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBUd2Vlbk1heC50bygnLm5hdmJhcl9fbW9iaWxlX19vdmVybGF5JywgLjUsIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFR3ZWVuTWF4LnRvKGl0ZW1zLm1lbnUsIC4yLCB7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBcInZpc2libGVcIixcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNzB2aFwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCI1MHB4IDAgMCAwXCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJCgnLm5hdmJhcl9fY29udGVudF9faW5uZXInKS5vdXRlcldpZHRoKCksXHJcbiAgICAgICAgICAgICAgICByaWdodDogXCIzMHB4XCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgVHdlZW5NYXguc3RhZ2dlclRvKG1lbnUsIC4zLCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICBpc19vcGVuID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAuMTIpXHJcblxyXG4gICAgICAgICAgICAkKGl0ZW1zLm5hdmJhcikuYWRkQ2xhc3MoJ21lbnVfb3BlbicpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoaWRlRml4ZWRNZW51KHR5cGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hpZGVGaXhlZE1lbnUgZnVuY3Rpb24gdHJpZ2dlcicpXHJcbiAgICAgICAgICAgICQoaXRlbXMuYnV0dG9uKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJylcclxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlID0gJ3Njcm9sbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVHdlZW5NYXgudG8oaXRlbXMubWVudSwgLjAxLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoaXRlbXMubWVudSkuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUd2Vlbk1heC50byhpdGVtcy5tZW51LCAuNywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGl0ZW1zLm1lbnUpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBUd2Vlbk1heC50bygnLm5hdmJhcl9fbW9iaWxlX19vdmVybGF5JywgLjUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX29wZW4gPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBUd2Vlbk1heC5zdGFnZ2VyVG8obWVudSwgLjMsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgLjEyKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKGl0ZW1zLm5hdmJhcikucmVtb3ZlQ2xhc3MoJ21lbnVfb3BlbicpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBmaXhlZE1lbnVDb250cm9sbGVyKGRlc3RpbmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHZhciBuYXZiYXIgPSAkKCcubmF2YmFyJyksXHJcbiAgICAgICAgICAgICAgICBuYXZiYXJUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKClcclxuICAgICAgICAgICAgaWYobmF2YmFyVG9wID49IG5hdmJhci5vdXRlckhlaWdodCgpICYmICEkKGl0ZW1zLm5hdmJhcikuaGFzQ2xhc3MoJ2lzLS1maXhlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAkKGl0ZW1zLm5hdmJhcikuYWRkQ2xhc3MoJ2lzLS1maXhlZCcpXHJcbiAgICAgICAgICAgICAgICBoaWRlTWVudSgnc2Nyb2xsJylcclxuICAgICAgICAgICAgfWVsc2UgaWYobmF2YmFyVG9wIDw9IG5hdmJhci5vdXRlckhlaWdodCgpICYmICQoaXRlbXMubmF2YmFyKS5oYXNDbGFzcygnaXMtLWZpeGVkJykpe1xyXG4gICAgICAgICAgICAgICAgJChpdGVtcy5uYXZiYXIpLnJlbW92ZUNsYXNzKCdpcy0tZml4ZWQnKVxyXG4gICAgICAgICAgICAgICAgaGlkZUZpeGVkTWVudSgnc2Nyb2xsJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZml4ZWRNZW51Q29udHJvbGxlckZvclNsaWRlcihkZXN0aW5hdGlvbikge1xyXG4gICAgICAgICAgICBpZihkZXN0aW5hdGlvbiA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAkKGl0ZW1zLm5hdmJhcikucmVtb3ZlQ2xhc3MoJ2lzLS1maXhlZCcpXHJcbiAgICAgICAgICAgICAgICBoaWRlRml4ZWRNZW51KClcclxuICAgICAgICAgICAgfWVsc2UgaWYgKGRlc3RpbmF0aW9uID4gMSAmJiAhJChpdGVtcy5uYXZiYXIpLmhhc0NsYXNzKCdpcy0tZml4ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgJChpdGVtcy5uYXZiYXIpLmFkZENsYXNzKCdpcy0tZml4ZWQnKVxyXG4gICAgICAgICAgICAgICAgaGlkZU1lbnUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcjb3Blbi1tb2JpbGUtbWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgICAgICAkKCcubmF2YmFyX19tb2JpbGUnKS50b2dnbGVDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ21vYmlsZV9tZW51X29wZW4nKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgMTAyNSkge1xyXG4gICAgICAgICAgICBpZigkKCcuc2xpZGVzLWNvbnRhaW5lcicpWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAkLmZuLmZ1bGxwYWdlLmRlc3Ryb3koJ2FsbCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyJykucmVtb3ZlKClcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoJCgnbWFpbi5fX2N1c3RvbS1oZWlnaHQnKSkgJCgnbWFpbicpLmNzcygnbWluLWhlaWdodCcsIFwiY2FsYygxMDB2aCAtIFwiICsgJCgnZm9vdGVyJykuaW5uZXJIZWlnaHQoKSArIFwicHgpXCIpXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQoJy5wcm9kdWN0c19fc2xpZGVyX19pdGVtcycpLnNsaWNrKHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICcucHJvZHVjdHNfX3NsaWRlcl9fYXJyb3cuaXMtLWxlZnQnLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICcucHJvZHVjdHNfX3NsaWRlcl9fYXJyb3cuaXMtLXJpZ2h0JyxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIGNsYXNzZXMgPSB7XHJcbiAgICAgICAgICAgIHRyaWdnZXI6ICcuX190YWItdHJpZ2dlcicsXHJcbiAgICAgICAgICAgIGJsb2NrOiAnLl9fdGFiLWNvbnRhaW5lcicsXHJcbiAgICAgICAgICAgIGRhdGE6ICdkYXRhLXRhYmlkJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGN1cnJlbnQgPSAkKGNsYXNzZXMudHJpZ2dlciArICcuaXMtLWFjdGl2ZScpXHJcblxyXG4gICAgICAgIGN1cnJlbnQuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKGNsYXNzZXMuZGF0YSlcclxuICAgICAgICAgICAgaWYoaWQpIHNob3dUYWIoJCh0aGlzKS5hdHRyKGNsYXNzZXMuZGF0YSkpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChjbGFzc2VzLnRyaWdnZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKGNsYXNzZXMuYmxvY2spLmhpZGUoKVxyXG4gICAgICAgICAgICAkKGNsYXNzZXMudHJpZ2dlcikucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICBzaG93VGFiKCQodGhpcykuYXR0cihjbGFzc2VzLmRhdGEpKVxyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICBmdW5jdGlvbiBzaG93VGFiKGlkKSB7XHJcbiAgICAgICAgICAgICQoY2xhc3Nlcy5ibG9jayArIFwiW1wiICsgIGNsYXNzZXMuZGF0YSsgXCI9XCIgKyBpZCArIFwiXVwiKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7Il19
