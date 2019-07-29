import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

import missionIcon from './mission-icon.png';
import missionIconTwo from './mission-icon-2.png';

const checkOddEven = num => {
	if (num % 2 === 0) {
		return true;
	} else {
		return false;
	}
};

function Image(props) {
	return (
		<div className="Image">
			<img
				src={checkOddEven(props.src) ? missionIcon : missionIconTwo}
				alt="mission-name"
			/>
		</div>
	);
}

export default Image;

Image.propTypes = {
	src: PropTypes.number.isRequired,
};
