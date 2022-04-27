import { GET_TESTS, SET_TESTS } from './types';

export function getTests() {
	return {
		type: GET_TESTS,
	};
}

export function setTests(data) {
	return {
		type: SET_TESTS,
		payload: data,
	};
}
