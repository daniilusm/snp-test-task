import React from 'react';

import { Select } from './style';

export const SelectItems = ({ options, setData, ...props }) => {
	return(
		<Select onChange={e => setData(e.target.value)} {...props}>
			{options.map(value => (
				<option key={value} value={value}>
					{value}
				</option>
			))}
		</Select>
	);
};