import { spawn } from 'redux-saga/effects';

import rootResitrSaga from './registartion';
import rootTestsSaga from './tests';
import rootQuestionsSaga from './questions';

export default function* rootSaga(){
	yield spawn(rootResitrSaga);
	yield spawn(rootTestsSaga);
	yield spawn(rootQuestionsSaga);
}