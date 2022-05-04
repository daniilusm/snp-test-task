/* eslint-disable no-case-declarations */
import { 
	SET_QUESTION,
	EDIT_QUESTION_BY_ID,
	DELETE_QUESTION_BY_ID,
	SET_ANSWER,
	EDIT_ANSWER_BY_ID,
	DELETE_ANSWER_BY_ID,
	MOVING_ANSWER_BY_ID
} from '../actions/questions/types';

const initialState = {
	questions: [],
	answers: []
};

export function questions(state = initialState, action) {
	switch (action.type) {
	case SET_QUESTION:
		return { ...state, questions: [...state.questions, action.data] };
	case EDIT_QUESTION_BY_ID:
		return { ...state, questions: action.data };
	case DELETE_QUESTION_BY_ID:
		return { ...state, questions: state.questions.filter(item => item.id !== action.id) };
	case SET_ANSWER:
		return { ...state, answers: action.data };
	case EDIT_ANSWER_BY_ID:
		const { data } = action;
		return { ...state, answers: state.answers.map(item => item.id === data.id ? { ...item, data } : item) };
	case DELETE_ANSWER_BY_ID:
		return { ...state, answers: state.answers.filter(item => item.id !== action.id) };
	case MOVING_ANSWER_BY_ID:
		return { ...state, answers: state.answers.filter(item => item.id !== action.id) };

	default:
		return state;
	}
}
