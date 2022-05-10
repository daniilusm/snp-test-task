import React from 'react';
import { 
	Item,
	Wrapper,
	RadioButtonStyle,
	RadioButtonLabel
} from './style';

export const RadioButton = ({chekedValue, value, values, ...props }) => {

	return(
		<Wrapper >
			{values.map((val, index) => (
				<Item key={index}>
					<RadioButtonStyle value={`${val.value}`} checked={value === `${val.value}`} id={`${val.value}`} onChange={chekedValue}  type='radio' {...props}/>
					<RadioButtonLabel />
					<p>{val.name}</p>
				</Item>
			))}
		</Wrapper>
	);
};