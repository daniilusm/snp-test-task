import { combineReducers } from 'redux';
import { tests } from './testsReducer';

export const rootReducer = combineReducers({
	tests,
});
