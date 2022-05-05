import axios from 'axios';
import { URL, getAuthUser } from '../index';

export const sendQuestion = async ({ data, id }) => {
	return await axios
		.post(`${URL}/tests/${id}/questions`, data, {
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

export const editQuestion = async ({ data, id }) => {
	return await axios
		.patch(`${URL}/questions/${id}`, data, {
			headers:{
				Token: `${getAuthUser()}`
			}
		})
		.then((response) => {
			console.log('editQuestion ', response.data);
			return response.data;
		})
		.catch((error) => {
			console.log(error);
		});
};

export const deleteQuestion = (id) => {
	axios
		.delete(`${URL}/questions/${id}`, {
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

export const sendAnswer = async ({ quest_id, answer }) => {
	return axios
		.post(`${URL}/questions/${quest_id}/answers`, answer, {
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

export const editAnswer = async ({answerId, data}) => {
	return await axios
		.patch(`${URL}/answers/${answerId}`, data, {
			headers:{
				Token: `${getAuthUser()}`
			}
		})
		.then((response) => {
			console.log(response.data, ' successfully edit!');
			return response.data;
		})
		.catch((error) => {
			console.log(error);
		});
};

export const deleteAnswer = (id) => {
	axios
		.delete(`${URL}/answers/${id}`, {
			headers:{
				Token: `${getAuthUser()}`
			}
		})
		.then((response) => {
			console.log('delete answer ',response);
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