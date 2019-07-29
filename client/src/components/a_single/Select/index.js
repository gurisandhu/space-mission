import 'core-js';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { createName } from '../../../utls';

function Select(props) {
	const [select, setSelect] = useState('');
	return (
		<div className="selectIcon">
			<select
				name={props.name}
				title={createName(props.name)}
				onChange={e => {
					setSelect(e.target.value), props.setOption(e);
				}}
				onBlur={() => props.validate()}
				value={select}
			>
				<option value="">Any</option>
				{props.options &&
					props.options.map(item => {
						return (
							<option disabled={item.disabled} value={item.id} key={item.id}>
								{item.text}
							</option>
						);
					})}
			</select>
		</div>
	);
}

export default Select;

Select.propTypes = {
	setOption: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	options: PropTypes.array,
	validate: PropTypes.func,
};

Select.defaultProps = {
	options: [],
	validate: () => void 0,
};
