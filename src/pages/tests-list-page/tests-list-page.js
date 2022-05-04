import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { GET_TESTS } from '../../store/actions/tests/types';
import { postTest } from '../../store/actions/tests';

import SearchInput from '../../components/search-input';
import Button from '../../components/button';

import { Container, ListBox } from '../../styles/GlobalStyles';

export const TestsListPage = () => {

	const dispatch = useDispatch();

	const tests = useSelector((state) => state.tests.tests);

	useEffect(() => {
		dispatch({ type: GET_TESTS });
	}, []);

	const createTest = () => {
		dispatch(postTest('New test'));
	};

	return (
		<Container>
			<h1>Tests Page</h1>
			<SearchInput label={'Search test'} type={'text'} />
			<ListBox>
				{tests.length > 0 ? tests.map(test => (
					<Link to={`/test/${test.id}/edit`} key={test.id}>
						<p >{test.title}</p>
					</Link>
				)) : <h3>Tests not found</h3>}
			</ListBox>
			<Button onClick={createTest} styleColor={'primary'}>Create new test</Button>
		</Container>
	);
};
