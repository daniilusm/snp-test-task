import React, { useState } from 'react';

import Button from '../button';
import Modal from '../modal';
// import QuestionForm from '../question-form';

import { QuestionBox, QuestionName } from './style';
import { ButtonBox } from '../../styles/GlobalStyles';

export const QuestionItem = ({ data, deleteQuestion }) => {

	const [openModal, setOpenModal] = useState();

	return(
		<>
			<QuestionBox>
				<QuestionName>{data.quest}</QuestionName>
				<ButtonBox>
					<Button styleColor={'primary'} onClick={() => setOpenModal((prev) => !prev)}>edit</Button>
					<Button onClick={() => deleteQuestion(data.id)}>x</Button>
				</ButtonBox>
			</QuestionBox>
			<Modal showModal={openModal} setShowModal={setOpenModal}>
				{/* <QuestionForm data={data}/> */}
				<h1>{data.ouest}</h1>
				<ul >
					{data.answers.map((answ, index) =>(
						<li key={index}>{answ.text}</li>
					))}
				</ul>
			</Modal>
		</>
	);
};