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
            $('.is--file-label').html($(this).val().replace(/.*(\/|\\)/, ''))
        })

        $('.input-table-countbtn').on('click', function() {
            var action = $(this).attr('data-action')
            var input = $(this).siblings('input[type="number"]')
            var value = input.val()
            if(action == '-' && value > 0) value--
            else if(action == '+') value++
            input.val(value)
        })

        var phoneInput = document.getElementById('phone');
        new IMask(
            phoneInput, {
            mask: '+{7}(900)000-00-00'
        });

        $('form').parsley()
            
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
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "0"
                    },
                    {
                        "lightness": "0"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": "-60"
                    },
                    {
                        "lightness": "-20"
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
        menu = document.querySelectorAll('.navbar__menu ul li a'),
        ismobile = false

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
                if(!ismobile) {
                    if(destination == 2) {
                        $('.in-slide2__block').each(function(i) {
                            var block = $(this)
                            setTimeout(function() {
                                block.addClass('animated fadeInDown')
                            }, 100 * i)
                        })
                    }
                    if(destination == 3) {
                        $('.__sl3anim').each(function(i) {
                            var block = $(this)
                            $('.__sl3anim2').addClass('animated fadeInLeft')
                            setTimeout(function() {
                                block.addClass('animated fadeInUp')
                            }, 100 * i)
                        })
                    }
                    if(destination == 4) {
                        $('.__sl4anim').each(function(i) {
                            var block = $(this)
                            setTimeout(function() {
                                block.addClass('animated fadeInRight')
                            }, 100 * i)
                        })
                    }
                    if(destination == 5) {
                        $('.__sl5anim').each(function(i) {
                            var block = $(this)
                            setTimeout(function() {
                                block.addClass('animated fadeInLeft')
                            }, 100 * i)
                        })
                    }
                    if(destination == 6) {
                        $('.__sl6anim').each(function(i) {
                            var block = $(this)
                            setTimeout(function() {
                                block.addClass('animated fadeInUp')
                            }, 100 * i)
                        })
                    }
                }
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
                ismobile = true
                $('body').removeClass('is--animatecss')
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
            
        $(window).on('load', function() {
            $('img').css('visibility', 'visible')
        })
            
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuY2hvci5qcyIsImRlbGl2ZXJ5LmpzIiwiZm9ybS5qcyIsImluZGV4X21vdXNlLmpzIiwibWFwLmpzIiwibmF2YmFyLmpzIiwicHJlbG9hZGVyLmpzIiwic2Nyb2xsLmpzIiwic2xpZGVyLmpzIiwidGFicy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAoZnVuY3Rpb24oJCkge1xyXG4vLyAgICAgXCJ1c2Ugc3RyaWN0XCJcclxuLy8gICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbi8vICAgICAgICAgJCgnLmFuY2hvci10YXJnZXQnKS5jbGljayhmdW5jdGlvbigpIHtcclxuLy8gICAgICAgICAgICAgdmFyIGFuY2hvcklkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWFuY2hvcmlkJylcclxuLy8gICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogJChhbmNob3JJZCkub2Zmc2V0KCkudG9wfSwgODAwKVxyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgfSlcclxuLy8gfSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICQoJy5jYXRhbG9nX19kZWxpdmVyeV9fY29udGVudCcpLmhpZGUoKVxyXG4gICAgICAgIFxyXG4gICAgICAgICQoJy5jYXRhbG9nX19kZWxpdmVyeV9fdGl0bGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuY2F0YWxvZ19fZGVsaXZlcnknKS50b2dnbGVDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgICAgICAkKCcuY2F0YWxvZ19fZGVsaXZlcnlfX2NvbnRlbnQnKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICQoJyNmaWxlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgJCgnLmlzLS1maWxlLWxhYmVsJykuaHRtbCgkKHRoaXMpLnZhbCgpLnJlcGxhY2UoLy4qKFxcL3xcXFxcKS8sICcnKSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuaW5wdXQtdGFibGUtY291bnRidG4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGFjdGlvbiA9ICQodGhpcykuYXR0cignZGF0YS1hY3Rpb24nKVxyXG4gICAgICAgICAgICB2YXIgaW5wdXQgPSAkKHRoaXMpLnNpYmxpbmdzKCdpbnB1dFt0eXBlPVwibnVtYmVyXCJdJylcclxuICAgICAgICAgICAgdmFyIHZhbHVlID0gaW5wdXQudmFsKClcclxuICAgICAgICAgICAgaWYoYWN0aW9uID09ICctJyAmJiB2YWx1ZSA+IDApIHZhbHVlLS1cclxuICAgICAgICAgICAgZWxzZSBpZihhY3Rpb24gPT0gJysnKSB2YWx1ZSsrXHJcbiAgICAgICAgICAgIGlucHV0LnZhbCh2YWx1ZSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB2YXIgcGhvbmVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaG9uZScpO1xyXG4gICAgICAgIG5ldyBJTWFzayhcclxuICAgICAgICAgICAgcGhvbmVJbnB1dCwge1xyXG4gICAgICAgICAgICBtYXNrOiAnK3s3fSg5MDApMDAwLTAwLTAwJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCdmb3JtJykucGFyc2xleSgpXHJcbiAgICAgICAgICAgIFxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQoJy5pbi1zbGlkZTMnKS5tb3VzZW1vdmUoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAvLyB2YXIgY29vcmRzID0ge1xyXG4gICAgICAgICAgICAvLyAgICAgeTogZS5jbGllbnRZIC8gMzAsXHJcbiAgICAgICAgICAgIC8vICAgICB4OiBlLmNsaWVudFggLyAzMFxyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAvLyAkKCcuaW4tc2xpZGUzX19pbm5lcl9fcGhvdG8gaW1nJykuY3NzKHtcclxuICAgICAgICAgICAgLy8gICAgIFwibWFyZ2luLXRvcFwiOiBjb29yZHMueSArIFwicHhcIixcclxuICAgICAgICAgICAgLy8gICAgIFwibWFyZ2luLWxlZnRcIjogXCItXCIgKyBjb29yZHMueCArIFwicHhcIlxyXG4gICAgICAgICAgICAvLyB9KVxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwidmFyIG1hcDtcclxuZnVuY3Rpb24gaW5pdE1hcCgpIHtcclxuICAgIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XHJcbiAgICAgICAgY2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDUyLjkxNzc4NiwgMzYuMDA1MDg1KSxcclxuICAgICAgICB6b29tOiAxNyxcclxuICAgICAgICBkaXNhYmxlRGVmYXVsdFVJOiB0cnVlLFxyXG4gICAgICAgIHN0eWxlczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJodWVcIjogXCIjMDA4ZWZmXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcclxuICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcclxuICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNhdHVyYXRpb25cIjogXCIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogXCIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0XCIsXHJcbiAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcInNpbXBsaWZpZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNhdHVyYXRpb25cIjogXCItNjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiBcIi0yMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcbiAgICB2YXIgaWNvbiA9ICdodHRwOi8vZnJvbnRlbmQuZG9yb2hvdmRlc2lnbi5ydS9iX2luZC9pbWcvbWFya2VyLnBuZyc7XHJcblxyXG4gICAgbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDUyLjkxNzU4NSwgMzYuMDA3NjgxKSxcclxuICAgICAgICAgICAgaWNvbjogaWNvbixcclxuICAgICAgICAgICAgbWFwOiBtYXBcclxuICAgIH0pO1xyXG4gICAgbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDUyLjg4ODg4MywgMzYuMTY5MjI3KSxcclxuICAgICAgICAgICAgaWNvbjogaWNvbixcclxuICAgICAgICAgICAgbWFwOiBtYXBcclxuICAgIH0pO1xyXG59IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgaXRlbXMgPSB7XHJcbiAgICAgICAgICAgIG5hdmJhcjogJy5uYXZiYXInLFxyXG4gICAgICAgICAgICBidXR0b246ICcjb3Blbi1tZW51JyxcclxuICAgICAgICAgICAgbWVudTogJy5uYXZiYXJfX21lbnUnLFxyXG4gICAgICAgICAgICBidG5Db250YWluZXI6IFwiLm5hdmJhcl9fYnRubWVudVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpc19vcGVuID0gZmFsc2UsXHJcbiAgICAgICAgYW5pbWF0ZSA9IHRydWUsXHJcbiAgICAgICAgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZiYXJfX21lbnUgdWwgbGkgYScpLFxyXG4gICAgICAgIGlzbW9iaWxlID0gZmFsc2VcclxuXHJcbiAgICAgICAgdmFyIGZ1bGxwYWdlX2FwaSA9ICQoJy5zbGlkZXMtY29udGFpbmVyJykuZnVsbHBhZ2Uoe1xyXG4gICAgICAgICAgICBjc3MzOiB0cnVlLFxyXG4gICAgICAgICAgICBzY3JvbGxpbmdTcGVlZDogMTAwMCxcclxuICAgICAgICAgICAgYXV0b1Njcm9sbGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgZml0VG9TZWN0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICBmaXRUb1NlY3Rpb25EZWxheTogMTAwMCxcclxuICAgICAgICAgICAgc2Nyb2xsQmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0Q3ViaWMnLFxyXG4gICAgICAgICAgICBlYXNpbmdjc3MzOiAnZWFzZScsXHJcbiAgICAgICAgICAgIGxvb3BCb3R0b206IGZhbHNlLFxyXG4gICAgICAgICAgICBsb29wVG9wOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9vcEhvcml6b250YWw6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbnRpbnVvdXNWZXJ0aWNhbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbnRpbnVvdXNIb3Jpem9udGFsOiBmYWxzZSxcclxuICAgICAgICAgICAgc2Nyb2xsSG9yaXpvbnRhbGx5OiBmYWxzZSxcclxuICAgICAgICAgICAgaW50ZXJsb2NrZWRTbGlkZXM6IGZhbHNlLFxyXG4gICAgICAgICAgICBvZmZzZXRTZWN0aW9uczogZmFsc2UsXHJcbiAgICAgICAgICAgIG5vcm1hbFNjcm9sbEVsZW1lbnRzOiAnLnNjcm9sbGFibGUnLFxyXG4gICAgICAgICAgICBzY3JvbGxPdmVyZmxvdzogdHJ1ZSxcclxuICAgICAgICAgICAgc2Nyb2xsT3ZlcmZsb3dSZXNldDogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdWNoU2Vuc2l0aXZpdHk6IDIzLFxyXG4gICAgICAgICAgICBub3JtYWxTY3JvbGxFbGVtZW50VG91Y2hUaHJlc2hvbGQ6IDUsXHJcbiAgICAgICAgICAgIGJpZ1NlY3Rpb25zRGVzdGluYXRpb246IG51bGwsXHJcbiAgICAgICAgICAgIHNsaWRlU2VsZWN0b3I6ICcuc2xpZGUxMzEyJyxcclxuICAgICAgICAgICAgb25MZWF2ZTogZnVuY3Rpb24ob3JpZ2luLCBkZXN0aW5hdGlvbiwgZGlyZWN0aW9uKXtcclxuICAgICAgICAgICAgICAgIGZpeGVkTWVudUNvbnRyb2xsZXJGb3JTbGlkZXIoZGVzdGluYXRpb24pXHJcbiAgICAgICAgICAgICAgICBpZighaXNtb2JpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihkZXN0aW5hdGlvbiA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5pbi1zbGlkZTJfX2Jsb2NrJykuZWFjaChmdW5jdGlvbihpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYmxvY2sgPSAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrLmFkZENsYXNzKCdhbmltYXRlZCBmYWRlSW5Eb3duJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMCAqIGkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGRlc3RpbmF0aW9uID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLl9fc2wzYW5pbScpLmVhY2goZnVuY3Rpb24oaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJsb2NrID0gJCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLl9fc2wzYW5pbTInKS5hZGRDbGFzcygnYW5pbWF0ZWQgZmFkZUluTGVmdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrLmFkZENsYXNzKCdhbmltYXRlZCBmYWRlSW5VcCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAgKiBpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihkZXN0aW5hdGlvbiA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5fX3NsNGFuaW0nKS5lYWNoKGZ1bmN0aW9uKGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBibG9jayA9ICQodGhpcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2suYWRkQ2xhc3MoJ2FuaW1hdGVkIGZhZGVJblJpZ2h0JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMCAqIGkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGRlc3RpbmF0aW9uID09IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLl9fc2w1YW5pbScpLmVhY2goZnVuY3Rpb24oaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJsb2NrID0gJCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9jay5hZGRDbGFzcygnYW5pbWF0ZWQgZmFkZUluTGVmdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAgKiBpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihkZXN0aW5hdGlvbiA9PSA2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5fX3NsNmFuaW0nKS5lYWNoKGZ1bmN0aW9uKGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBibG9jayA9ICQodGhpcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2suYWRkQ2xhc3MoJ2FuaW1hdGVkIGZhZGVJblVwJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMCAqIGkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhZnRlckxvYWQ6IGZ1bmN0aW9uKG9yaWdpbiwgZGVzdGluYXRpb24sIGRpcmVjdGlvbil7XHJcbiAgICAgICAgICAgICAgICBmaXhlZE1lbnVDb250cm9sbGVyRm9yU2xpZGVyKGRlc3RpbmF0aW9uKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBmaXhlZE1lbnVDb250cm9sbGVyKClcclxuICAgICAgICB9LCB0cnVlKTtcclxuXHJcbiAgICAgICAgZml4ZWRNZW51Q29udHJvbGxlcigpXHJcblxyXG4gICAgICAgICQoaXRlbXMuYnV0dG9uKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICBpZighJChpdGVtcy5uYXZiYXIpLmhhc0NsYXNzKCdpcy0tZml4ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgaWYoIWlzX29wZW4gJiYgYW5pbWF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wZW5NZW51KClcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGlzX29wZW4gJiYgYW5pbWF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVNZW51KClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFuaW1hdGUgPSBmYWxzZVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZighaXNfb3BlbiAmJiBhbmltYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BlbkZpeGVkTWVudSgpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihpc19vcGVuICYmIGFuaW1hdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBoaWRlRml4ZWRNZW51KClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5NZW51KCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb3Blbk1lbnUgZnVuY3Rpb24gdHJpZ2dlcicpXHJcbiAgICAgICAgICAgICQoaXRlbXMuYnV0dG9uKS5hZGRDbGFzcygnaXMtYWN0aXZlJylcclxuICAgICAgICAgICAgVHdlZW5NYXguc2V0KGl0ZW1zLm1lbnUsIHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBcIi0xMDAlXCIsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBcInZpc2libGVcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBUd2Vlbk1heC50byhpdGVtcy5idG5Db250YWluZXIsIC41LCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIzMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgVHdlZW5NYXgudG8oJy5uYXZiYXJfX2J0bm1lbnVfX2JnX19ibHVlJywgLjMsIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIGVhc2U6IFBvd2VyMS5lYXNlT3V0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFR3ZWVuTWF4LnN0YWdnZXJUbyhpdGVtcy5tZW51LCAuNSwge1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMzAwcHhcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNTBweCAwIDAgMFwiLFxyXG4gICAgICAgICAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcclxuICAgICAgICAgICAgfSwgLjUpXHJcbiAgICAgICAgICAgIFR3ZWVuTWF4LnN0YWdnZXJUbyhtZW51LCAuMywge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgaXNfb3BlbiA9IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgLjEyKVxyXG4gICAgICAgICAgICAkKGl0ZW1zLm5hdmJhcikuYWRkQ2xhc3MoJ21lbnVfb3BlbicpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoaWRlTWVudSh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoaWRlTWVudSBmdW5jdGlvbiB0cmlnZ2VyJylcclxuICAgICAgICAgICAgJChpdGVtcy5idXR0b24pLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgICAgICBpZih0eXBlID0gJ3Njcm9sbCcpIHtcclxuICAgICAgICAgICAgICAgIFR3ZWVuTWF4LnN0YWdnZXJUbyhpdGVtcy5tZW51LCAuMDEsIHtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogXCItMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXQsXHJcbiAgICAgICAgICAgICAgICB9LCAuNSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBUd2Vlbk1heC5zdGFnZ2VyVG8oaXRlbXMubWVudSwgNSwge1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFwiLTEwMCVcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dCxcclxuICAgICAgICAgICAgfSwgLjUpXHJcbiAgICAgICAgICAgIFR3ZWVuTWF4LnRvKGl0ZW1zLmJ0bkNvbnRhaW5lciwgLjUsIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIzMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBUd2Vlbk1heC5zdGFnZ2VyVG8obWVudSwgLjMsIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjBweFwiLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgfSwgLjEyKVxyXG4gICAgICAgICAgICBUd2Vlbk1heC50bygnLm5hdmJhcl9fYnRubWVudV9fYmdfX2JsdWUnLCAuNiwge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMCVcIixcclxuICAgICAgICAgICAgICAgIGVhc2U6IFBvd2VyMS5lYXNlT3V0LFxyXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICBpc19vcGVuID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAvLyAkKGl0ZW1zLm1lbnUpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgJChpdGVtcy5uYXZiYXIpLnJlbW92ZUNsYXNzKCdtZW51X29wZW4nKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3BlbkZpeGVkTWVudSgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ29wZW5GaXhlZE1lbnUgZnVuY3Rpb24gdHJpZ2dlcicpXHJcbiAgICAgICAgICAgICQoaXRlbXMuYnV0dG9uKS5hZGRDbGFzcygnaXMtYWN0aXZlJylcclxuICAgICAgICAgICAgVHdlZW5NYXguc2V0KGl0ZW1zLm1lbnUsIHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBcIjMwcHhcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAkKCcubmF2YmFyX19jb250ZW50X19pbm5lcicpLm91dGVyV2lkdGgoKSxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIwJVwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFR3ZWVuTWF4LnRvKCcubmF2YmFyX19tb2JpbGVfX292ZXJsYXknLCAuNSwge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgVHdlZW5NYXgudG8oaXRlbXMubWVudSwgLjIsIHtcclxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IFwidmlzaWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCI3MHZoXCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjUwcHggMCAwIDBcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAkKCcubmF2YmFyX19jb250ZW50X19pbm5lcicpLm91dGVyV2lkdGgoKSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBcIjMwcHhcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBUd2Vlbk1heC5zdGFnZ2VyVG8obWVudSwgLjMsIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGlzX29wZW4gPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIC4xMilcclxuXHJcbiAgICAgICAgICAgICQoaXRlbXMubmF2YmFyKS5hZGRDbGFzcygnbWVudV9vcGVuJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGhpZGVGaXhlZE1lbnUodHlwZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGlkZUZpeGVkTWVudSBmdW5jdGlvbiB0cmlnZ2VyJylcclxuICAgICAgICAgICAgJChpdGVtcy5idXR0b24pLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGUgPSAnc2Nyb2xsJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUd2Vlbk1heC50byhpdGVtcy5tZW51LCAuMDEsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChpdGVtcy5tZW51KS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFR3ZWVuTWF4LnRvKGl0ZW1zLm1lbnUsIC43LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoaXRlbXMubWVudSkuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFR3ZWVuTWF4LnRvKCcubmF2YmFyX19tb2JpbGVfX292ZXJsYXknLCAuNSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfb3BlbiA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFR3ZWVuTWF4LnN0YWdnZXJUbyhtZW51LCAuMywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgICAgICAgICB9LCAuMTIpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoaXRlbXMubmF2YmFyKS5yZW1vdmVDbGFzcygnbWVudV9vcGVuJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGZpeGVkTWVudUNvbnRyb2xsZXIoZGVzdGluYXRpb24pIHtcclxuICAgICAgICAgICAgdmFyIG5hdmJhciA9ICQoJy5uYXZiYXInKSxcclxuICAgICAgICAgICAgICAgIG5hdmJhclRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKVxyXG4gICAgICAgICAgICBpZihuYXZiYXJUb3AgPj0gbmF2YmFyLm91dGVySGVpZ2h0KCkgJiYgISQoaXRlbXMubmF2YmFyKS5oYXNDbGFzcygnaXMtLWZpeGVkJykpIHtcclxuICAgICAgICAgICAgICAgICQoaXRlbXMubmF2YmFyKS5hZGRDbGFzcygnaXMtLWZpeGVkJylcclxuICAgICAgICAgICAgICAgIGhpZGVNZW51KCdzY3JvbGwnKVxyXG4gICAgICAgICAgICB9ZWxzZSBpZihuYXZiYXJUb3AgPD0gbmF2YmFyLm91dGVySGVpZ2h0KCkgJiYgJChpdGVtcy5uYXZiYXIpLmhhc0NsYXNzKCdpcy0tZml4ZWQnKSl7XHJcbiAgICAgICAgICAgICAgICAkKGl0ZW1zLm5hdmJhcikucmVtb3ZlQ2xhc3MoJ2lzLS1maXhlZCcpXHJcbiAgICAgICAgICAgICAgICBoaWRlRml4ZWRNZW51KCdzY3JvbGwnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBmaXhlZE1lbnVDb250cm9sbGVyRm9yU2xpZGVyKGRlc3RpbmF0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmKGRlc3RpbmF0aW9uID09IDEpIHtcclxuICAgICAgICAgICAgICAgICQoaXRlbXMubmF2YmFyKS5yZW1vdmVDbGFzcygnaXMtLWZpeGVkJylcclxuICAgICAgICAgICAgICAgIGhpZGVGaXhlZE1lbnUoKVxyXG4gICAgICAgICAgICB9ZWxzZSBpZiAoZGVzdGluYXRpb24gPiAxICYmICEkKGl0ZW1zLm5hdmJhcikuaGFzQ2xhc3MoJ2lzLS1maXhlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAkKGl0ZW1zLm5hdmJhcikuYWRkQ2xhc3MoJ2lzLS1maXhlZCcpXHJcbiAgICAgICAgICAgICAgICBoaWRlTWVudSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJyNvcGVuLW1vYmlsZS1tZW51Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX21vYmlsZScpLnRvZ2dsZUNsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnbW9iaWxlX21lbnVfb3BlbicpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPCAxMDI1KSB7XHJcbiAgICAgICAgICAgIGlmKCQoJy5zbGlkZXMtY29udGFpbmVyJylbMF0pIHtcclxuICAgICAgICAgICAgICAgIGlzbW9iaWxlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpcy0tYW5pbWF0ZWNzcycpXHJcbiAgICAgICAgICAgICAgICAkLmZuLmZ1bGxwYWdlLmRlc3Ryb3koJ2FsbCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyJykucmVtb3ZlKClcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoJCgnbWFpbi5fX2N1c3RvbS1oZWlnaHQnKSkgJCgnbWFpbicpLmNzcygnbWluLWhlaWdodCcsIFwiY2FsYygxMDB2aCAtIFwiICsgJCgnZm9vdGVyJykuaW5uZXJIZWlnaHQoKSArIFwicHgpXCIpXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCdpbWcnKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIiIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgJCgnLnByb2R1Y3RzX19zbGlkZXJfX2l0ZW1zJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgIHByZXZBcnJvdzogJy5wcm9kdWN0c19fc2xpZGVyX19hcnJvdy5pcy0tbGVmdCcsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogJy5wcm9kdWN0c19fc2xpZGVyX19hcnJvdy5pcy0tcmlnaHQnLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgY2xhc3NlcyA9IHtcclxuICAgICAgICAgICAgdHJpZ2dlcjogJy5fX3RhYi10cmlnZ2VyJyxcclxuICAgICAgICAgICAgYmxvY2s6ICcuX190YWItY29udGFpbmVyJyxcclxuICAgICAgICAgICAgZGF0YTogJ2RhdGEtdGFiaWQnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgY3VycmVudCA9ICQoY2xhc3Nlcy50cmlnZ2VyICsgJy5pcy0tYWN0aXZlJylcclxuXHJcbiAgICAgICAgY3VycmVudC5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoY2xhc3Nlcy5kYXRhKVxyXG4gICAgICAgICAgICBpZihpZCkgc2hvd1RhYigkKHRoaXMpLmF0dHIoY2xhc3Nlcy5kYXRhKSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKGNsYXNzZXMudHJpZ2dlcikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoY2xhc3Nlcy5ibG9jaykuaGlkZSgpXHJcbiAgICAgICAgICAgICQoY2xhc3Nlcy50cmlnZ2VyKS5yZW1vdmVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgIHNob3dUYWIoJCh0aGlzKS5hdHRyKGNsYXNzZXMuZGF0YSkpXHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIHNob3dUYWIoaWQpIHtcclxuICAgICAgICAgICAgJChjbGFzc2VzLmJsb2NrICsgXCJbXCIgKyAgY2xhc3Nlcy5kYXRhKyBcIj1cIiArIGlkICsgXCJdXCIpLmNzcygnZGlzcGxheScsICdibG9jaycpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiXX0=
