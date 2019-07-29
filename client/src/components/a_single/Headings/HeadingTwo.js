import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function HeadingTwo(props) {
	return (
		<h2>
			{props.text1} - {props.text2}{' '}
			{props.failed ? (
				<>
					- <span className="error">Failed Mission</span>
				</>
			) : (
				''
			)}
		</h2>
	);
}

export default HeadingTwo;

HeadingTwo.propTypes = {
	text1: PropTypes.string,
	text2: PropTypes.string,
	failed: PropTypes.bool,
};

HeadingTwo.defaultProps = {
	text1: 'Unknown Mission',
	text2: 'Unknown Payload',
	failed: false,
};
