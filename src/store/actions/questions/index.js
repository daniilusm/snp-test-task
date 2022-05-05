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
	MOVING_ANSWER_BY_ID,
	CLEAR_ANSWERS
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

export function editQuestion(data, id) {
	return {
		type: EDIT_QUESTION,
		data: {
			data,
			id
		}
	};
}

export function editQuestionById(quest) {
	return {
		type: EDIT_QUESTION_BY_ID,
		quest,
	};
}

export function deleteQuestion(id) {
	return {
		type: DELETE_QUESTION,
		id
	};
}

export function deleteQuestionById(id) {
	return {
		type: DELETE_QUESTION_BY_ID,
		id,
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

export function editAnswer(data) {
	return {
		type: EDIT_ANSWER,
		data
	};
}

export function editAnswernById(data) {
	return {
		type: EDIT_ANSWER_BY_ID,
		data
	};
}

export function deleteAnswer(id) {
	return {
		type: DELETE_ANSWER,
		id
	};
}

export function deleteAnswerById(id) {
	return {
		type: DELETE_ANSWER_BY_ID,
		id,
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

export function clearAnswers() {
	return {
		type: CLEAR_ANSWERS,
	};
}