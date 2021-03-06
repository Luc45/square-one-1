<?php
declare( strict_types=1 );

namespace Tribe\Project\Templates\Components\Footer;

use Tribe\Project\Templates\Components\Context;

class Site_Footer extends Context {
	public const NAVIGATION = 'navigation';
	public const SOCIAL     = 'social_follow';
	public const COPYRIGHT  = 'copyright';
	public const HOME_URL   = 'home_url';
	public const BLOG_NAME  = 'name';

	protected $path = __DIR__ . '/site-footer.twig';

	protected $properties = [
		self::NAVIGATION => [
			self::DEFAULT => '',
		],
		self::SOCIAL     => [
			self::DEFAULT => [],
		],
		self::COPYRIGHT  => [
			self::DEFAULT => '',
		],
		self::HOME_URL   => [
			self::DEFAULT => '',
		],
		self::BLOG_NAME  => [
			self::DEFAULT => '',
		],
	];
}
