import { takeEvery, put, call, spawn } from 'redux-saga/effects';

import { 
	GET_TESTS,
	POST_TEST,
	DELETE_TEST,
	GET_TEST,
	EDIT_TEST
} from '../../actions/tests/types';

import {
	deleteTest,
	fetchTestById,
	fetchTests,
	sendTest,
	editTest
} from '../../../api/tests';

import { 
	setTests,
	addTest,
	deleteTestById,
	setTest,
	editTestById
} from '../../actions/tests';

export function* getTests() {
	const data = yield call(fetchTests, null);
	yield put(setTests(data));
}

export function* getTest(data) {
	const result = yield call(fetchTestById, data.id);
	yield put(setTest(result));
}

export function* postTest(data) {
	const result = yield call(sendTest, data.title);
	yield put(addTest(result));
}

export function* removeTest(data) {
	yield call(deleteTest, data.id);
	yield put(deleteTestById(data.id));
}

export function* changedTest(data) {
	yield call(editTest, data.data);
	yield put(editTestById(data.data));
}

export function* getTestsSaga(){
	yield takeEvery(GET_TESTS, getTests);	
}

export function* getTestSaga(){
	yield takeEvery(GET_TEST, getTest);	
}

export function* postTestSaga(){
	yield takeEvery(POST_TEST, postTest);	
}

export function* deleteTestsSaga(){
	yield takeEvery(DELETE_TEST, removeTest);	
}

export function* editTestSaga(){
	yield takeEvery(EDIT_TEST, changedTest);	
}

export default function* rootTestsSaga(){
	yield spawn(postTestSaga);
	yield spawn(getTestsSaga);
	yield spawn(getTestSaga);
	yield spawn(deleteTestsSaga);
	yield spawn(editTestSaga);
}