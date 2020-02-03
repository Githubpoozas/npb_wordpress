<?php
/**
* Template Name: fix video header template
* Description: fix video header template
*/ 
?>
    <!-- header banner -->
    <div class="header__banner">
	<img src="" alt="">
    </div>
<?php
get_header();
?>

<main id="site-content" role="main">

	<?php

	if ( have_posts() ) {

		while ( have_posts() ) {
			the_post();

			get_template_part( 'template-parts/content', get_post_type() );
		}
	}

	?>

</main><!-- #site-content -->


<?php get_footer(); ?>
