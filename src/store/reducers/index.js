import { combineReducers } from 'redux';
import { tests } from './testsReducer';
import { user } from './userReducer';

export const rootReducer = combineReducers({
	tests, user
});
