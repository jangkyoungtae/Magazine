import axios from 'axios';

export const boaderApi = axios.create({
	baseURL: 'http://localhost:3000/api',
});

export const callBoaderList = async () => {
	const data = await boaderApi.get('/wordList.json');
	return data;
};
