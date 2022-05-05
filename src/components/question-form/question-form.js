import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import InputText from '../input-text';
import SearchInput from '../search-input';
import Button from '../button';
import Checkbox from '../checkbox';
import ErrorMessage from '../error-message';

import { createAnswer, editQuestion, deleteAnswer, editAnswer } from '../../store/actions/questions';

import { ButtonBox, ListBox } from '../../styles/GlobalStyles';
import { QuestionFormBox, AnswerItem, AnswerInput, AnswersBlock } from './style';

export const QuestionForm = ({ setShowModal, questionType }) => {

	const dispatch = useDispatch();

	const [valueInput, setValueInput] = useState('');

	const answers = useSelector((state) => state.questions.answers);

	const question = useSelector((state) => state.questions.question);

	const schema = yup
		.object({
			title: yup
				.string()
				.min(4, 'Question must be more than 4 characters')
				.required('Question is a required field'),
			// answer: yup
			// 	.string()
			// 	.min(4, 'Answer must be more than 4 characters')
			// 	.required('Answer is a required field'),
		})
		.required();

	const schemaNumber = yup
		.object({
			title: yup
				.string()
				.min(4, 'Question must be more than 4 characters')
				.required('Question is a required field'),
			// answer: yup
			// 	.number()
			// 	.required('Answer is a required field'),
		})
		.required();

	const schemaMulty = yup
		.object({
			title: yup
				.string()
				.min(4, 'Question must be more than 4 characters')
				.required('Question is a required field'),
			// answer: yup
			// 	.string()
			// 	.min(4, 'Answer must be more than 4 characters')
			// 	.required('Answer is a required field'),
		})
		.required();

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		resolver: yupResolver(questionType === 'number' ? schemaNumber : questionType ==='single' ? schema : schemaMulty),
		mode: 'onChange',
	});

	const onSubmit = (data) => {
		data.question_type = questionType;
		data.answer = answers.length;
		console.log('onSubmit', data, ' in quest ', question);
		dispatch(editQuestion(data, question.id));
		setShowModal(false);
	};

	const changeInput = (event) => {
		setValueInput(event.target.value);
	};

	const addAnswer = () => {
		const data = {
			answer:{
				text: valueInput,
				is_right: false,
			},
			quest_id: question.id
		};
		dispatch(createAnswer(data));
	};

	const choosRightAnswer = (event, answer) => {
		const changedData = {
			data:{
				text: answer.text,
				is_right: event.target.checked,
			},
			answerId: answer.id
		};
		dispatch(editAnswer(changedData));
	};

	const removeAnswer = (id) => {
		dispatch(deleteAnswer(id));
	};

	return(
		<QuestionFormBox onSubmit={handleSubmit(onSubmit)}>
			<InputText register={register} name={'title'} label={'Question'} id={'title'} />
			<ErrorMessage>{errors.quest?.message}</ErrorMessage>
			<AnswerInput>
				<SearchInput onChange={changeInput} label={'Answer'}/>
				<Button styleColor={'primary'} type="button" onClick={addAnswer}>add answer</Button>
			</AnswerInput>
			<AnswersBlock>
				<h3>Answers:</h3>
				<ListBox name={'answers'}>
					{answers ? answers.map((answer, index) => (
						<AnswerItem key={index}>
							<Checkbox
								label={`${answer.text}`}
								onChange={(event) => choosRightAnswer(event, answer)}
							/>
							<Button type='button' onClick={() => removeAnswer(answer.id)}>x</Button>
						</AnswerItem>
					)) : <h3>not answers</h3>}
				</ListBox>
			</AnswersBlock>
			<ButtonBox>
				<Button type='submit' styleColor={'primary'}>save</Button>
				<Button type='button' onClick={() => setShowModal(false)}>cancel</Button>
			</ButtonBox>
		</QuestionFormBox>
	);
};