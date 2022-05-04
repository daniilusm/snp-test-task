import { 
	CREATE_QUESTION,
	SET_QUESTION,
	EDIT_QUESTION, 
	EDIT_QUESTION_BY_ID,
	DELETE_QUESTION, 
	DELETE_QUESTION_BY_ID,
	CREATE_ANSWER,
	SET_ANSWER,
	EDIT_ANSWER,
	EDIT_ANSWER_BY_ID,
	DELETE_ANSWER,
	DELETE_ANSWER_BY_ID,
	MOVING_ANSWER,
	MOVING_ANSWER_BY_ID
} from './types';

export function createQuestion(data, id) {
	return {
		type: CREATE_QUESTION,
		data: {
			data,
			id
		}
	};
}

export function setQuestion(data) {
	return {
		type: SET_QUESTION,
		data,
	};
}

export function editQuestion(id) {
	return {
		type: EDIT_QUESTION,
		id
	};
}

export function editQuestionById(data) {
	return {
		type: EDIT_QUESTION_BY_ID,
		data,
	};
}

export function deleteQuestion(title) {
	return {
		type: DELETE_QUESTION,
		title
	};
}

export function deleteQuestionById(data) {
	return {
		type: DELETE_QUESTION_BY_ID,
		data,
	};
}

export function createAnswer(data) {
	return {
		type: CREATE_ANSWER,
		data
	};
}

export function setAnswer(data) {
	return {
		type: SET_ANSWER,
		data,
	};
}

export function editAnswer(id) {
	return {
		type: EDIT_ANSWER,
		id
	};
}

export function editAnswernById(data) {
	return {
		type: EDIT_ANSWER_BY_ID,
		data,
	};
}

export function deleteAnswer(title) {
	return {
		type: DELETE_ANSWER,
		title
	};
}

export function deleteAnswerById(data) {
	return {
		type: DELETE_ANSWER_BY_ID,
		data,
	};
}

export function movingAnswer(title) {
	return {
		type: MOVING_ANSWER,
		title
	};
}

export function movingAnswerById(data) {
	return {
		type: MOVING_ANSWER_BY_ID,
		data,
	};
}