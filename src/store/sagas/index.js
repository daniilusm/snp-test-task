import { takeEvery, put, call, spawn } from 'redux-saga/effects';
import { fetchingData } from '../../api';
import { GET_TESTS } from '../actions/tests/types';
import { setTests } from '../actions/tests';

export function* getTests() {
	const data = yield call(fetchingData, null);
	yield put(setTests(data));
}

export function* getData() {
	yield takeEvery(GET_TESTS, getTests);
}

export default function* rootSaga() {
	yield spawn(getData);
}
