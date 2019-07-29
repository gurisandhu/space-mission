import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function TextOne({ text }) {
	return <div className="TextOne">#{text}</div>;
}

export default TextOne;

TextOne.propTypes = {
	text: PropTypes.number,
};

TextOne.defaultProps = {
	text: '01',
};
