import React from 'react';

import { Select } from './style';

export const SelectItems = ({ options, setQuestionType, ...props }) => {
	return(
		<Select onChange={e => setQuestionType(e.target.value)} {...props}>
			{options.map(value => (
				<option key={value} value={value}>
					{value}
				</option>
			))}
		</Select>
	);
};