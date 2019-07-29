import React from 'react';
import PropTypes from 'prop-types';

import { ButtonThree } from '../..';
import './index.scss';

function Footer(props) {
	return (
		<footer>
			<div>Copyright &copy; 2018 Space Savvy</div>
			<div>
				<ButtonThree goToTop={props.goToTop} />
			</div>
		</footer>
	);
}

export default Footer;

Footer.propTypes = {
	goToTop: PropTypes.func.isRequired,
};
