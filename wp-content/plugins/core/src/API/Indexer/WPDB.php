<?php


namespace Tribe\Project\API\Indexer;


use Tribe\Project\API\Indexed_Objects\Indexable;

class WPDB implements Indexer_Service {

	/**
	 * @inheritDoc
	 */
	public function index_upgrade(): bool {
		// TODO: Implement index_upgrade() method.
	}

	/**
	 * @inheritDoc
	 */
	public function save( Indexable $indexable ): void {
		// TODO: Implement save() method.
	}

	/**
	 * @inheritDoc
	 */
	public function delete( Indexable $indexable ): void {
		// TODO: Implement delete() method.
	}
}
