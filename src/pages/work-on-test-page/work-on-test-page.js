import React, { useState } from 'react';

import Button from '../../components/button';
import SearchInput from '../../components/search-input';
import QuestionItem from '../../components/question-item';
import SelectItems from '../../components/select-items';
import Modal from '../../components/modal';
import QuestionForm from '../../components/question-form';

import { Container, ButtonBox, ListBox } from '../../styles/GlobalStyles';
import { EditTestBox } from './style';

export const WorkOnTestPage = () => {

	const [openModal, setOpenModal] = useState(false);

	return (
		<>
			<Container style={{ backgroundColor: '#FAF4E8', padding: '20px' }}>
				<h1>Edit test</h1>
				<EditTestBox>
					<SearchInput label={'Name test'} type={'text'} />
					<ListBox>
						<QuestionItem />
						<QuestionItem />
						<QuestionItem />
					</ListBox>
					<div style={{
						display: 'flex',
						justifyContent: 'center',
						gap: '20px'
					}}>
						<SelectItems name="answer-type" options={['one answer', 'any answer', 'nubmer asnwer']} />
						<Button styleColor={'primary'} onClick={() => setOpenModal((prev) => !prev)}>add new question</Button>
					</div>
					<ButtonBox>
						<Button styleColor={'primary'}>Save</Button>
						<Button>Delete</Button>
					</ButtonBox>
				</EditTestBox>
				<Modal showModal={openModal} setShowModal={setOpenModal}>
					<QuestionForm setShowModal={setOpenModal}/>
				</Modal>
				{/* <Modal showModal={openModal} setShowModal={setOpenModal}>
					<ButtonBox>
						<p>Сonfirm saving</p>
						<Button styleColor={'primary'}>ok</Button>
						<Button>cancel</Button>
					</ButtonBox>
				</Modal>
				<Modal showModal={openModal} setShowModal={setOpenModal}>
					<ButtonBox>
						<p>Сonfirm deletion</p>
						<Button styleColor={'primary'}>ok</Button>
						<Button>cancel</Button>
					</ButtonBox>
				</Modal> */}
			</Container>
		</>
	);
};