import React from 'react';

import { Label, Input, Indicator } from './style';

export const Checkbox = ({
	value,
	checked,
	onChange,
	name,
	id,
	label
}) => {
	return (
		<Label htmlFor={id} >
			{label}
			<Input
				id={id}
				name={name}
				value={value}
				checked={checked}
				onChange={onChange}
				type="checkbox"
			/>
			<Indicator />
		</Label>
	);
};