import axios from 'axios';
import { URL, getAuthUser } from '../index';

export const sendQuestion = async (data) => {
	return axios
		.post(`${URL}/tests/${data.id}/questions`, data.data, {
			headers:{
				Token: `${getAuthUser()}`
			}
		})
		.then((response) => {
			console.log(response.data);
			return response.data;
		})
		.catch((error) => {
			console.log(error);
		});
};

export const editQuestion = async (data) => {
	axios
		.patch(`${URL}/questions/${data.id}`, data, {
			headers:{
				Token: `${getAuthUser()}`
			}
		})
		.then((response) => {
			console.log(response.data);
		})
		.catch((error) => {
			console.log(error);
		});
};

export const deleteQuestion = (data) => {
	axios
		.delete(`${URL}/questions/${data.id}`, {
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

export const sendAnswer = async (data) => {
	return axios
		.post(`${URL}/questions/${data.id}/answers`, data, {
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

export const editAnswer = async (data) => {
	axios
		.patch(`${URL}/answers/${data.id}`, data, {
			headers:{
				Token: `${getAuthUser()}`
			}
		})
		.then((response) => {
			console.log(response.data, ' successfully edit!');
		})
		.catch((error) => {
			console.log(error);
		});
};

export const deleteAnswer = (data) => {
	axios
		.delete(`${URL}/answers/${data.id}`, {
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

export const movingAnswer = async (data) => {
	axios
		.patch(`${URL}/answers/${data.id}/insert_at/:position`, data, {
			headers:{
				Token: `${getAuthUser()}`
			}
		})
		.then((response) => {
			console.log(response.data, ' successfully edit position!');
		})
		.catch((error) => {
			console.log(error);
		});
};