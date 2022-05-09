/* eslint-disable no-case-declarations */
import { 
	SET_QUESTION,
	EDIT_QUESTION_BY_ID,
	DELETE_QUESTION_BY_ID,
	SET_ANSWER,
	EDIT_ANSWER_BY_ID,
	DELETE_ANSWER_BY_ID,
	MOVING_ANSWER_BY_ID,
	CLEAR_ANSWERS,
	GET_ANSWERS,
	GET_QUESTION
} from '../actions/questions/types';

const initialState = {
	questions: [],
	question: {},
	answers: []
};

export function questions(state = initialState, action) {
	switch (action.type) {
	case SET_QUESTION:
		return { ...state, questions: [...state.questions, action.data], question: action.data };
	case EDIT_QUESTION_BY_ID:
		const { quest } = action;
		return { ...state, questions: state.questions.map(item => item.id === quest.id ? item = quest : item) };
	case DELETE_QUESTION_BY_ID:
		return { ...state, questions: state.questions.filter(item => item.id !== action.id) };
	case SET_ANSWER:
		return { ...state, answers:  [...state.answers, action.data] };
	case EDIT_ANSWER_BY_ID:
		const { data } = action;
		return { ...state, answers: state.answers.map(item => item.id === data.id ? item = data : item) };
	case DELETE_ANSWER_BY_ID:
		return { ...state, answers: state.answers.filter(item => item.id !== action.id) };
	case MOVING_ANSWER_BY_ID:
		const { answer, positionEnd, positionStart } = action;
		const copyAnswers = [...state.answers];
		copyAnswers.splice(positionStart, 1);
		copyAnswers.splice(positionEnd, 0, answer);
		return { ...state, answers: copyAnswers };
	case CLEAR_ANSWERS:
		return { ...state, answers:  [] };
	case GET_ANSWERS:
		return { ...state, answers:  action.data };
	case GET_QUESTION:
		return { ...state, question: action.data };

	default:
		return state;
	}
}
