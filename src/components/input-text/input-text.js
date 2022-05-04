import React from 'react';

import { Label, Input } from './style';

export const InputText = ({label, register, name, ...inputProps}) => {
	return(
		<Label>{label}
			<Input {...register(name)} {...inputProps} type='text'/>
		</Label>
	);
};