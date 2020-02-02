// socialmedia bar
jQuery(document).ready(function() {
  var ckbox = jQuery(".socialmedia__checkbox");

  jQuery("input").on("click", function() {
    if (ckbox.is(":checked")) {
      jQuery(".socialmedia").animate({right: '0px'},"slow");
      jQuery(".socialmedia__icon").animate({margin: "0 20px 5px"});
      jQuery(".socialmedia__rotated").animate({opacity: '0'},"slow");
      jQuery(".socialmedia__rotated").css("visibility", "hidden");
      jQuery(".socialmedia__item").animate({opacity: '1'},"slow");


    } else {
      jQuery(".socialmedia").animate({right: '-14px'},"slow");
      jQuery(".socialmedia__icon").animate({margin: "0 7px 5px"});
      jQuery(".socialmedia__rotated").animate({opacity: '1'},"slow");
      jQuery(".socialmedia__rotated").css("visibility", "visible");
      jQuery(".socialmedia__item").animate({opacity: '0'},"slow");
    }
  });
  jQuery('.wechat').on('click',function(){
    jQuery('#wechatId').css('border','solid 2px red').fadeOut(500);
    jQuery('#wechatId').fadeIn(500);
    setTimeout(function(){
      jQuery('#wechatId').css('border','solid 2px transparent');
    },800);
    setTimeout(function(){
      jQuery('#wechatId').css('border','solid 2px red').fadeOut(500);
      jQuery('#wechatId').fadeIn(500);
      setTimeout(function(){
        jQuery('#wechatId').css('border','solid 2px transparent');
      },1000);
    },1000);
    

  })

});