/* eslint-disable import/prefer-default-export */
import { FieldValues } from 'react-hook-form';
import baseApi from './baseApi';

const callSignUpUser = async (value: FieldValues) => {
	const addDatas = {
		// name: value.name,
		nickname: value.nickname,
		email: value.email,
		password: value.password,
		// password_confirm: value.password_confirm,
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
