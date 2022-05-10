import React, { useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getTest } from '../../store/actions/tests';

import Button from '../../components/button';
import QuestionPassing from '../../components/question-passing';

import { ButtonBox, Container, Heading } from '../../styles/GlobalStyles';

export const TestPage = () => {

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const { id } = useParams();

	const test = useSelector((state) => state.tests.test);

	useEffect(() => {
		dispatch(getTest(id));
	},[]);
	
	const goToTestsList = useCallback(() => navigate('/'));

	return (
		<Container>
			<Heading>{test.title}</Heading>
			{test.questions.map(quest => (
				<div key={quest.id}>
					<h2 style={{margin: '20px 0px'}}>{quest.title}</h2>
					<div style={{margin: '20px 0px'}}>
						<QuestionPassing answers={quest.answers} questType={quest.question_type}/>
					</div>
				</div>
			))}
			<ButtonBox>
				<Button styleColor={'primary'}>finish</Button>
				<Button onClick={() => goToTestsList()}>cancel</Button>
			</ButtonBox>
		</Container>
	);
};