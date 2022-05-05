import { takeEvery, put, call, spawn } from 'redux-saga/effects';

import { 
	CREATE_QUESTION,
	EDIT_QUESTION,
	DELETE_QUESTION,
	CREATE_ANSWER,
	EDIT_ANSWER,
	DELETE_ANSWER,
	MOVING_ANSWER
} from '../../actions/questions/types';

import {
	sendQuestion,
	editQuestion,
	deleteQuestion,
	sendAnswer,
	editAnswer,
	deleteAnswer,
	movingAnswer
} from '../../../api/questions';

import { 
	setQuestion,
	editQuestionById,
	deleteQuestionById,
	setAnswer,
	editAnswernById,
	deleteAnswerById,
	movingAnswerById
} from '../../actions/questions';

export function* createQuestion(data) {
	const result = yield call(sendQuestion, data.data);
	yield put(setQuestion(result));
}

export function* changeQuestion(data) {
	const result = yield call(editQuestion, data.data);
	yield put(editQuestionById(result));
}

export function* removeQuestion(data) {
	yield call(deleteQuestion, data.id);
	yield put(deleteQuestionById(data.id));
}

export function* createAnswer(data) {
	const result = yield call(sendAnswer, data.data);
	yield put(setAnswer(result));
}

export function* changeAnswer(data) {
	const result = yield call(editAnswer, data.data);
	yield put(editAnswernById(result));
}

export function* removeAnswer(data) {
	yield call(deleteAnswer, data.id);
	yield put(deleteAnswerById(data.id));
}

export function* changePositionAnswer(data) {
	yield call(movingAnswer, data.data);
	yield put(movingAnswerById(data.data));
}

export function* createQuestionSaga(){
	yield takeEvery(CREATE_QUESTION, createQuestion);	
}

export function* editQuestionSaga(){
	yield takeEvery(EDIT_QUESTION, changeQuestion);	
}

export function* deleteQuestionSaga(){
	yield takeEvery(DELETE_QUESTION, removeQuestion);	
}

export function* createAnswerSaga(){
	yield takeEvery(CREATE_ANSWER, createAnswer);	
}

export function* editAnswerSaga(){
	yield takeEvery(EDIT_ANSWER, changeAnswer);	
}

export function* deleteAnswerSaga(){
	yield takeEvery(DELETE_ANSWER, removeAnswer);
}

export function* movingAnswerSaga(){
	yield takeEvery(MOVING_ANSWER, changePositionAnswer);	
}

export default function* rootQuestionsSaga(){
	yield spawn(createQuestionSaga);
	yield spawn(editQuestionSaga);
	yield spawn(deleteQuestionSaga);
	yield spawn(createAnswerSaga);
	yield spawn(editAnswerSaga);
	yield spawn(deleteAnswerSaga);
	yield spawn(movingAnswerSaga);
}