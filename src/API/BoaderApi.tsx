/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import { FieldValues } from 'react-hook-form';
import { IBoaderList } from '../Types/boaderType';
import setupInterceptorsTo from './Interceptors';

const boaderApi = axios.create({
	baseURL: 'http://localhost:5008/',
});
const callUrl = setupInterceptorsTo(boaderApi);
axios.defaults.headers.post['Content-Type'] = 'application/json';

boaderApi.interceptors.request.use(
	function (config) {
		if (config.headers) {
			config.headers.Authorization = localStorage.getItem('Authorization') || 0 || false;
		}
		return config;
	},
	function (error) {
		// 요청 오류가 있는 작업 수행
		return Promise.reject(error);
	}
);

const callBoaderList = async ({ pageParam = 1 }) => {
	const data = await callUrl.get(`/borders?_sort=id&_order=desc&_page=${pageParam}&_limits=6`);
	return data;
};

const callAddBoard = async (value: FieldValues, type: number) => {
	const addDatas = {
		nickname: '김종국',
		content: value.Contents,
		type,
		likes: 0,
		img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5U2J4WdPI9AY_3LNPpTSDAdYgzZQDD9-dGg&usqp=CAU',
	};
	// forms.append('file', value.image[0]);

	const res = await callUrl.post('/borders', addDatas);
	return res;
};

const callDelBoard = async (card?: IBoaderList) => {
	const data = await callUrl.delete(`/borders/${card?.id}`);
	return data;
};

const callModifyBoard = async (value: FieldValues, tpye: number, card?: IBoaderList) => {
	const addDatas = {
		nickname: card?.nickname,
		likes: card?.likes,
		content: value.Contents,
		type: tpye,
		img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5U2J4WdPI9AY_3LNPpTSDAdYgzZQDD9-dGg&usqp=CAU',
	};

	const res = await callUrl.put(`/borders/${card?.id}`, addDatas);
	return res;
};

const callSignUpUser = async (value: FieldValues) => {
	const addDatas = {
		nickname: value.nickname,
		email: value.email,
		password: value.password,
	};
	const res = await callUrl.post('/users', addDatas);
	return res;
};
const callSignInUser = async (value: FieldValues) => {
	const addDatas = {
		email: value.email,
		password: value.password,
	};
	const res = await callUrl.post('/users', addDatas);
	return res;
};

export const userApi = {
	callSignUpUser: (data: FieldValues) => callSignUpUser(data),
	callSignInUser: (data: FieldValues) => callSignInUser(data),
};

export const boardApi = {
	callBoaderList: (pageParam: number) => callBoaderList({ pageParam }),
	callDelBoard: (card?: IBoaderList) => callDelBoard(card),
	callAddBoard: (data: FieldValues, type: number) => callAddBoard(data, type),
	callModifyBoard: (value: FieldValues, type: number, card?: IBoaderList) => callModifyBoard(value, type, card),
};
