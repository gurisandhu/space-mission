import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function ButtonOne(props) {
	return (
		<button
			className="ButtonOne"
			type="submit"
			onClick={e => props.onClicked(e)}
			disabled={false}
		>
			Apply
		</button>
	);
}

export default ButtonOne;

ButtonOne.propTypes = {
	onClicked: PropTypes.func.isRequired,
};
