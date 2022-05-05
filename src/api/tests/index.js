import axios from 'axios';
import { URL, getAuthUser } from '../index';

export const fetchTests = async () => {
	return axios
		.get(`${URL}/tests`, {
			headers:{
				Token: `${getAuthUser()}`
			}
		})
		.then((response) => {
			console.log('fetched all tests ', response.data.tests);
			return response.data.tests;
		})
		.catch((error) => {
			console.log(error);
		});
};

export const fetchTestById = async (id) => {
	return axios
		.get(`${URL}/tests/${id}`, {
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

export const editTest = async (data) => {
	axios
		.patch(`${URL}/tests/${data.id}`, data, {
			headers:{
				Token: `${getAuthUser()}`
			}
		})
		.then((response) => {
			console.log(response.data, ' successfully edit!');
			// return response.data;
		})
		.catch((error) => {
			console.log(error);
		});
};

export const sendTest = async (title) => {
	return axios
		.post(`${URL}/tests`, {title: title}, {
			headers:{
				Token: `${getAuthUser()}`
			}
		})
		.then((response) => {
			console.log(response.data, ' successfully create!');
			return response.data;
		})
		.catch((error) => {
			console.log(error);
		});
};


export const deleteTest = (id) => {
	axios
		.delete(`${URL}/tests/${id}`, {
			headers:{
				Token: `${getAuthUser()}`
			}
		})
		.then((response) => {
			console.log('delete ',response);
		})
		.catch((error) => {
			console.log(error);
		});
};