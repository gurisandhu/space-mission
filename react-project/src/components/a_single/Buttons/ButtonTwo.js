import React from 'react';
import PropTypes from 'prop-types';

function ButtonTwo(props) {
	return (
		<a
			className="ButtonTwo"
			target="_blank"
			href={props.src}
			rel="noopener noreferrer"
		>
			{props.text}
		</a>
	);
}

export default ButtonTwo;

ButtonTwo.propTypes = {
	src: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};
