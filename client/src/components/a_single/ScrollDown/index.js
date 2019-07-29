import React from 'react';
import PropTypes from 'prop-types';
import downArrow from './down-chevron.svg';
import './index.scss';

function ScrollDown(props) {
	return (
		<div className="scrollDown">
			<button
				className="downArrow"
				type="button"
				onClick={() => props.goToFilter()}
			>
				<img src={downArrow} alt="scroll-down" width="24" />
			</button>
		</div>
	);
}

export default ScrollDown;

ScrollDown.propTypes = {
	goToFilter: PropTypes.func.isRequired,
};
