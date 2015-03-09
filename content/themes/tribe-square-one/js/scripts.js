/**
  *
  * Square One: JS Scripts
  *
  * @namespace modern_tribe
  *
  * @since 1.1.0 built on 01-06-2015
  * @desc The modern_tribe namespace stores all custom functions, data, application states
  * and an empty events object to bind custom events to.
  * It is aliased to the letter "t" in the code below for the sake of brevity.
  * modern_tribe_i18n is aliased to nls and contains all language strings.
  * modern_tribe_config is aliased to config and contains all config info required by js from wp.
  *
  * DO NOT EDIT THIS JS FILE DIRECTLY. IT IS GENERATED BY GRUNT.
  * -------------------------------------------------------------
  * See the js directory and edit the source files in the "scripts"
  * directory of this folder.
  *
  */

var modern_tribe = window.modern_tribe || {};

(function (window, document, $, t, nls, config, m) {

/**
 * @namespace modern_tribe.plugins
 * @since 1.0
 * @desc modern_tribe.plugins is where we add custom jquery plugins we write. Other non jquery functions used globally go in the functions file.
 */

$.extend( verge );

// Function: get height of hidden element
$.fn.get_hidden_height = function() {

    var $this = $(this ),
        zindex = $this.css('z-index'),
        pos = $this.css('position'),
        d_height = '0px',
        t_height = $this.css({
            'visibility': 'hidden',
            'height'    : 'auto',
            'position'  : 'fixed',
            'z-index'   : -1
        }).outerHeight();

    $this.css({
        'visibility': 'visible',
        'height'    : d_height,
        'position'  : pos,
        'z-index'   : zindex
    });

    return t_height;

};

/**
 * @namespace modern_tribe.br
 * @desc modern_tribe.br is where we have some handy browser tests we shouldn't use but probably will.
 */

t.br = {
	chrome : !!window.chrome,
	firefox: typeof InstallTrigger !== 'undefined',
	ie     : /*@cc_on!@*/false || document.documentMode,
	legacy : false,
	ios    : !!navigator.userAgent.match(/(iPod|iPhone|iPad)/i),
	safari : Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0,
	opera  : !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0,
	os     : navigator.platform
};


/**
 * @namespace modern_tribe.data
 * @desc modern_tribe.data is where we can store/pass data shared by multiple modules during js operations.
 */

t.data = {};

/**
 * @namespace modern_tribe.el
 * @desc modern_tribe.el is where we cache all of our needed DOM elements as jQuery objects.
 */

t.$el = {
	body     : $( 'body' ),
	doc      : $( document ),
	hb       : $( 'html, body' ),
	html     : $( 'html' ),
	site_wrap: $( '#site-wrap' ),
	window   : $( window )
};


/**
 * @function modern_tribe.bind_events
 * @desc modern_tribe.bind_events is where we bind event handlers that are global to the functioning of the site.
 * Handlers specific to modules should be contained within their respective event handler functions.
 */


t.bind_events = function() {

	/***
	 * @handler Window Events
	 * @desc These handlers listen on the window object for resize/load etc events.
	 */

	t.$el.window
		.on( 'resize', _.debounce( t.core.execute_resize, 200, false ) )
		.on( 'load', t.core.execute_load );

};
/**
 * @function modern_tribe.namespaces
 * @since 1.0
 * @desc modern_tribe.namespaces setups any namespaces were it makes more sense to do so here than in each submodule.
 */

t.core = t.core || {};
t.util = t.util || {};

/**
 * @function modern_tribe.core.execute_load
 * @since 1.0
 * @desc modern_tribe.core.execute_load brings together all functions that must execute on window load.
 */

t.core.execute_load = function() {

	// @ifdef DEBUG
	console.time( 't.fn.execute_load timer' );
	// @endif

	t.core.update_viewport_dims();

	// @ifdef DEBUG
	console.timeEnd( 't.fn.execute_load timer' );
	// @endif

};
/**
 * @function modern_tribe.core.execute_ready
 * @since 1.0
 * @desc modern_tribe.core.execute_ready brings together all functions that must execute on doc ready.
 */

t.core.execute_ready = function() {

	// @ifdef DEBUG
	console.time( 't.fn.execute_ready timer' );
	// @endif

	// core inits

	t.core.execute_tests();
	t.core.update_viewport_dims();
	t.core.initialize_plugins();
	t.core.responsive_modules_init();

	t.bind_events();

	// module inits


	// @ifdef DEBUG
	console.timeEnd( 't.fn.execute_ready timer' );
	// @endif

};

/**
 * @function modern_tribe.core.execute_resize
 * @since 1.0
 * @desc modern_tribe.core.execute_resize brings together all functions that must execute on the end of browser resize.
 */

t.core.execute_resize = function() {

	// @ifdef DEBUG
	console.time( 't.fn.execute_resize timer' );
	// @endif

	if ( !t.br.legacy ) {

		t.core.update_viewport_dims();
		t.core.responsive_modules_init();

	}

	t.$el.doc.trigger( 'modern_tribe_resize_executed' );

	// @ifdef DEBUG
	console.timeEnd( 't.fn.execute_resize timer' );
	// @endif

};
/**
 * @function modern_tribe.core.execute_tests
 * @since 1.0
 * @desc modern_tribe.core.execute_tests brings together all tests that need to be run on init.
 */

t.core.execute_tests = function() {

	// Touch conditional
	if ( t.tests.has_touch() ) {
		t.$el.body.addClass( 'is-touch-device' );
	}

	// Legacy conditional
	if ( t.$el.html.is( '.lt-ie9' ) ) {
		t.br.legacy = true;
	}

};

/**
 * @function modern_tribe.core.initialize_plugins
 * @desc Function to wrap all simple third part plugin inits.
 * Please don't do complex configs here, make a module.
 */

t.core.initialize_plugins = function() {

	FastClick.attach( document.body );

};
/**
 * @function modern_tribe.core.responsive_modules_init
 * @since 1.0
 * @desc modern_tribe.core.responsive_modules_init fires out inits that shouldn't execute until a mobile or desktop state has been detected.
 */

t.core.responsive_modules_init = function() {

	if ( !t.state.desktop_initialized && t.state.v_width >= t.options.mobile_breakpoint ) {

		t.state.desktop_initialized = true;

		t.$el.doc.trigger( 'modern_tribe_desktop_init' );

		// @ifdef DEBUG
		console.info( 'Completed initializing desktop plugins.' );
		// @endif

	}
	else if ( !t.state.mobile_initialized && t.state.v_width < t.options.mobile_breakpoint ) {


		t.state.mobile_initialized = true;

		t.$el.doc.trigger( 'modern_tribe_mobile_init' );

		// @ifdef DEBUG
		console.info( 'Completed initializing mobile plugins.' );
		// @endif

	}

};

/**
 * @function modern_tribe.core.update_viewport_dims
 * @since 1.0
 * @desc modern_tribe.core.update_viewport_dims updates the state object viewport dimension variables for use throughout the app.
 */

t.core.update_viewport_dims = function() {

	t.state.v_height = $.viewportH();
	t.state.v_width = $.viewportW();

	if ( t.state.v_width >= t.options.mobile_breakpoint ) {
		t.state.is_desktop = true;
		t.state.is_mobile = false;
	}
	else {
		t.state.is_desktop = false;
		t.state.is_mobile = true;
	}

};

/**
 * @function modern_tribe.util.scroll_to
 * @since 1.0
 * @desc modern_tribe.util.scroll_to allows equalized or duration based scrolling of the body to a supplied target with options.
 */

t.util.scroll_to = function( opts ) {

	var options = $.extend( {
		auto           : false,
		auto_coefficent: 2.5,
		after_scroll   : function() {},
		duration       : 1000,
		easing         : 'linear',
		offset         : 0,
		target         : $()
	}, opts );

	if ( options.target.length ) {

		var position = options.target.offset().top + options.offset;

		if ( options.auto ) {

			var html_position = t.$el.html.scrollTop();

			if ( position > html_position ) {
				options.duration = (position - html_position) / options.auto_coefficent;
			}
			else {
				options.duration = (html_position - position) / options.auto_coefficent;
			}
		}

		t.$el.hb.animate( {scrollTop: position}, options.duration, options.easing, options.after_scroll );
	}

};
/**
 * @namespace modern_tribe.options
 * @since 1.0
 * @desc modern_tribe.options is where we store app options.
 */

t.options = {
	mobile_breakpoint: 768
};

/**
 * @namespace modern_tribe.state
 * @since 1.0
 * @desc modern_tribe.state is were we can store various state variables, like browser info, viewport height, width etc.
 */

t.state = {
	desktop_initialized: false,
	domain             : location.protocol + '//' + location.host + '/',
	is_desktop         : false,
	is_mobile          : false,
	mobile_initialized : false,
	v_height           : 0,
	v_width            : 0
};
/**
 * @namespace modern_tribe.tests
 * @since 1.0
 * @desc modern_tribe.tests is where we store all other tests.
 */

t.tests = {

	has_bar: function () {
		return t.$el.body.is('.admin-bar');
	},

	has_touch: function () {
		return ('ontouchstart' in document.documentElement || navigator.msMaxTouchPoints > 0);
	}

};

/**
 * @function modern_tribe.init
 * @since 1.0
 * @desc modern_tribe.init is where we kickoff the app!
 */

t.$el.doc.ready(
	t.core.execute_ready
);

})(window, document, jQuery, modern_tribe, modern_tribe_i18n, modern_tribe_config, Modernizr);