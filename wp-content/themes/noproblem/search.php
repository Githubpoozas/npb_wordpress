<?php
/**
 * The template for displaying Search Results pages.
 *
 * @since 1.0.0
 */
get_header(); ?>

	<div class="container">
		<div class="row">
            <section id="primary" <?php bavotasan_primary_attr(); ?>>
        		<?php if ( have_posts() ) : ?>

        			<header id="archive-header">
						<h1 class="page-title"><?php
							global $wp_query;
						    $num = $wp_query->found_posts;
							printf( '%1$s "%2$s"',
							    $num . __( ' search results for', 'arcade-basic'),
							    get_search_query()
							);
						?></h1>
        			</header>
        			<?php
        			while ( have_posts() ) : the_post();
        				get_template_part( 'template-parts/content', get_post_format() );
        			endwhile;

        			the_posts_navigation();
        		else :
        			get_template_part( 'template-parts/content', 'none' );
        		endif;
        		?>
        	</section><!-- #primary.c8 -->
			<?php 
			/*
			get_sidebar(); 
			*/
			?>
        </div>
    </div>

<?php get_footer(); ?>