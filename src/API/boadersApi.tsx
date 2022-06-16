/* eslint-disable import/prefer-default-export */
import { FieldValues } from 'react-hook-form';
import { IBoaderList } from '../Types/boaderType';
import baseApi from './baseApi';

const callBoaderList = async ({ pageParam = 1 }) => {
	try {
		const data = await baseApi.get(`/boards`);
		return data;
	} catch (e) {
		console.log('list 오류', e);
		return e;
	}
};

const callAddBoard = async (value: FieldValues, type: number) => {
	const forms = new FormData();
	forms.append('layoutType', type.toString());
	forms.append('img', value.image[0]);
	forms.append('content', value.Contents);
	const res = await baseApi.post('/boards', forms, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
	return res;
};

// const callAddBoard = async (value: FieldValues, type: number) => {
// 	const addDatas = {
// 		nickname: '김종국',
// 		content: value.Contents,
// 		type,
// 		likes: 0,
// 		img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5U2J4WdPI9AY_3LNPpTSDAdYgzZQDD9-dGg&usqp=CAU',
// 	};

// 	const res = await callUrl.post('/borders', addDatas);
// 	return res;
// };

const callDelBoard = async (card?: IBoaderList) => {
	const data = await baseApi.delete(`/boards/${card?.id}`);
	return data;
};

const callAddLikes = async (id: number) => {
	const data = await baseApi.post(`/boards/${id}/likes`);
	return data;
};

const callDelLikes = async (id: number) => {
	const data = await baseApi.delete(`/boards/${id}/likes`);
	return data;
};

const callModifyBoard = async (value: FieldValues, type: number, card?: IBoaderList) => {
	const forms = new FormData();

	if (card) {
		forms.append('nickname', card.nickname);
		forms.append('content', value.Contents);
		forms.append('layoutType', type.toString());
		if (value.image[0]) {
			forms.append('img', value.image[0]);
		} else {
			forms.append('img', card.img_url);
		}
	}
	const res = await baseApi.post('/boards', forms, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
	return res;
};

export const boardApi = {
	callBoaderList: (pageParam: number) => callBoaderList({ pageParam }),
	callDelBoard: (card?: IBoaderList) => callDelBoard(card),
	callAddBoard: (data: FieldValues, type: number) => callAddBoard(data, type),
	callModifyBoard: (value: FieldValues, type: number, card?: IBoaderList) => callModifyBoard(value, type, card),
	callAddLikes: (id: number) => callAddLikes(id),
	callDelLikes: (id: number) => callDelLikes(id),
};
