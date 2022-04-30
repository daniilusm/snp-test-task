import { takeEvery, put, call, spawn } from 'redux-saga/effects';

import { 
	REGISTRATION_USER,
	AUTHORIZATION_USER,
	GET_USER,
	LOGOUT_USER
} from '../../actions/user/types';

import {
	// postRegistrUser,
	// postAutorizUser,
	setUser,
	// deleteUser
} from '../../actions/user';

import {
	userRegistration,
	userAuthorization,
	fetchUser,
	userLogout
} from '../../../api/registration';

export function* signupUser(data) {
	yield call(userRegistration, data.user);
	// yield put(postRegistrUser(data.user));
}

export function* signinUser(data) {
	yield call(userAuthorization, data.user);
	// yield put(postAutorizUser(data));
}

export function* getCurrentUser() {
	const data = yield call(fetchUser, null);
	yield put(setUser(data));
}

export function* logoutUser() {
	yield call(userLogout, null);
	// yield put(deleteUser(data));
}

export function* registrationSaga() {
	yield takeEvery(REGISTRATION_USER, signupUser);
}

export function* authorizationSaga() {
	yield takeEvery(AUTHORIZATION_USER, signinUser);
}

export function* getUserSaga() {
	yield takeEvery(GET_USER, getCurrentUser);
}

export function* logoutSaga() {
	yield takeEvery(LOGOUT_USER, logoutUser);
}

export default function* rootResitrSaga() {
	yield spawn(registrationSaga);
	yield spawn(authorizationSaga);
	yield spawn(getUserSaga);
	yield spawn(logoutSaga);
}
