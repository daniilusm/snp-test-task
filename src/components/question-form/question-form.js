import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import InputText from '../input-text';
import Button from '../button';
import Checkbox from '../checkbox';
import ErrorMessage from '../error-message';

import { ButtonBox, ListBox } from '../../styles/GlobalStyles';
import { QuestionFormBox } from './style';

export const QuestionForm = ({ setQuestions, setShowModal, answerType, questions }) => {

	const [valueInput, setValueInput] = useState('');

	const [answers, setAnswers] = useState([]);

	const schema = yup
		.object({
			quest: yup
				.string()
				.min(4, 'Question must be more than 4 characters')
				.required('Question is a required field'),
			answer: yup
				.string()
				.min(4, 'Answer must be more than 4 characters')
				.required('Answer is a required field'),
		})
		.required();

	const schemaNumber = yup
		.object({
			quest: yup
				.string()
				.min(4, 'Question must be more than 4 characters')
				.required('Question is a required field'),
			answer: yup
				.number()
				.required('Answer is a required field'),
		})
		.required();

	const schemaMultu = yup
		.object({
			quest: yup
				.string()
				.min(4, 'Question must be more than 4 characters')
				.required('Question is a required field'),
			answer: yup
				.string()
				.min(4, 'Answer must be more than 4 characters')
				.required('Answer is a required field'),
		})
		.required();

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		resolver: yupResolver(answerType === 'number' ? schemaNumber : answerType ==='single' ? schema : schemaMultu),
		mode: 'onChange',
	});

	const onSubmit = (data) => {
		console.log('onSubmit', data);
		data.answers = answers;
		data.id = Date.now().toString();
		setQuestions([...questions, data]);
		setShowModal(false);
	};

	const changeInput = (event) => {
		setValueInput(event.target.value);
	};

	const addAnswer = () => {
		const answer = {
			text: valueInput,
			is_right: false,
		};
		setAnswers([...answers, answer]);
	};

	const choosRightAnswer = (event, index) => {
		const _answers = [...answers];
		_answers[index].is_right = event.target.checked;
		setAnswers(_answers);
	};

	return(
		<QuestionFormBox onSubmit={handleSubmit(onSubmit)}>
			<InputText register={register} name={'quest'} label={'Question'} id={'quest'} />
			<ErrorMessage>{errors.quest?.message}</ErrorMessage>
			<div>
				<InputText register={register} name={'answer'} onChange={changeInput} label={'Answer'} id={'answer'} />
				<ErrorMessage>{errors.answer?.message}</ErrorMessage>
				<Button styleColor={'primary'} onClick={addAnswer}>add answer</Button>
			</div>
			<div>
				<p>Answers</p>
				<ListBox name={'answers'}>
					{answers.length > 0 ? answers.map((answer, index) => (
						<Checkbox
							key={index}
							label={`${answer.text}`}
							onChange={(event) => choosRightAnswer(event, index)}
						/>
					)) : 'not answers'}
				</ListBox>
			</div>
			<ButtonBox>
				<Button type={'submit'} styleColor={'primary'}>save</Button>
				<Button onClick={() => setShowModal(false)}>cancel</Button>
			</ButtonBox>
		</QuestionFormBox>
	);
};