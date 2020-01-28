// navbar
function myFunction() {
  var x = document.getElementById("site-navigation");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

var navHeight = jQuery(".navbar").height();


if (jQuery(".header__banner").css("height")) {
  var headerHeight = jQuery(".header__banner").height();
} else {
  var headerHeight = jQuery(".header__bannerGray").height();
}

var prevScrollpos = jQuery(window).scrollTop();
jQuery(window).scroll(function() {
  var currentScrollPos = jQuery(window).scrollTop();

  if (currentScrollPos >= headerHeight) {
    jQuery(".navbar").addClass("navfix");
    jQuery(".underNav").addClass("u-margin-under-fix-Nav");
  }
  if (currentScrollPos < headerHeight) {
    jQuery(".navbar").removeClass("navfix");
    jQuery(".underNav").removeClass("u-margin-under-fix-Nav");
  }

  if ((headerHeight + navHeight) > currentScrollPos || prevScrollpos > currentScrollPos) {
    jQuery(".navfix").css("top", "0");
  } else {
    jQuery(".navfix").css("top", "-62px");
  }

  prevScrollpos = currentScrollPos;
});

if(jQuery('#wpadminbar')){
  console.log("yes")
} else{
  console.log("Noooooooooo!")
}