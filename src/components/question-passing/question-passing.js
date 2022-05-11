import React, { useState } from 'react';

import Checkbox from '../checkbox';
import InputNumber from '../input-number';
import RadioButton from '../radio-button';

export const QuestionPassing = ({ answers, questType }) => {

	const [value, setValue] = useState('');

	const selectedSortTests = (event) => {
		event.preventDefault();
		const selectedValue = event.target.value;
		setValue(selectedValue);
		console.log(selectedValue);
	};

	return(
		<>
			{
				questType === 'number' ? (
					<div style={{paddingLeft: '35px'}}>
						<InputNumber />
					</div>
				) : questType === 'single' ? (
					<RadioButton value={value} chekedValue={selectedSortTests} values={answers} name='checkedAnswer'/>
				) : (
					answers.map(
						answ => (
							<div style={{paddingLeft: '35px'}} key={answ.id}>
								<Checkbox label={`${answ.text}`} onChange={(event) => console.log(event.target.checked)}/>
							</div>
						)
					)
				)
			}
		</>
	);
};