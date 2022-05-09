import React, { useState } from 'react';

import { Label, Input } from './style';

export const InputText = ({label, value, register, name, ...inputProps}) => {

	const [valueInput, setValueInput] = useState(value ? value : '');

	return(
		<Label>{label}
			<Input 
				{...register(name)} 
				value = {valueInput}
				onChange = {(event) => setValueInput(event.target.value)}
				type='text'
				{...inputProps} 
			/>
		</Label>
	);
};