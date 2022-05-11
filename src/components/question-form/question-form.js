import React, { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import InputText from '../input-text';
import SearchInput from '../search-input';
import Button from '../button';
import Checkbox from '../checkbox';
import ErrorMessage from '../error-message';

import { 
	createAnswer, 
	editQuestion, 
	deleteAnswer, 
	editAnswer, 
	clearAnswers,
	movingAnswer,
	getAnswers,
	getQuestion
} from '../../store/actions/questions';

import { 
	QuestionFormBox,  
	AnswerInput, 
	AnswersBlock,
	DraggAndDropItem
} from './style';
import { ButtonBox, ListBox } from '../../styles/GlobalStyles';

export const QuestionForm = ({ setShowModal, questionType, dataQuest }) => {

	const dispatch = useDispatch();

	const dragItem = useRef();
	const dragOverItem = useRef();

	const [valueInput, setValueInput] = useState('');

	const [valid, setValid] = useState('');

	const [questType, setQuestType] = useState(questionType);

	const answers = useSelector((state) => state.questions.answers);

	const question = useSelector((state) => state.questions.question);

	useEffect(() => {
		dataQuest ? setData(dataQuest) : null;
	},[]);

	const setData = (data) => {
		console.log('set data quest', data);
		dispatch(getQuestion(data));
		dispatch(getAnswers(data.answers));
		setQuestType(data.question_type);
	};

	const schema = yup
		.object({
			title: yup
				.string()
				.min(4, 'Question must be more than 4 characters')
				.required('Question is a required field'),
		})
		.required();

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		resolver: yupResolver(schema),
		mode: 'onChange',
	});

	const onSubmit = (data) => {
		const validResult = validationByTypeQuest();
		validResult ? (workWithData(data)) : (setValid('No valid form'));
	};

	const validationByTypeQuest = () => {
		let exam;
		questType === 'number' ? (
			// выполняем проверку number
			exam = answers.length === 1 && answers.filter(answ => answ.is_right === true).length === 1
		) : questType === 'single' ? (
			// выполняем проверку single
			exam = answers.length >= 2 && answers.filter(answ => answ.is_right === true).length === 1
		) : (
			// выполняем проверку multiply
			exam = answers.length >= 2 && answers.filter(answ => answ.is_right === true).length >= 1
		) ;
		return exam;
	};

	const workWithData = (data) => {
		data.question_type = questType;
		data.answer = answers.length;
		dispatch(editQuestion(data, question.id));
		dispatch(clearAnswers());
		setShowModal(false);
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

	const dragStart = (e, position) => {
		dragItem.current = position;
	};

	const dragEnter = (e, position) => {
		dragOverItem.current = position;
	};

	const dropItem = (answer) => {
		dispatch(movingAnswer(answer, dragItem.current, dragOverItem.current));
	};

	return(
		<QuestionFormBox onSubmit={handleSubmit(onSubmit)}>
			<InputText register={register} value={dataQuest ? dataQuest.title : ''} name={'title'} label={'Question'} />
			<ErrorMessage>{errors.title?.message}</ErrorMessage>
			<AnswerInput>
				<SearchInput onChange={(event) => setValueInput(event.target.value)} label={'Answer'}/>
				<Button styleColor={'primary'} type="button" onClick={addAnswer}>add answer</Button>
			</AnswerInput>
			<AnswersBlock>
				<h3>Answers:</h3>
				<ListBox name={'answers'}>
					{answers.length > 0 ? answers.map((answer, index) => (
						<DraggAndDropItem
							key={answer.id}
							onDragStart={(e) => dragStart(e, index)} 
							onDragEnter={(e) => dragEnter(e, index)} 
							onDragEnd={() => dropItem(answer)} 
							onDragOver={(e) => e.preventDefault()} 
							draggable 
						>
							<Checkbox
								label={`${answer.text}`}
								onChange={(event) => choosRightAnswer(event, answer)}
								checked={answer.is_right}
							/>
							<Button type='button' onClick={() => removeAnswer(answer.id)}>x</Button>
						</DraggAndDropItem>
					)) : <h3>Answers not found</h3>}
				</ListBox>
			</AnswersBlock>
			<ErrorMessage>{valid}</ErrorMessage>
			<ButtonBox>
				<Button type='submit' styleColor={'primary'}>save</Button>
				<Button type='button' onClick={() => setShowModal(false)}>cancel</Button>
			</ButtonBox>
		</QuestionFormBox>
	);
};