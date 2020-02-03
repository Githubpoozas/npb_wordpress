jQuery(document).ready(function() {
  if(jQuery('.featured-media-inner').css("height")){
    jQuery('.featured-media-inner').appendTo('.header__banner');
  console.log('move feature image to head banner');
  } 


  if(jQuery('.cvwp-video-player').css("height")){
    jQuery('.cvwp-video-player').appendTo('.header__banner');
  console.log('move feature video to head banner');
  } 


  var navHeight = jQuery("#site-header").height();
  var headerHeight = 0;



  if (jQuery(".header__banner").css("height") && !jQuery(".header__bannerGray").css("height")) {
    headerHeight = jQuery(".header__banner").height();
  }  else if (jQuery(".header__banner").css("height") && jQuery(".header__bannerGray").css("height")) {
    headerHeight = jQuery(".header__banner").height();
    jQuery(".header__bannerGray").hide();
  }
  else {
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
    }else {
      jQuery(".navfix").css("top", "-62px");
    }

    if(headerHeight == null && currentScrollPos == 0) {
      jQuery("#site-header").css("top", 0);
    }
    prevScrollpos = currentScrollPos;
  });

});
