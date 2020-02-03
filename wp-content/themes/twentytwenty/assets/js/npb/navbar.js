jQuery(document).ready(function() {
  if (jQuery(".featured-media-inner").css("height")) {
    jQuery(".featured-media-inner").appendTo(".header__banner");
  }

  if (jQuery(".cvwp-video-player").css("height")) {
    jQuery(".cvwp-video-player").appendTo(".header__banner");
  }

  var navHeight = jQuery("#site-header").height();
  var headerHeight = 0;


  if (jQuery("#wpadminbar").is(":visible")) {
    var adminTools = true;
  }

  var prevScrollpos = jQuery(window).scrollTop();
  jQuery(window).on('scroll resize',function() {
    var currentScrollPos = jQuery(window).scrollTop();

    if (currentScrollPos >= headerHeight) {
      jQuery("#site-header").addClass("navfix");
    }
    if (currentScrollPos < headerHeight) {
      if (adminTools) {
        jQuery(".navfix").css("top", 0);
      }
      jQuery("#site-header").removeClass("navfix");
    }

    if (headerHeight == null && currentScrollPos == 0) {
      jQuery("#site-header").removeClass("navfix");
    }

    if (
      headerHeight + navHeight > currentScrollPos ||
      prevScrollpos > currentScrollPos
    ) {
      if (adminTools) {
        jQuery(".navfix").css("top", "32px");
      } else {
        jQuery(".navfix").css("top", 0);
      }
    } else {
      jQuery(".navfix").css("top", "-62px");
    }

    if (headerHeight == null && currentScrollPos == 0) {
      jQuery("#site-header").css("top", 0);
    }

    // console.log("headerHeight: " + headerHeight + " currentScrollPos: " + currentScrollPos);


    prevScrollpos = currentScrollPos;

    console.log(jQuery('.header__banner iframe').css('height'));

  });

});
