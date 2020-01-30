jQuery(document).ready(function() {


( function( $ ) {
	// Responsive videos
	var $all_videos = jQuery( '.entry-content' ).find( 'iframe[src*="player.vimeo.com"], iframe[src*="youtube.com"], iframe[src*="youtube-nocookie.com"], iframe[src*="dailymotion.com"],iframe[src*="kickstarter.com"][src*="video.html"], object, embed' ),
		$window = jQuery(window),
		$more_site = jQuery( '#more-site' ),
		$card = jQuery( '.title-card' ),
		window_height, window_width,
		is_rtl = ( jQuery( 'body' ).hasClass( 'rtl' ) ) ? false : true;

	$all_videos.not( 'object object' ).each( function() {
		var $video = jQuery(this);

		if ( $video.parents( 'object' ).length ) {
			return;
		}

		if ( ! $video.prop( 'id' ) ) {
			$video.attr( 'id', 'rvw' + Math.floor( Math.random() * 999999 ) );
		}

		$video
			.wrap( '<div class="responsive-video-wrapper" style="padding-top: ' + ( $video.attr( 'height' ) / $video.attr( 'width' ) * 100 ) + '%" />' )
			.removeAttr( 'height' )
			.removeAttr( 'width' );
	} );

	jQuery( 'a[href="#"]' ).click( function(e) {
		e.preventDefault();
	} );

	// Shortcode
	if ( arcade_basic_vars.carousel ) {
		var autoplay = ( arcade_basic_vars.autoplay ) ? '' : 'pause';
		jQuery( '.carousel' ).carousel( autoplay );
	}

	if ( arcade_basic_vars.tooltip ) {
		jQuery( 'a[rel="tooltip"]' ).tooltip();
	}

	if ( arcade_basic_vars.tabs ) {
		jQuery( '.nav-tabs a' ).click( function(e) {
			e.preventDefault();
			jQuery(this).tab( 'show' );
		} );
	}

	// $( '#site-navigation' ).find( '.dropdown-toggle' ).click( function(e) {
	// 	e.preventDefault();

	// 	$( '#site-navigation' ).find( 'li' ).not( $(this).parents() ).removeClass( 'open' );
	// 	$(this).parent().toggleClass( 'open' );
	// } );
	// $( '#site-navigation' ).find( '.dropdown-toggle' ).hover( function(e) {
	// 	e.preventDefault();

	// 	$( '#site-navigation' ).find( 'li' ).not( $(this).parents() ).removeClass( 'open' );
	// 	$(this).parent().addClass( 'open' );
	// },function(){
	// 	$(this).parent().removeClass( 'open' );
	// } );
	// $(".dropdown-menu").hover(function(e){
	// 	e.preventDefault();
	// 	$(this).parent().addClass( 'open' );
	// },function(){
	// 	$(this).parent().removeClass( 'open' );
	// } )
	
	// jQuery( '.dropdown-toggle,.dropdown-menu' ).on('mouseenter', function() {
	// 	jQuery(this).parent().addClass( 'open' ); 
	// });
	// jQuery( '.dropdown-toggle,.dropdown-menu' ).on('mouseleave', function() {
	// 	jQuery(this).parent().removeClass( 'open' ); 
	// });



jQuery(window).resize(function(){

});

if (window.matchMedia("(min-width: 768px)").matches) {
		jQuery( '.dropdown-toggle,.dropdown-menu' ).on('mouseenter', function() {
		jQuery(this).parent().addClass( 'open' ); 
	});
	jQuery( '.dropdown-toggle,.dropdown-menu' ).on('mouseleave', function() {
		jQuery(this).parent().removeClass( 'open' ); 
	});
  } else {
	console.log("less thant 768px");
	jQuery('.navbar-collapse a').css('width','80%');
	jQuery('.dropdown-toggle').parent().addClass('navToggle-mobile');
	jQuery('.dropdown-toggle').after(' <i class="nav-fa fa fa-chevron-down"></i>');
	jQuery('.navToggle-mobile').css({
		'display':'flex',
		'justify-content':'space-between',
		'flex-wrap':'wrap',
		'transition':'height 5s'
	});
	jQuery('.caret').hide();
	jQuery("i.nav-fa").on('click',function(){
		if(jQuery(this).hasClass('fa-chevron-down')){
			jQuery(this).removeClass('fa-chevron-down');
			jQuery(this).addClass('fa-chevron-up');
		} else{
			jQuery(this).removeClass('fa-chevron-up');
			jQuery(this).addClass('fa-chevron-down');
		}
		jQuery(this).parent().toggleClass('open');
	  });




  }


	

    // Arc the site title
    if ( 0 != arcade_basic_vars.arc ) {
        jQuery( '#site-title a' ).arctext( {
        	radius: arcade_basic_vars.arc,
        	rotate: is_rtl,
        	fitText	: arcade_basic_vars.fittext
        } );
    }

    // Set up jumbo header image
    if ( $card.length ) {
        $window
            .on( 'resize.title-card', function() {
                window_width = $window.width();
				window_height = ( jQuery( 'body' ).hasClass( 'admin-bar' ) ) ? $window.height() - 32 : $window.height();
				if ( window_width < 599 || ! jQuery( 'body' ).hasClass( 'home' ) || ( jQuery( 'body' ).hasClass( 'home' ) && jQuery( 'body' ).hasClass( 'paged' ) ) ) {
					$card.css( 'height', 300 );
					$more_site.removeData( 'scroll-to' ).attr( 'data-scroll-to', 300 );
				} else {
					$card.css( 'height', window_height );
					$more_site.removeData( 'scroll-to' ).attr( 'data-scroll-to', window_height );
				}
			} )
			.trigger( 'resize.title-card' )
			.scroll( function () {
				if ( $window.scrollTop() >= ( $more_site.data( 'scroll-to' ) - 50 ) ) {
					jQuery( '#site-navigation' ).addClass( 'black' );
				} else {
					jQuery( '#site-navigation' ).removeClass( 'black' );
				}
			} );

        $card.fillsize( '> img.header-img' );
	}

    // Scroll past jumbo header image
	$more_site.click( function() {
		jQuery( 'html, body' ).animate( { scrollTop: ( $more_site.data( 'scroll-to' ) - 50 ) }, 'slow', 'swing' );
	} );
} )( jQuery );


});