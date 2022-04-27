import React from 'react';
import { ButtonStyle } from './style';

export const Button = ({ children, styleColor, ...buttonProps }) => {

	return(
		<ButtonStyle styleColor={styleColor} {...buttonProps}>
			{children.toUpperCase()}
		</ButtonStyle>
	);
};