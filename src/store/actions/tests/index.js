import { 
	GET_TESTS, 
	SET_TESTS,
	SORT_TESTS,
	SEARCH_TESTS,
	GET_TEST, 
	SET_TEST,
	POST_TEST,
	SEND_TEST,
	DELETE_TEST,
	DELETE_TEST_BY_ID,
	EDIT_TEST,
	EDIT_TEST_BY_ID,
} from './types';

export function getTests() {
	return {
		type: GET_TESTS,
	};
}

export function sortTests(value) {
	return {
		type: SORT_TESTS,
		value
	};
}

export function searchTests(value) {
	return {
		type: SEARCH_TESTS,
		value
	};
}

export function setTests(data) {
	return {
		type: SET_TESTS,
		data,
	};
}

export function getTest(id) {
	return {
		type: GET_TEST,
		id
	};
}

export function setTest(data) {
	return {
		type: SET_TEST,
		data,
	};
}

export function postTest(title) {
	return {
		type: POST_TEST,
		title
	};
}

export function addTest(data) {
	return {
		type: SEND_TEST,
		data,
	};
}

export function deleteTest(id) {
	return {
		type: DELETE_TEST,
		id,
	};
}

export function deleteTestById(id) {
	return {
		type: DELETE_TEST_BY_ID,
		id,
	};
}

export function editTest(data) {
	return {
		type: EDIT_TEST,
		data,
	};
}

export function editTestById(data) {
	return {
		type: EDIT_TEST_BY_ID,
		data,
	};
}
