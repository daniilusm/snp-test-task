import { takeEvery, put, call, spawn } from 'redux-saga/effects';

import { GET_TESTS } from '../../actions/tests/types';

import { fetchTests } from '../../../api/tests';

import { setTests } from '../../actions/tests';

export function* getTests() {
	const data = yield call(fetchTests, null);
	yield put(setTests(data));
}

export function* getTestsSaga(){
	yield takeEvery(GET_TESTS, getTests);	
}

export default function* rootTestsSaga(){
	yield spawn(getTestsSaga);
}