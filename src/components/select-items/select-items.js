import React from 'react';

import { Select } from './style';

export const SelectItems = ({ options }) => {
	return(
		<Select>
			{options.map(value => (
				<option key={value} value={value}>
					{value}
				</option>
			))}
		</Select>
	);
};