import { SET_USER, DELETE_USER } from '../actions/user/types';

const initialState = {
	user: [],
};

export function user(state = initialState, action) {
	switch (action.type) {
	case SET_USER:
		return { ...state, user: action.payload };
	case DELETE_USER:
		return { ...state, user: action.data };

	default:
		return state;
	}
}
