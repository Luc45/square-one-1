<?php
declare( strict_types=1 );

namespace Tribe\Project\Templates\Controllers\Sidebar;

use Tribe\Project\Templates\Abstract_Controller;
use Tribe\Project\Templates\Component_Factory;
use Tribe\Project\Templates\Components\Sidebar;
use UnexpectedValueException;

abstract class Abstract_Sidebar extends Abstract_Controller {
	/**
	 * @var string The ID of this sidebar
	 */
	protected $sidebar_id;

	public function __construct( Component_Factory $factory ) {
		if ( ! isset( $this->sidebar_id ) ) {
			throw new UnexpectedValueException( 'Sidebar ID must be defined in extending class' );
		}
		parent::__construct( $factory );
	}

	public function render( string $path = '' ): string {
		$active = is_active_sidebar( $this->sidebar_id );

		return $this->factory->get( Sidebar::class, [
			Sidebar::ACTIVE  => $active,
			Sidebar::CONTENT => $active ? $this->get_content() : '',
		] )->render( $path );
	}

	public function get_content() {
		ob_start();
		dynamic_sidebar( $this->sidebar_id );

		return ob_get_clean();
	}
}
