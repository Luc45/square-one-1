<?php

namespace Tribe\Project\Templates\Components;

/**
 * Class Button
 *
 * @property string   $type
 * @property string   $aria_label
 * @property string[] $classes
 * @property string[] $attrs
 * @property string   $prepend
 * @property string   $text
 * @property string   $append
 */
class Button extends Context {
	public const TYPE       = 'type';
	public const ARIA_LABEL = 'aria_label';
	public const CLASSES    = 'classes';
	public const ATTRS      = 'attrs';
	public const PREPEND    = 'prepend';
	public const TEXT       = 'text';
	public const APPEND     = 'append';

	protected $path = __DIR__ . '/button.twig';

	protected $properties = [
		self::TYPE       => [
			self::DEFAULT => 'button',
		],
		self::ARIA_LABEL => [
			self::DEFAULT => '',
		],
		self::CLASSES    => [
			self::DEFAULT       => [],
			self::MERGE_CLASSES => [],
		],
		self::ATTRS      => [
			self::DEFAULT => [],
			self::MERGE_ATTRIBUTES => [],
		],
		self::PREPEND    => [
			self::DEFAULT => '',
		],
		self::TEXT       => [
			self::DEFAULT => '',
		],
		self::APPEND     => [
			self::DEFAULT => '',
		],
	];

	public function get_data(): array {
		if ( $this->type ) {
			$this->properties[ self::ATTRS ][ self::VALUE ]['type'] = $this->type;
		}

		if ( $this->aria_label ) {
			$this->properties[ self::ATTRS ][ self::VALUE ]['aria-label'] = $this->aria_label;
		}

		return parent::get_data();
	}
}
