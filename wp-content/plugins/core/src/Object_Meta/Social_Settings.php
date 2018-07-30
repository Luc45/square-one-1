<?php

namespace Tribe\Project\Object_Meta;

use Tribe\Libs\ACF;

/**
 * Class Post
 * @package Tribe\Project\Object_Meta
 */
class Social_Settings extends ACF\ACF_Meta_Group {

	const NAME = 'social_settings';

	const FACEBOOK  = 'facebook';
	const TWITTER   = 'twitter';
	const YOUTUBE   = 'youtube';
	const LINKEDIN  = 'linkedin';
	const PINTEREST = 'pinterest';
	const INSTAGRAM = 'instagram';
	const GOOGLE    = 'google';

	public function get_keys() {
		return [
			static::FACEBOOK,
			static::TWITTER,
			static::YOUTUBE,
			static::LINKEDIN,
			static::PINTEREST,
			static::INSTAGRAM,
			static::GOOGLE,
		];
	}

	public function get_group_config() {
		$group = new ACF\Group( self::NAME, $this->object_types );
		$group->set( 'title', __( 'Social Media Settings', 'tribe' ) );
		$group->set( 'position', 'normal' );

		$group->add_field( $this->get_social_field( __( 'Facebook', 'tribe' ), self::FACEBOOK ) );
		$group->add_field( $this->get_social_field( __( 'Twitter', 'tribe' ), self::TWITTER ) );
		$group->add_field( $this->get_social_field( __( 'LinkedIn', 'tribe' ), self::LINKEDIN ) );
		$group->add_field( $this->get_social_field( __( 'Pinterest', 'tribe' ), self::PINTEREST ) );
		$group->add_field( $this->get_social_field( __( 'YouTube', 'tribe' ), self::YOUTUBE ) );
		$group->add_field( $this->get_social_field( __( 'Instagram', 'tribe' ), self::INSTAGRAM ) );
		$group->add_field( $this->get_social_field( __( 'Google', 'tribe' ), self::GOOGLE ) );

		return $group->get_attributes();
	}

	private function get_social_field( $field_label, $field_id, $type = 'url' ) {
		$field = new ACF\Field( self::NAME . '_' . $field_id );
		$field->set_attributes( [
			'label' => $field_label,
			'name'  => $field_id,
			'type'  => $type,
		] );

		return $field;
	}

}
