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