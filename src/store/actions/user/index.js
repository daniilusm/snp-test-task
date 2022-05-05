import { 
	REGISTRATION_USER,
	POST_REGISTRATION_USER, 
	AUTHORIZATION_USER,
	POST_AUTHORIZATION_USER,
	GET_USER,
	SET_USER,
	LOGOUT_USER,
	DELETE_USER 
} from './types';

export function registrUser(user) {
	return {
		type: REGISTRATION_USER,
		user
	};
}

export function postRegistrUser(data) {
	return {
		type: POST_REGISTRATION_USER,
		payload: data,
	};
}

export function autorizUser(user) {
	return {
		type: AUTHORIZATION_USER,
		user
	};
}

export function postAutorizUser(data) {
	return {
		type: POST_AUTHORIZATION_USER,
		payload: data,
	};
}

export function getUser() {
	return {
		type: GET_USER,
	};
}

export function setUser(data) {
	return {
		type: SET_USER,
		payload: data,
	};
}

export function logoutUser() {
	return {
		type: LOGOUT_USER,
	};
}

export function deleteUser(data) {
	return {
		type: DELETE_USER,
		data,
	};
}
