import axios from 'axios';
import { URL, getAuthUser } from '../index';

axios.defaults.headers = {
	'scope-key': '#E$#F6VUrqVw8SeE'
};

export const userRegistration = (user) => {
	axios
		.post(`${URL}/signup`, user)
		.then((response) => {
			console.log(response.data.username, ' successfully registered!');
		})
		.catch((error) => {
			console.log(error);
		});
};

export const userAuthorization = (user) => {
	axios
		.post(`${URL}/signin`, user)
		.then((response) => {
			console.log(response.data.username, ' successfully authorized!');
			console.log('Autorized token is ', response.data.auth_token);
			localStorage.setItem('auth_user', JSON.stringify(response.data));
		})
		.catch((error) => {
			console.log(error);
		});
};

export const fetchUser = async () => {
	return axios
		.get(`${URL}/users/current`, {
			headers:{
				Token: `${getAuthUser()}`
			}
		})
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(error);
		});
};

export const userLogout = () => {
	axios
		.delete(`${URL}/logout`)
		.then((response) => {
			console.log(response);
			localStorage.removeItem('auth_user');
		})
		.catch((error) => {
			console.log(error);
		});
};