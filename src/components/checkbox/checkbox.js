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
				type="checkbox"
				name={name}
				value={value}
				checked={checked}
				onChange={onChange}
			/>
			<Indicator />
		</Label>
	);
};