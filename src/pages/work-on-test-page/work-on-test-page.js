import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../components/button';
import SearchInput from '../../components/search-input';
import QuestionItem from '../../components/question-item';
import SelectItems from '../../components/select-items';
import Modal from '../../components/modal';
import QuestionForm from '../../components/question-form';

import { Container, ButtonBox, ListBox } from '../../styles/GlobalStyles';
import { EditTestBox } from './style';
import { deleteTest, getTest } from '../../store/actions/tests';

export const WorkOnTestPage = () => {

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const test = useSelector((state) => state.tests.test);

	const [openModal, setOpenModal] = useState(false);

	const [answerType, setAnswerType] = useState('');

	const [questions, setQuestions] = useState([]);

	const { id } = useParams();
	
	const goToTestsList = useCallback(() => navigate('/tests'));

	useEffect(() => {
		dispatch(getTest(id));
		console.log('test is ', test, ' id ', id);
	},[]);
	
	useEffect(() => {
		console.log('test is ', test);
	},[test]);

	const removeTest = (id) => {
		dispatch(deleteTest(id));
		goToTestsList();
	};

	const deleteQuestion = (id) => {
		const find = questions.filter(item => item.id !== id);
		setQuestions(find);
	};

	return (
		<>
			<Container style={{ backgroundColor: '#FAF4E8', padding: '20px' }}>
				<h1>Edit test</h1>
				<EditTestBox>
					<SearchInput label={'Name test'} type={'text'} />
					<ListBox>
						{questions ? questions.map((quest,index) => (
							<QuestionItem deleteQuestion={deleteQuestion} data={quest} key={index} />
						)) : 'not questions'}
					</ListBox>
					<div style={{
						display: 'flex',
						justifyContent: 'center',
						gap: '20px'
					}}>
						<SelectItems setAnswerType={setAnswerType} name="answer-type" options={['single', 'multiple', 'number']} />
						<Button styleColor={'primary'} onClick={() => setOpenModal((prev) => !prev)}>add new question</Button>
					</div>
					<ButtonBox>
						<Button styleColor={'primary'}>Save</Button>
						<Button onClick={() => removeTest(id)}>Delete</Button>
					</ButtonBox>
				</EditTestBox>
				<Modal showModal={openModal} setShowModal={setOpenModal}>
					<QuestionForm questions={questions} setQuestions={setQuestions} answerType={answerType} setShowModal={setOpenModal}/>
				</Modal>
			</Container>
		</>
	);
};