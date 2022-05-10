import React from 'react';

import { Label, Input } from './style';

export const SearchInput = ({label, ...inputProps}) => {
	return(
		<Label>{label}
			<Input type='text' {...inputProps}/>
		</Label>
	);
};