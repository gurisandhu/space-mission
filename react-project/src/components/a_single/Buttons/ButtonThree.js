import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function ButtonThree(props) {
	return (
		<button className="ButtonThree" type="submit" onClick={() => props.goToTop()}>
			Back to top
		</button>
	);
}

export default ButtonThree;

ButtonThree.propTypes = {
	goToTop: PropTypes.func.isRequired,
};
