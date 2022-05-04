import { combineReducers } from 'redux';
import { tests } from './testsReducer';
import { user } from './userReducer';
import { questions } from './questionsReducer';

export const rootReducer = combineReducers({
	tests, user, questions
});
