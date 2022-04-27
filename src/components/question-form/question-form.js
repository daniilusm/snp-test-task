import React, { useState } from 'react';
// import InputText from '../input-text';
import { ButtonBox, ListBox } from '../../styles/GlobalStyles';
import Button from '../button';
import { QuestionFormBox } from './style';
import Checkbox from '../checkbox';

export const QuestionForm = () => {

	const [value, setCheckbox] = useState(true);

	return(
		<QuestionFormBox>
			<p>Name Question</p>
			<input type='text'/>
			<div>
				<p>Answer</p>
				<input type='text' />
				<button>add new answer</button>
			</div>
			<div>
				<p>Answers</p>
				<ListBox>
					<Checkbox
						label="answer 1"
						value={value}
						checked={value}
						onChange={() => setCheckbox(!value)}
					/>
					<Checkbox
						label="answer 2"
						value={value}
						checked={value}
						onChange={() => setCheckbox(!value)}
					/>
					<Checkbox
						label="answer 3"
						value={value}
						checked={value}
						onChange={() => setCheckbox(!value)}
					/>
				</ListBox>
			</div>
			<ButtonBox>
				<Button styleColor={'primary'}>save</Button>
				<Button>cancel</Button>
			</ButtonBox>
		</QuestionFormBox>
	);
};