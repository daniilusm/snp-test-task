import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../components/button';
import QuestionItem from '../../components/question-item';
import SelectItems from '../../components/select-items';
import Modal from '../../components/modal';
import QuestionForm from '../../components/question-form';

import { deleteTest, getTest, editTest } from '../../store/actions/tests';
import { createQuestion, deleteQuestion } from '../../store/actions/questions';

import { Container, ButtonBox, ListBox, Heading, ConfirmBox } from '../../styles/GlobalStyles';
import { EditTestForm } from './style';
import SearchInput from '../../components/search-input';

export const WorkOnTestPage = () => {

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const { id } = useParams();

	const [openModal, setOpenModal] = useState(false);

	const [openModalСonfirm, setOpenModalСonfirm] = useState(false);

	const [questionType, setQuestionType] = useState('single');

	const [valueInput, setValueInput] = useState();

	const test = useSelector((state) => state.tests.test);
	
	const questions = useSelector((state) => state.questions.questions);
	
	const goToTestsList = useCallback(() => navigate('/'));

	useEffect(() => {
		dispatch(getTest(id));
	},[]);
	
	useEffect(() => {
		setValueInput(test.title);
	},[test]);

	useEffect(() => {
		dispatch(getTest(id));
		console.log('question is ', questions);
	},[questions]);

	const removeTest = (id) => {
		dispatch(deleteTest(id));
		goToTestsList();
	};

	const createQuest = () => {
		const defaultData = {
			answer: 0,
			question_type: questionType,
			title: 'New question'
		};
		dispatch(createQuestion(defaultData, id));
		setOpenModal((prev) => !prev);
	};

	const saveTest = () => {
		const data = {
			title: valueInput,
			id: id
		};
		dispatch(editTest(data));
		goToTestsList();
	};

	const removeQuestion = (questId) => {
		dispatch(deleteQuestion(questId));
		dispatch(getTest(id));
	};

	return (
		<>
			<Container style={{ backgroundColor: '#FAF4E8', padding: '20px', marginBottom: '20px' }}>
				<Heading>{test.title}</Heading>
				<EditTestForm >
					<SearchInput value={valueInput} onChange={(event) => setValueInput(event.target.value)} label={'Name test'}/>
					<ListBox>
						{test.questions ? test.questions.map(quest => (
							<QuestionItem 
								removeQuestion={removeQuestion} 
								data={quest} key={quest.id} 
							/>
						)) : <h1>Not found questions</h1>}
					</ListBox>
					<div style={{
						display: 'flex',
						justifyContent: 'center',
						gap: '20px'
					}}>
						<SelectItems setQuestionType={setQuestionType} name="answer-type" options={['single', 'multiple', 'number']} />
						<Button styleColor={'primary'} type="button" onClick={() => createQuest()}>add new question</Button>
					</div>
					<ButtonBox>
						<Button styleColor={'primary'} onClick={() => saveTest()}>Save</Button>
						<Button type='button' onClick={() => setOpenModalСonfirm((prev) => !prev)}>Delete</Button>
					</ButtonBox>
				</EditTestForm>
				<Modal showModal={openModal} setShowModal={setOpenModal}>
					<QuestionForm questionType={questionType} setShowModal={setOpenModal}/>
				</Modal>
				<Modal showModal={openModalСonfirm} setShowModal={setOpenModalСonfirm}>
					<ConfirmBox>
						<Heading>Delete test?</Heading>
						<ButtonBox>
							<Button type='button' styleColor={'primary'} onClick={() => removeTest(id)}>yes</Button>
							<Button type='button' styleColor={'primary'} onClick={() => setOpenModalСonfirm((prev) => !prev)}>no</Button>
						</ButtonBox>
					</ConfirmBox>
				</Modal>
			</Container>
		</>
	);
};