import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { GET_TESTS } from '../../store/actions/tests/types';
import { postTest } from '../../store/actions/tests';

import SearchInput from '../../components/search-input';
import Button from '../../components/button';

import { Container, Heading, ListBox, SubHeading } from '../../styles/GlobalStyles';

export const TestsListPage = () => {

	const dispatch = useDispatch();

	const tests = useSelector((state) => state.tests.tests);

	useEffect(() => {
		dispatch({ type: GET_TESTS });
	}, []);

	useEffect(() => {
		console.log('get all tests ',tests);
	}, [tests]);

	const createTest = () => {
		dispatch(postTest('New test'));
	};

	return (
		<Container>
			<Heading>Tests Page</Heading>
			<SearchInput label={'Search test'} type={'text'} />
			<ListBox>
				{tests.length > 0 ? tests.map(test => (
					<Link to={`/test/${test.id}/edit`} key={test.id}>
						<SubHeading>{test.title}</SubHeading>
					</Link>
				)) : <SubHeading>Tests not found</SubHeading>}
			</ListBox>
			<Button onClick={createTest} styleColor={'primary'}>Create new test</Button>
		</Container>
	);
};
