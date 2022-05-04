import { 
	SET_TESTS,
	SET_TEST,
	SEND_TEST,
	DELETE_TEST_BY_ID
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
		return { ...state, test: action.data, tests: [...state.tests, action.data] };
	case DELETE_TEST_BY_ID:
		return { ...state, users: state.tests.filter(item => item.id !== action.id) };

	default:
		return state;
	}
}
