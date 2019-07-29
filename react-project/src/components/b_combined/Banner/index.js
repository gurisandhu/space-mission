import React from 'react';
import PropTypes from 'prop-types';

import { Header, HeadingOne, ScrollDown } from '../../';
import './index.scss';

function Banner(props) {
	return (
		<section className="banner" role="banner" ref={props.scrollRef}>
			<div className="container">
				<Header />
				<HeadingOne />
				<ScrollDown goToFilter={props.goToFilter} />
			</div>
		</section>
	);
}

export default Banner;

Banner.propTypes = {
	scrollRef: PropTypes.object.isRequired,
	goToFilter: PropTypes.func.isRequired,
};
