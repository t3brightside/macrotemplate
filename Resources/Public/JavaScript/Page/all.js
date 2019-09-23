jQuery(document).ready(function() {
    var scroll = jQuery(window).scrollTop();
    if (scroll >= 45) {
        jQuery("#header").addClass("scrolled");
        jQuery(".header-bg").addClass("show");
    } else {
        jQuery("#header").removeClass("scrolled");
        if (!jQuery('#menu').hasClass("mobile")) {
            jQuery(".header-bg").removeClass("show");
        }
    }
    jQuery("select").parent().addClass('select');
});
jQuery(window).scroll(function() {
    var scroll = jQuery(window).scrollTop();
    if (scroll >= 45) {
        jQuery("#header").addClass("scrolled");
        jQuery(".header-bg").addClass("show");
    } else {
        jQuery("#header").removeClass("scrolled");
        if (!jQuery('#menu').hasClass("mobile")) {
            jQuery(".header-bg").removeClass("show");
        }
    }

    // play background videos only if in viewport
    $('.bg-video').each(function() {
        var top_of_element = $(this).offset().top;
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
        var top_of_screen = $(window).scrollTop();
        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
            $(this)[0].play();
        } else {
            $(this)[0].pause();
            /* bring back hidden menu and content if out of viewport */
            if ($(this).parent().hasClass('active')) {
                $('#header').fadeToggle();
                $(this).parent().children('.contentWidth, .overlay').fadeToggle();
                $(this).parent().children('.clearframe').removeClass('active');
                $(this).parent().removeClass('active');
                $(this).parent().css('height', '');
            }
        }
    });
    $('.ge-section').each(function() {
        var top_of_element = $(this).offset().top;
        var bottom_of_element = $(this).offset().top + $(this).height();
        var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
        var top_of_screen = $(window).scrollTop();
        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {

        } else {
            /* bring back hidden menu and content if out of viewport */
            if ($(this).hasClass('active')) {
                $('#header').fadeToggle();
                $(this).children('.contentWidth, .overlay').fadeToggle();
                $(this).children('.clearframe').removeClass('active');
                $(this).removeClass('active');
                $(this).css('height', '');
            }
        }
    });
    // scroll to position on anchor click
    $('a[href*="#c"]:not([href="#c"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 56 //offsets for fixed header
                }, 500);
                return false;
            }
        }
    });

    //Executed on page load with URL containing an anchor tag.
    if ($(location.href.split("#")[1])) {
        var target = $('#' + location.href.split("#")[1]);
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - 56 //offset height of header here too.
            }, 500);
            return false;
        }
    }

    // html5 based validation class
    $("form .btn").click(function() {
        $("select, input, textarea").each(function() {
            if ($(this).is(":invalid")) {
                $(this).addClass("error")
            }
        })
    });
    $('select, input, textarea').on('blur', function() {
        if (!$(this).val()) {} else {
            if ($(this).is(":invalid")) {
                $(this).addClass("error")
            }
            if ($(this).is(":valid") && $(this).hasClass('error')) {
                $(this).removeClass("error");
                $(this).addClass("valid");
            }
            if ($(this).is(":valid")) {
                $(this).addClass("valid");
            }
        }
    });
});

// hide header and content if sound button is clicked
$(document).ready(function() {
    $(".sound").click(function() {
        if ($(this).parent().children('.bg-video').prop('muted')) {
            $(this).parent().children('.bg-video').prop('muted', false);
        } else {
            $(this).parent().children('.bg-video').prop('muted', true);
        }
        $(this).toggleClass('active');

    });
    $(".clearframe").click(function() {
        var height = $(this).parent().height();
        if (!$(this).parent().hasClass('fullheight')) {
            $(this).parent().height(height);
        }
        if ($(this).parent().css('height') && $(this).parent().hasClass('active')) {
            $(this).parent().css('height', '');
        }
        $("#header").fadeToggle();
        $(this).toggleClass('active');
        $(this).parent().toggleClass('active');
        $(this).parent().children('.contentWidth, .overlay').fadeToggle();
    });
});
