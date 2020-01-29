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
    var top = "32px";
  } else {
    var top = "0";
  }

  var prevScrollpos = jQuery(window).scrollTop();
  jQuery(window).scroll(function() {
    var currentScrollPos = jQuery(window).scrollTop();

    if (currentScrollPos >= headerHeight) {
      jQuery(".navbar").addClass("navbar-fixed-top");
      jQuery(".underNav").addClass("u-margin-under-fix-Nav");
    }
    if (currentScrollPos < headerHeight) {
      jQuery(".navbar").removeClass("navbar-fixed-top");
      jQuery(".underNav").removeClass("u-margin-under-fix-Nav");
    }

    if (
      headerHeight + navHeight > currentScrollPos ||
      prevScrollpos > currentScrollPos
    ) {
      jQuery(".navbar-fixed-top").css("top", top);
    } else {
      jQuery(".navbar-fixed-top").css("top", "-62px");
    }

    prevScrollpos = currentScrollPos;
  });
});
