import 'core-js';

import React from 'react';
import PropTypes from 'prop-types';
import { Item } from '../..';
import './index.scss';

function List({ launchPads, launches }) {
	const item =
		launches &&
		launches.map(item => (
			<Item key={item.flight_number} {...item} launchPads={launchPads} />
		));

	return <div className="List">{item}</div>;
}

export default List;

List.propTypes = {
	launches: PropTypes.array.isRequired,
	launchPads: PropTypes.object.isRequired,
};
