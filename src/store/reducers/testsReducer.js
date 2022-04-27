import { SET_TESTS } from '../actions/tests/types';

const initialState = {
	tests: [],
};

export function tests(state = initialState, action) {
	switch (action.type) {
	case SET_TESTS:
		return { ...state, tests: action.payload };

	default:
		return state;
	}
}
