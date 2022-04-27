import React from 'react';

import { Label, Input, Indicator } from './style';

export const Checkbox = ({
	value,
	checked,
	onChange,
	name,
	id,
	label,
	disabled
}) => {
	return (
		<Label htmlFor={id} disabled={disabled}>
			{label}
			<Input
				id={id}
				type="checkbox"
				name={name}
				value={value}
				disabled={disabled}
				checked={checked}
				onChange={onChange}
			/>
			<Indicator />
		</Label>
	);
};