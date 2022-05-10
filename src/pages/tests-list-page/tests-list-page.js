import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';

import { getTests, postTest, searchTests, sortTests } from '../../store/actions/tests';

import SearchInput from '../../components/search-input';
import Button from '../../components/button';
import RadioButton from '../../components/radio-button';

import { Container, EdgesBox, Heading, ListBox, SubHeading } from '../../styles/GlobalStyles';

const values = [
	{
		name:'descending', 
		value:'created_at_desc'
	}, 
	{
		name:'ascending', 
		value:'created_at_asc'
	}
];

export const TestsListPage = () => {

	const dispatch = useDispatch();

	const [searchParams, setSearchParams] = useSearchParams();

	const searchValue = searchParams.get('search');

	// const sortValue = searchParams.get('sort');

	const [value, setValue] = useState(searchValue ? searchValue : '');

	const [sortByDate, setSortByDate] = useState('');

	const tests = useSelector((state) => state.tests.tests);

	useEffect(() => {
		dispatch(getTests());
	}, []);

	const createTest = () => {
		dispatch(postTest('New test'));
	};

	const enteredString = (event) => {
		event.preventDefault();
		const inputValue = event.target.value;
		setValue(inputValue);
		const val = inputValue.toLocaleLowerCase();
		const searchParamsValue = `?search=${val}`;
		setSearchParams(val ? searchParamsValue : '');
		dispatch(searchTests(val));
	};

	const selectedSortTests = (event) => {
		event.preventDefault();
		const selectedValue = event.target.value;
		setSortByDate(selectedValue);
		// const sortParamsValue = `?sort=${selectedValue}`;
		dispatch(sortTests(selectedValue));
	};

	return (
		<Container>
			<Heading>Tests Page</Heading>
			<SearchInput value={value} onChange={enteredString} label={'Search test'}/>
			<ListBox>
				<h3>Sort by:</h3>
				<RadioButton value={sortByDate} chekedValue={selectedSortTests} values={values} name='sort'/>
			</ListBox>
			<ListBox>
				{tests.length > 0 ? tests.map(test => (
					<EdgesBox key={test.id}>
						<SubHeading>{test.title}</SubHeading>
						<Link to={`/test/${test.id}/edit`}>
							<Button styleColor={'primary'}>edit</Button>
						</Link>
					</EdgesBox>
				)) : <SubHeading>Tests not found</SubHeading>}
			</ListBox>
			<Button onClick={createTest} styleColor={'primary'}>Create new test</Button>
		</Container>
	);
};
