import axios from 'axios';
axios.defaults.withCredentials = true;

export async function fetchingData() {
	axios
		.get('https://snp.drankov.ru/api/v1/tests', {
			headers: {
				'scope-key': '#E$#F6VUrqVw8SeE',
			},
		})
		.then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.log(error);
		});

	// const request = await fetch('https://snp.drankov.ru/api/v1/tests', {
	// 	headers: {
	// 		'scope-key': '#E$#F6VUrqVw8SeE',
	// 	}
	// });
	// const result = await request.json();
	// console.log(result);
}
