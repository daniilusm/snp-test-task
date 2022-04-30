export const URL = 'https://snp.drankov.ru/api/v1';

export const getAuthUser = () => {
	const auth_user = JSON.parse(localStorage.getItem('auth_user'));
	return auth_user.auth_token;
};