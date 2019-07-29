import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { createName } from '../../../utls';

function Input(props) {
	const [text, setText] = useState('');
	const setKeyword = text => {
		props.setKeywords(text);
	};
	return (
		<input
			type="text"
			name={props.name}
			placeholder="eg Falcon"
			value={text}
			title={createName(props.name)}
			onChange={e => {
				setText(e.target.value);
			}}
			onBlur={e => setKeyword(e)}
		/>
	);
}

export default Input;

Input.propTypes = {
	setKeywords: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
};
