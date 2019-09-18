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

  /*****
    play background videos only if in viewport
  *****/
  jQuery('.bg-video').each(function() {
    var top_of_element = jQuery(this).offset().top;
    var bottom_of_element = jQuery(this).offset().top + jQuery(this).outerHeight();
    var bottom_of_screen = jQuery(window).scrollTop() + window.innerHeight;
    var top_of_screen = jQuery(window).scrollTop();
    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
      jQuery(this)[0].play();
    } else {
      jQuery(this)[0].pause();
    }
  });
});

$(document).ready(function() {
  $('a[href*="#c"]:not([href="#c"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 56 //offsets for fixed header
        }, 500);
        return false;
      }
    }
  });
  //Executed on page load with URL containing an anchor tag.
  if($(location.href.split("#")[1])) {
      var target = $('#'+location.href.split("#")[1]);
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 56//offset height of header here too.
        }, 500);
        return false;
      }
    }
});

$(document).ready(function() {
    /* html5 based validation class */
    $("form .btn").click( function(){
        $("select, input, textarea").each(function(){
            if($(this).is(":invalid")) {
                $(this).addClass("error")
            }
        })
    });
    $('select, input, textarea').on('blur', function(){
        if($(this).is(":valid") && $(this).hasClass('error')) {
            $(this).removeClass("error")
        }
    });
});
