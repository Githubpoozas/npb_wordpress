<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @since 1.0.0
 */
get_header();
?>

	<div class="container">
		<div class="row content">
			<div id="primary" <?php bavotasan_primary_attr(); ?>>
			
			<?php

	

	

if ( have_posts() ) {

	while ( have_posts() ) {
		the_post();

		get_template_part( 'template-parts/content', get_post_type() );
	}
}

?>


			</div>

			<?php 
			/*
			get_sidebar(); 
			*/
			?>

		</div>
	</div>

<?php get_footer(); ?>