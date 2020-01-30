// navbar
// function myFunction() {
//   var x = document.getElementById("site-navigation");
//   if (x.className === "navbar") {
//     x.className += " responsive";
//   } else {
//     x.className = "navbar";
//   }
// }

jQuery(document).ready(function() {
  var navHeight = jQuery(".navbar").height();

  if (jQuery(".header__banner").css("height")) {
    var headerHeight = jQuery(".header__banner").height();
  } else {
    var headerHeight = jQuery(".header__bannerGray").height();
  }

  if (jQuery("#wpadminbar").is(":visible")) {
    var adminTools = true;
  }

  var prevScrollpos = jQuery(window).scrollTop();
  jQuery(window).scroll(function() {
    var currentScrollPos = jQuery(window).scrollTop();

    if (currentScrollPos >= headerHeight) {
      jQuery(".navbar").addClass("navbar-fixed-top");
    }
    if (currentScrollPos < headerHeight) {
      if (adminTools) {
        jQuery(".navbar-fixed-top").css("top", 0);
      }
      jQuery(".navbar").removeClass("navbar-fixed-top");
    }

    if (
      headerHeight + navHeight > currentScrollPos ||
      prevScrollpos > currentScrollPos
    ) {
      if (adminTools) {
        jQuery(".navbar-fixed-top").css("top", "32px");
      } else{
        jQuery(".navbar-fixed-top").css("top", 0);
      }
    } else {
      jQuery(".navbar-fixed-top").css("top", "-62px");
      // jQuery("#site-navigation").find('.navbar-collapse').removeClass('in');




      // setTimeout(function(){ alert("Hello"); }, 3000);


    }


    prevScrollpos = currentScrollPos;
  });
});
