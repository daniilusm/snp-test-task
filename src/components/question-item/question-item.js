import React, { useState } from 'react';

import Button from '../button';
import Modal from '../modal';
// import QuestionForm from '../question-form';

import { QuestionBox, QuestionName } from './style';
import { ButtonBox } from '../../styles/GlobalStyles';

export const QuestionItem = ({ data }) => {

	const [openModal, setOpenModal] = useState(false);

	return(
		<>
			<QuestionBox>
				<QuestionName>{data.title}</QuestionName>
				<ButtonBox>
					<Button styleColor={'primary'} onClick={() => setOpenModal((prev) => !prev)}>edit</Button>
					{/* <Button onClick={() => deleteQuestion(data.id)}>x</Button> */}
				</ButtonBox>
			</QuestionBox>
			<Modal showModal={openModal} setShowModal={setOpenModal}>
				{/* <QuestionForm data={data}/> */}
				<h1>{data.answer}</h1>
				<ul >
					{data.answers.map((answ, index) =>(
						<li key={index}>{answ.text}</li>
					))}
				</ul>
			</Modal>
		</>
	);
};