<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'BXlnof m5>q!+,|[M_ -YZaTR@-<Jd55I.bt=s]x4ZPfo;dM)5,R},r9vDCzCM}B' );
define( 'SECURE_AUTH_KEY',  'm0t%.1xdC9vRUqi?y4?Dg-dA:63di*cTbm!h(aiBbz^FSLslYMNC6[WBu5#bY}qv' );
define( 'LOGGED_IN_KEY',    '(RxB0?.c*u!/Mqlz1!coNic<qQoDVai{6gq](-9a%,{2QB$|q}c6z|;}+OCktt3i' );
define( 'NONCE_KEY',        'HP}XC(<95ekm<q~o(4h81BkS3:h=iK%c)~-J03l*5;T!?nIrkhrPyqa?3^-r$2x9' );
define( 'AUTH_SALT',        'kC1+TN_Z9.bT5:-=p,@3Ao{UynX7pzfD{w{[4>[-_(_F7IIXFCxr3DuBQM3!e@W,' );
define( 'SECURE_AUTH_SALT', '+VNt&XD,F=&J&>?Fu)qpdoYTx$&Y10=p)Dy{kC5kp>DOq+B6<-=Phb1ZOzj t#eq' );
define( 'LOGGED_IN_SALT',   'o_^E8;@D -*]{nLm*Ua[W0@QN[E9s~],+pa@_vJLko( ,lJ8-xPc`_d)0l=WhS)G' );
define( 'NONCE_SALT',       'NC8e=/b*=~,IT6a`<$Uk$]WmpEtYv{lC1_)tiT}bWPd:T, $||7-cvvt08*ev=t$' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', true );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
