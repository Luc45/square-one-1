/**
 * External Dependencies
 */
const { resolve } = require( 'path' );
const merge = require( 'webpack-merge' );
const glob = require( 'glob' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const BundleAnalyzerPlugin = require( 'webpack-bundle-analyzer' ).BundleAnalyzerPlugin;

/**
 * Internal Dependencies
 */
const devBase = require( './configs/dev-base.js' );
const entry = require( './entry/theme' );
const pkg = require( '../package.json' );

module.exports = merge.strategy( {
	plugins: 'append',
} )( devBase, {
	entry,
	output: {
		path: resolve( `${ __dirname }/../`, pkg.square1.paths.core_theme_js_dist ),
		publicPath: `/${ pkg.square1.paths.core_theme_js_dist }`,
	},
	plugins: [
		new MiniCssExtractPlugin( {
			filename: '../../../css/dist/[name].css',
		} ),
		new BundleAnalyzerPlugin( {
			analyzerMode: 'static',
			reportFilename: resolve( `${ __dirname }/../`, 'reports/webpack-theme-bundle.html' ),
			openAnalyzer: false,
		} ),
	],
} );
