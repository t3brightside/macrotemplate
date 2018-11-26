jQuery(document).ready(function() {
// add remove mobile class on page resize
  var lastWidth = jQuery(window).width();
  jQuery(window).resize(function() {
    if (jQuery(window).width() != lastWidth) {
      if (jQuery(window).width() < 1100) {
        jQuery('#menu').removeClass('mobile');
        jQuery('#menu').hide();
        jQuery('.hmbrgr').removeClass('open');
      }
      if (jQuery(window).width() > 1100) {
        jQuery('#menu').show();
      }
      lastWidth = jQuery(window).width();
    }
  });

// open-close mobile menu with the hamburger
  jQuery('.hmbrgr').click(function() {
    jQuery('#menu').slideToggle();
    jQuery('#menu').toggleClass('mobile');
    jQuery('.hmbrgr').toggleClass('open');
    jQuery('.header-bg').addClass('show');
  });

// close menu if clicking outside menu container
  jQuery('#content-header, #content, #footer').on('click', function(e) {
    jQuery('#menu.mobile').slideUp();
    jQuery('#menu').removeClass('mobile');
    jQuery('.hmbrgr').removeClass('open');
  });

  jQuery('#menu.mobile li.act').addClass('open').children('ul').show();
  jQuery('.submenu-button').on('click', function(){
    var element = jQuery(this).parent('li');
    if (element.hasClass('open')) {
      element.removeClass('open');
    } else {
      element.addClass('open');
    }
  });
});
