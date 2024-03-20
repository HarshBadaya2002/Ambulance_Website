$(document).ready(function() {
    // Navigation Menu
    $('.menu-icon').click(function(e) {
        e.preventDefault();
        $('.body-overlay').removeClass('overlay-hide');
        $('.sidebar_navigation').css({
            left: '0',
        });
        $('body').css({
            overflow: 'hidden'
        });
    });
    $('.close_btn').click(function(e) {
        $('.body-overlay').addClass('overlay-hide');
        $('.sidebar_navigation').css({
            left: '-100%'
        });
        $('body').css({
            overflow: 'auto'
        });
    });
    $(document).mouseup(function(e) {
        var nav_menu = $('.sidebar_navigation');
        if (!nav_menu.is(event.target) && nav_menu.has(event.target).length === 0) {
            $('.body-overlay').addClass('overlay-hide');
            nav_menu.css({
                left: '-100%'
            });
            $('body').css({
                overflow: 'auto'
            });
        }
        $('.country-options').addClass('hide');
    });
    /* Fleet Page */
    /* Tab */
    $('.fleet-tab>a').click(function(e) {
        e.preventDefault();
        $('.tab-active').removeClass('tab-active');
        $(this).addClass('tab-active');

        var tab_id = $(this).attr('data-tab');
        $('.content-active').removeClass('content-active');
        $("#" + tab_id).addClass('content-active');
    });

    /*City Taxi Tab */
    var fleet_city_prev_for = $('.fleet-city-prev-for-btn');
    var fleet_city_next_for = $('.fleet-city-next-for-btn');
    var fleet_city_prev_nav = $('.fleet-city-prev-nav-btn');
    var fleet_city_next_nav = $('.fleet-city-next-nav-btn');

    $('.fleet-city-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: fleet_city_prev_for,
        nextArrow: fleet_city_next_for,
        fade: true,
        infinite: false,
        asNavFor: '.fleet-city-slider-nav'
    });
    $('.fleet-city-slider-nav').slick({
        slidesToShow: 10,
        slidesToScroll: 1,
        asNavFor: '.fleet-city-slider-for',
        focusOnSelect: true,
        infinite: false,
        arrows: true,
        prevArrow: fleet_city_prev_nav,
        nextArrow: fleet_city_next_nav,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    swipe: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    swipe: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    swipe: false,
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 2,
                    swipe: false,
                }
            },
        ]
    });

    /*Outstation*/
    var fleet_outstation_prev_for = $('.fleet-outstation-prev-for-btn');
    var fleet_outstation_next_for = $('.fleet-outstation-next-for-btn');
    var fleet_outstation_prev_nav = $('.fleet-outstation-prev-nav-btn');
    var fleet_outstation_next_nav = $('.fleet-outstation-next-nav-btn');

    $('.fleet-outstation-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: fleet_outstation_prev_for,
        nextArrow: fleet_outstation_next_for,
        fade: true,
        infinite: false,
        asNavFor: '.fleet-outstation-slider-nav'
    });
    $('.fleet-outstation-slider-nav').slick({
        slidesToShow: 10,
        slidesToScroll: 1,
        asNavFor: '.fleet-outstation-slider-for',
        focusOnSelect: true,
        infinite: false,
        arrows: true,
        prevArrow: fleet_outstation_prev_nav,
        nextArrow: fleet_outstation_next_nav,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    swipe: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    swipe: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    swipe: false,
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 2,
                    swipe: false,
                }
            },
        ]
    });
    /* Rental */
    var fleet_rental_prev_for = $('.fleet-rental-prev-for-btn');
    var fleet_rental_next_for = $('.fleet-rental-next-for-btn');
    var fleet_rental_prev_nav = $('.fleet-rental-prev-nav-btn');
    var fleet_rental_next_nav = $('.fleet-rental-next-nav-btn');

    $('.fleet-rental-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: fleet_rental_prev_for,
        nextArrow: fleet_rental_next_for,
        fade: true,
        infinite: false,
        asNavFor: '.fleet-rental-slider-nav'
    });
    $('.fleet-rental-slider-nav').slick({
        slidesToShow: 10,
        slidesToScroll: 1,
        asNavFor: '.fleet-rental-slider-for',
        focusOnSelect: true,
        infinite: false,
        arrows: true,
        prevArrow: fleet_rental_prev_nav,
        nextArrow: fleet_rental_next_nav,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    swipe: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    swipe: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    swipe: false,
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 2,
                    swipe: false,
                }
            },
        ]
    });

    $('.indiv-fleet').click(function(event) {
        $('html, body').animate({
            'scrollTop': $(".fleet-tab-container").offset().top - 100
        });
    });
    //Footer country select
    $('.country-select').click(function(e) {
        $('.country-options').removeClass('hide');
    });
    // $('.country-options>li').click(function(e){
    //     e.stopPropagation();
    //     $('.default-hide').removeClass('default-hide');
    //     $('.selected-hide').removeClass('selected-hide');
    //     var append_content = $(this).html();
    //     $('.country-select .selected').html(append_content);
    //     $('.country-options').addClass('hide');
    //     $(this).addClass('selected-hide');
    // });
});