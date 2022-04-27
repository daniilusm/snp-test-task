/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SearchInput from '../../components/search-input';
import { Container } from '../../styles/GlobalStyles';
import { GET_TESTS } from '../../store/actions/tests/types';
import { ListBox } from '../../styles/GlobalStyles';

export const TestsListPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const getData = dispatch({ type: GET_TESTS });
	}, []);

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
		</Container>
	);
};
