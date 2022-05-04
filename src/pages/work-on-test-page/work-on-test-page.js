import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import Button from '../../components/button';
import QuestionItem from '../../components/question-item';
import SelectItems from '../../components/select-items';
import Modal from '../../components/modal';
import QuestionForm from '../../components/question-form';
import InputText from '../../components/input-text';

import { deleteTest, getTest, editTest } from '../../store/actions/tests';

import { Container, ButtonBox, ListBox } from '../../styles/GlobalStyles';
import { EditTestForm } from './style';

export const WorkOnTestPage = () => {

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const { id } = useParams();

	const [openModal, setOpenModal] = useState(false);

	const [questionType, setQuestionType] = useState('single');

	useEffect(() => {
		dispatch(getTest(id));
	},[]);

	const test = useSelector((state) => state.tests.test);
	
	const questions = useSelector((state) => state.questions.questions);
	
	const goToTestsList = useCallback(() => navigate('/'));

	useEffect(() => {
		dispatch(getTest(id));
		console.log('test', test);
	},[questions]);

	const { register, handleSubmit } = useForm();

	const removeTest = (id) => {
		dispatch(deleteTest(id));
		goToTestsList();
	};

	const saveTest = (data) => {
		data.id = id;
		console.log('edit test',data);
		dispatch(editTest(data));
		goToTestsList();
	};

	// const deleteQuestion = (id) => {
	// 	const find = questions.filter(item => item.id !== id);
	// 	setQuestions(find);
	// };

	return (
		<>
			<Container style={{ backgroundColor: '#FAF4E8', padding: '20px' }}>
				<h1>{test.title}</h1>
				<EditTestForm onSubmit={handleSubmit(saveTest)}>
					<InputText register={register} name={'title'} label={'Name test'} type={'text'} />
					<ListBox>
						{test.questions ? test.questions.map(quest => (
							<QuestionItem 
								// deleteQuestion={deleteQuestion} 
								data={quest} key={quest.id} 
							/>
						)) : <h1>not questions</h1>}
					</ListBox>
					<div style={{
						display: 'flex',
						justifyContent: 'center',
						gap: '20px'
					}}>
						<SelectItems setQuestionType={setQuestionType} name="answer-type" options={['single', 'multiple', 'number']} />
						<Button styleColor={'primary'} type="button" onClick={() => setOpenModal((prev) => !prev)}>add new question</Button>
					</div>
					<ButtonBox>
						<Button styleColor={'primary'} type={'submit'}>Save</Button>
						<Button onClick={() => removeTest(id)}>Delete</Button>
					</ButtonBox>
				</EditTestForm>
				<Modal showModal={openModal} setShowModal={setOpenModal}>
					<QuestionForm testId={id} questionType={questionType} setShowModal={setOpenModal}/>
				</Modal>
			</Container>
		</>
	);
};