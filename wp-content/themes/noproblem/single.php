<?php
/**
 * The Template for displaying all single posts.
 *
 * @since 1.0.0
 */
get_header(); ?>

<?php
$wpblog_fetrdimg = wp_get_attachment_url( get_post_thumbnail_id($post->ID) ); 
?>
<div class="wpblog-featured-image"
    <?php if( $wpblog_fetrdimg ) : ?>
 	style="wpblog-featured-background-image: url(<?php echo $wpblog_fetrdimg; ?>);"
    <?php endif; ?>
        >
  </div>

	<div class="container">
		<div class="row content">
			<div id="primary" <?php bavotasan_primary_attr(); ?>>
				<?php while ( have_posts() ) : the_post(); ?>

					<?php get_template_part( 'template-parts/content', get_post_format() ); ?>

					<div id="posts-pagination" class="clearfix">
						<h3 class="sr-only"><?php _e( 'Post navigation', 'arcade-basic' ); ?></h3>
						<div class="previous pull-left"><?php previous_post_link( '%link', __( '&larr; %title', 'arcade-basic' ) ); ?></div>
						<div class="next pull-right"><?php next_post_link( '%link', __( '%title &rarr;', 'arcade-basic' ) ); ?></div>
					</div><!-- #posts-pagination -->

					<?php 
					/*
					comments_template( '', true );
					*/
					?>

				<?php endwhile; // end of the loop. ?>
			</div>

			<?php
			/*
			get_sidebar(); 
			*/
			?>


		</div>
	</div>

<?php get_footer(); ?>