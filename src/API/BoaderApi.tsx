/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import { FieldValues } from 'react-hook-form';

export const boaderApi = axios.create({
	baseURL: 'http://localhost:5008/',
});

export const callBoaderList = async () => {
	const data = await boaderApi.get('/borders?_sort=id&_order=desc');
	return data;
};

export const callAddBoard = async (value: FieldValues) => {
	const addDatas = {
		nickname: '김종국',
		content: value.Contents,
		type: 2,
		likes: 0,
		img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5U2J4WdPI9AY_3LNPpTSDAdYgzZQDD9-dGg&usqp=CAU',
	};
	// forms.append('file', value.image[0]);
	const config = {
		headers: {
			'content-type': 'application/json',
		},
	};
	const res = await boaderApi.post('/borders', addDatas, config);
	return res;
};

export const callDelBoard = async () => {
	const data = await boaderApi.post('/borders.json');
	return data;
};

export const callModifyBoard = async () => {
	const data = await boaderApi.post('/borders.json');
	return data;
};
