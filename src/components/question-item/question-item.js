import React from 'react';

import Button from '../button';

import { QuestionBox, QuestionName } from './style';
import { ButtonBox } from '../../styles/GlobalStyles';

export const QuestionItem = () => {
	return(
		<QuestionBox>
			<QuestionName>question</QuestionName>
			<ButtonBox>
				<Button styleColor={'primary'}>edit</Button>
				<Button>x</Button>
			</ButtonBox>
		</QuestionBox>
	);
};