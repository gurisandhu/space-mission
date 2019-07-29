import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function TextTwo(props) {
	return <div className="TextTwo">{props.text}</div>;
}

export default TextTwo;

TextTwo.propTypes = {
	text: PropTypes.string,
};

TextTwo.defaultProps = {
	text: 'Lorem Ipsum',
};
