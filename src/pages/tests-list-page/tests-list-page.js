import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { GET_TESTS } from '../../store/actions/tests/types';

import SearchInput from '../../components/search-input';
import Button from '../../components/button';

import { Container, ListBox } from '../../styles/GlobalStyles';

export const TestsListPage = () => {

	const dispatch = useDispatch();

	const tests = useSelector((state) => state.tests.tests);

	useEffect(() => {
		dispatch({ type: GET_TESTS });
	}, []);
	
	useEffect(() => {
		console.log('tests is ', tests);
	}, [tests]);

	return (
		<Container>
			<h1>Tests Page</h1>
			<SearchInput label={'Search test'} type={'text'} />
			<ListBox>
				<a href='#'>Test 1</a>
				<a href='#'>Test 1</a>
				<a href='#'>Test 1</a>
				<a href='#'>Test 1</a>
				<a href='#'>Test 1</a>
			</ListBox>
			<Link to={'/test/edit'}>
				<Button styleColor={'primary'}>Create new test</Button>
			</Link>
		</Container>
	);
};
