import React from 'react';

import { Select } from './style';

export const SelectItems = ({ options, setAnswerType }) => {
	return(
		<Select onChange={e => setAnswerType(e.target.value)}>
			{options.map(value => (
				<option key={value} value={value}>
					{value}
				</option>
			))}
		</Select>
	);
};