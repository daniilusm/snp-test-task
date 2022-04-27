import React from 'react';
import { ErrorMessageStyle } from './style';

export const ErrorMessage = ({children}) => {
	return(
		<ErrorMessageStyle>
			{children}
		</ErrorMessageStyle>
	);
};