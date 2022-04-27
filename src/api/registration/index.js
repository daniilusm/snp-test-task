import axios from 'axios';
import { URL, scopeKey } from '../index';

export const userRegistration = (user) => {
	axios
		.post(`${URL}/signup`, user, {
			headers: {
				'scope-key': `${scopeKey}`,
			},
		})
		.then((response) => {
			console.log(response.data.username, ' successfully registered!');
		})
		.catch((error) => {
			console.log(error);
		});
};

export const userAuthorization = (user) => {
	axios
		.post(`${URL}/signin`, user, {
			headers: {
				'scope-key': `${scopeKey}`,
			},
		})
		.then((response) => {
			console.log(response.data.username, ' successfully authorized!');
		})
		.catch((error) => {
			console.log(error);
		});
};

export const fetchUser = () => {
	axios
		.get(`${URL}/users/current`, {
			headers: {
				'scope-key': `${scopeKey}`,
			},
		})
		.then((response) => {
			console.log('getUser',response);
			return response;
		})
		.catch((error) => {
			console.log(error);
		});
};

export const userLogout = () => {
	axios
		.delete(`${URL}/logout`, {
			headers: {
				'scope-key': `${scopeKey}`,
			},
		})
		.then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.log(error);
		});
};