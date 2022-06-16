/* eslint-disable import/prefer-default-export */
import { FieldValues } from 'react-hook-form';
import baseApi from './baseApi';

const callSignUpUser = async (value: FieldValues) => {
	const addDatas = {
		nickname: value.nickname,
		email: value.email,
		password: value.password,
	};
	const res = await baseApi.post('/signup', addDatas);
	return res;
};
const callSignInUser = async (value: FieldValues) => {
	const addDatas = {
		email: value.email,
		password: value.password,
	};
	const res = await baseApi.post('/login', addDatas);
	return res;
};

export const userApi = {
	callSignUpUser: (data: FieldValues) => callSignUpUser(data),
	callSignInUser: (data: FieldValues) => callSignInUser(data),
};
