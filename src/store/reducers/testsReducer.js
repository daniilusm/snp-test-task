/* eslint-disable no-case-declarations */
import { 
	SET_TESTS,
	SET_TEST,
	SEND_TEST,
	DELETE_TEST_BY_ID,
	EDIT_TEST_BY_ID,
} from '../actions/tests/types';

const initialState = {
	tests: [],
	test: {}
};

export function tests(state = initialState, action) {
	switch (action.type) {
	case SET_TESTS:
		return { ...state, tests: action.data };
	case SET_TEST:
		return { ...state, test: action.data };
	case SEND_TEST:
		return { ...state, tests: [...state.tests, action.data] };
	case DELETE_TEST_BY_ID:
		return { ...state, users: state.tests.filter(item => item.id !== action.id) };
	case EDIT_TEST_BY_ID:
		const { data } = action;
		return { ...state, tests: state.tests.map(item => item.id === data.id ? { ...item, data } : item) };

	default:
		return state;
	}
}
