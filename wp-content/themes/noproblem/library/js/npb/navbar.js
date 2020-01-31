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
      } else {
        jQuery(".navbar-fixed-top").css("top", 0);
      }
    } else {
      jQuery(".navbar-fixed-top").css("top", "-62px");
    }

    prevScrollpos = currentScrollPos;
    jQuery(".navbar-collapse").removeClass("in");
  });

  // Navbar responsive
  function getNav() {
    if (window.matchMedia("(min-width: 768px)").matches) {
      jQuery(".caret").show();
      jQuery(".nav-fa").hide();
      jQuery(".navbar-collapse a").css("width", "100%");
      jQuery(".dropdown-toggle,.dropdown-menu").on("mouseenter", function() {
        jQuery(this)
          .parent()
          .addClass("open");
      });
      jQuery(".dropdown-toggle,.dropdown-menu").on("mouseleave", function() {
        jQuery(this)
          .parent()
          .removeClass("open");
      });
    } else {
      jQuery(".navbar-collapse a").css("width", "80%");
      jQuery(".dropdown-toggle")
        .parent()
        .addClass("navToggle-mobile");

      if (!jQuery(".dropdown-toggle + i").hasClass("nav-fa")) {
        jQuery(".dropdown-toggle").after(
          ' <i class="nav-fa fa fa-chevron-down"></i>'
        );


      }

      jQuery(".navToggle-mobile").css({
        "display": "flex",
        "justify-content": "space-between",
        "flex-wrap": "wrap",
        "transition": "height 5s",
        "align-items" : "center"

      });
      jQuery(".caret").hide();
      jQuery(".nav-fa").show();

      
      jQuery("i.nav-fa").on("click", function() {
        
        if (jQuery(this).hasClass("fa-chevron-down")) {
          jQuery(this).removeClass("fa-chevron-down");
          jQuery(this).addClass("fa-chevron-up");
        } else {
          jQuery(this).removeClass("fa-chevron-up");
          jQuery(this).addClass("fa-chevron-down");
        }
        jQuery(this)
          .parent()
          .toggleClass("open");
      });
    }
  }
  getNav();
  jQuery(window).resize(function() {
    getNav();
  });
});
