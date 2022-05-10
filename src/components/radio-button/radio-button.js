import React from 'react';
import { 
	Item,
	Wrapper,
	RadioButtonStyle,
	RadioButtonLabel
} from './style';

export const RadioButton = ({ chekedValue, value, values, ...props }) => {

	return(
		<Wrapper >
			{values.map((val, index) => (
				<Item key={index}>
					<RadioButtonStyle value={`${val.text}`} checked={value === `${val.text}`} id={`${val.text}`} onChange={(chekedValue)} type='radio' {...props}/>
					<RadioButtonLabel />
					<p>{val.text}</p>
				</Item>
			))}
		</Wrapper>
	);
};