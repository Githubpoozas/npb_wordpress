// navbar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var navHeight = $(".topnav").height();

if ($(".header__banner").css("height")) {
  var headerHeight = $(".header__banner").height();
} else {
  var headerHeight = $(".header__bannerGray").height();
}

var prevScrollpos = $(window).scrollTop();
$(window).scroll(function() {
  var currentScrollPos = $(window).scrollTop();

  if (currentScrollPos >= headerHeight) {
    $(".topnav").addClass("navfix");
    $(".underNav").addClass("u-margin-under-fix-Nav");
  }
  if (currentScrollPos < headerHeight) {
    $(".topnav").removeClass("navfix");
    $(".underNav").removeClass("u-margin-under-fix-Nav");
  }

  if ((headerHeight + navHeight) > currentScrollPos || prevScrollpos > currentScrollPos) {
    $(".navfix").css("top", "0");
  } else {
    $(".navfix").css("top", "-62px");
  }

  prevScrollpos = currentScrollPos;
});
