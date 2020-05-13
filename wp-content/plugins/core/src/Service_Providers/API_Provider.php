<?php
/**
 * The API class that handles integrations with WordPress.
 *
 * @package    SquareOne
 * @subpackage API
 */
declare( strict_types=1 );

namespace Tribe\Project\Service_Providers;


use Pimple\Container;
use Tribe\Project\API\Indexed_Objects\Indexable_Factory;
use Tribe\Project\API\Indexer\WPDB;
use Tribe\Project\API\WP\Hookable;
use Tribe\Project\API\WP\WP_Post_Controller;
use Tribe\Project\Container\Service_Provider;
use Tribe\Project\Admin\Resources\Scripts;
use Tribe\Project\Admin\Resources\Styles;
use WP_Post;

class API_Provider extends Service_Provider {

	public const INDEXABLE_FACTORY = 'api.indexable_factory';
	public const INDEXER           = 'api.indexer';
	public const WP_POST           = 'api.wp_post_controller';

	/**
	 * Register the post indexer.
	 *
	 * @param Container $container
	 */
	public function register( Container $container ): void {
		$container[ self::INDEXABLE_FACTORY ] = static function () use ( $container ): Indexable_Factory {
			return new Indexable_Factory();
		};

		$container[ self::INDEXER ] = static function () use ( $container ): WPDB {
			return new WPDB();
		};

		$container[ self::WP_POST ] = static function () use ( $container ): WP_Post_Controller {
			return new WP_Post_Controller(
				$container[ self::INDEXER ],
				$container[ self::INDEXABLE_FACTORY ]
			);
		};

		/**
		 * @see Hookable::save_post()
		 */
		add_action( 'save_post', static function ( int $post_id, WP_Post $post ) use ( $container ): void {
			$container[ self::WP_POST ]->save_post( $post );
		}, 10, 2 );

		/**
		 * @see Hookable::delete_post()
		 */
		add_action( 'delete_post', static function ( int $post_id, WP_Post $post ) use ( $container ): void {
			$container[ self::WP_POST ]->delete_post( $post );
		}, 10, 2 );
	}
}
