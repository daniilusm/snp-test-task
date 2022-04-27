import React from 'react';
import Button from '../../components/button';
import SearchInput from '../../components/search-input';
import QuestionItem from '../../components/question-item';
import { SelectItems } from '../../components/select-items/select-items';
import { Container, ButtonBox, ListBox } from '../../styles/GlobalStyles';
import { EditTestBox } from './style';

export const WorkOnTestPage = () => {

	return (
		<Container style={{backgroundColor: '#FAF4E8', padding: '20px'}}>
			<h1>Edit test</h1>
			<EditTestBox>
				<SearchInput label={'Name test'} type={'text'}/>
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
					<SelectItems name="gender" options={['one answer', 'any answer', 'nubmer asnwer']} />
					<Button styleColor={'primary'}>add new question</Button>
				</div>
				<ButtonBox>
					<Button styleColor={'primary'}>Save</Button>
					<Button>Delete</Button>
				</ButtonBox>
			</EditTestBox>
		</Container>
	);
};