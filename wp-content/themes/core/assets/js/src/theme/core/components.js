/**
 * @module
 * @exports init
 * @description Initializes all components found in the components directory of the theme
 */

import accordion from 'components/accordion';
import comments from 'components/comments';
import share from 'components/share';
import slider from 'components/slider';
import tabs from 'components/tabs';
import video from 'components/video';

const init = () => {
	accordion();
	comments();
	share();
	slider();
	tabs();
	video();

	console.info( 'SquareOne FE: Initialized all components.' );
};

export default init;
