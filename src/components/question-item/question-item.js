import React, { useState } from 'react';

import Button from '../button';
import Modal from '../modal';
import QuestionForm from '../question-form';

import { QuestionBox, QuestionName } from './style';
import { ButtonBox, Heading, ConfirmBox } from '../../styles/GlobalStyles';

export const QuestionItem = ({ data, removeQuestion }) => {

	const [openModal, setOpenModal] = useState(false);

	const [openModalСonfirm, setOpenModalСonfirm] = useState(false);

	return(
		<>
			<QuestionBox>
				<QuestionName>{data.title}</QuestionName>
				<ButtonBox>
					<Button styleColor={'primary'} type='button' onClick={() => setOpenModal((prev) => !prev)}>edit</Button>
					<Button type='button' onClick={() => setOpenModalСonfirm((prev) => !prev)}>x</Button>
				</ButtonBox>
			</QuestionBox>
			<Modal showModal={openModal} setShowModal={setOpenModal}>
				<QuestionForm dataQuest={data} setShowModal={setOpenModal}/>
			</Modal>
			<Modal showModal={openModalСonfirm} setShowModal={setOpenModalСonfirm}>
				<ConfirmBox>
					<Heading>Delete question?</Heading>
					<ButtonBox>
						<Button type='button' styleColor={'primary'} onClick={() => removeQuestion(data.id)}>yes</Button>
						<Button type='button' styleColor={'primary'} onClick={() => setOpenModalСonfirm((prev) => !prev)}>no</Button>
					</ButtonBox>
				</ConfirmBox>
			</Modal>
		</>
	);
};