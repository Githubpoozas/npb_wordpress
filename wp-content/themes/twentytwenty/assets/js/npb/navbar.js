jQuery(document).ready(function() {
  var navHeight = jQuery("#site-header").height();
  var headerHeight = 0;
  if (jQuery(".header__banner").css("height")) {
    headerHeight = jQuery(".header__banner").height();
  } else {
    headerHeight = jQuery(".header__bannerGray").height();
  }

  if (jQuery("#wpadminbar").is(":visible")) {
    var adminTools = true;

  }

  var prevScrollpos = jQuery(window).scrollTop();
  jQuery(window).scroll(function() {
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

    prevScrollpos = currentScrollPos;
  });

});
