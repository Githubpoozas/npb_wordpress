<?php
/**
* Template Name: noproblem home template
* Description: noproblem home template
*/ 
?>
    <!-- header banner -->
    <div class="header__banner">
	<img src=" <?php echo content_url(); ?>/1white_1.jpg" alt="">
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
