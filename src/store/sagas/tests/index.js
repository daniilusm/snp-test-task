import { takeEvery, put, call, spawn } from 'redux-saga/effects';

import { 
	GET_TESTS,
	POST_TEST,
	DELETE_TEST,
	GET_TEST,
	EDIT_TEST,
	SORT_TESTS,
	SEARCH_TESTS
} from '../../actions/tests/types';

import {
	deleteTest,
	fetchTestById,
	fetchAllTests,
	fetchSortedTests,
	fetchSearcedTests,
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
	const result = yield call(fetchAllTests, '');
	yield put(setTests(result));
}

export function* getSortedTests(data) {
	const result = yield call(fetchSortedTests, data.value);
	yield put(setTests(result));
}

export function* getSearchTests(data) {
	const result = yield call(fetchSearcedTests, data.value);
	yield put(setTests(result));
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

export function* sortTestsSaga(){
	yield takeEvery(SORT_TESTS, getSortedTests);	
}

export function* searchTestsSaga(){
	yield takeEvery(SEARCH_TESTS, getSearchTests);	
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
	yield spawn(sortTestsSaga);
	yield spawn(searchTestsSaga);
	yield spawn(getTestSaga);
	yield spawn(deleteTestsSaga);
	yield spawn(editTestSaga);
}