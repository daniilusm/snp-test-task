import React, { useState } from 'react';

import Button from '../button';
import Modal from '../modal';
import QuestionForm from '../question-form';

import { QuestionBox, QuestionName } from './style';
import { ButtonBox } from '../../styles/GlobalStyles';

export const QuestionItem = () => {

	const [openModal, setOpenModal] = useState();

	return(
		<>
			<QuestionBox>
				<QuestionName>question</QuestionName>
				<ButtonBox>
					<Button styleColor={'primary'} onClick={() => setOpenModal((prev) => !prev)}>edit</Button>
					<Button>x</Button>
				</ButtonBox>
			</QuestionBox>
			<Modal showModal={openModal} setShowModal={setOpenModal}>
				<QuestionForm />
			</Modal>
		</>
	);
};