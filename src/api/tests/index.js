import axios from 'axios';
import { URL, getAuthUser } from '../index';

export const fetchTests = async () => {
	return axios
		.get(`${URL}/tests`, {
			headers:{
				Token: `${getAuthUser()}`
			}
		});
};

export const postNewTest = (title) => {
	axios
		.post(`${URL}/tests`, title)
		.then((response) => {
			console.log(response.data, ' successfully create!');
		})
		.catch((error) => {
			console.log(error);
		});
};