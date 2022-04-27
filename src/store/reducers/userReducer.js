import { SET_USER } from '../actions/user/types';

const initialState = {
	user: [],
};

export function user(state = initialState, action) {
	switch (action.type) {
	case SET_USER:
		return { ...state, user: action.payload };

	default:
		return state;
	}
}
