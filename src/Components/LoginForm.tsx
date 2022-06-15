/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-console */
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { userApi } from '../API/BoaderApi';

const InputText = styled.input`
	width: 400px;
	font-size: 20px;
	padding: 20px;
	border-radius: 10px;
`;
const InputSubmit = styled.input`
	border-color: #2b923f;
	font-family: 'Dongle', sans-serif;
	color: white;
	box-shadow: 0 0 40px 40px #2b923f inset, 0 0 0 0 #2b923f;
	transition: all 150ms ease-in-out;
	width: 100%;
	box-sizing: border-box;
	justify-content: center;
	align-items: center;
	font-size: 40px;
	border-radius: 10px;
	cursor: pointer;
	&:hover {
		box-shadow: 0 0 10px 0 #2b923f inset, 0 0 10px 4px #2b923f;
		color: black;
		font-weight: bold;
	}
`;

const InputBox = styled.div`
	margin: 40px;
	display: flex;
	box-sizing: border-box;
	justify-content: space-between;
	align-items: center;
`;
const InputContainer = styled.form`
	box-sizing: border-box;
	justify-content: center;
	align-items: center;
`;

const InputSubmitDisable = styled.input`
	font-family: 'Dongle', sans-serif;
	color: #606060;
	box-shadow: 0 0 40px 40px #cecece inset, 0 0 0 0 #cecece;
	transition: all 150ms ease-in-out;
	background-color: #cecece;
	width: 445px;
	box-sizing: border-box;
	justify-content: center;
	align-items: center;
	font-size: 40px;
	border-radius: 10px;
`;

export default function LoginForm() {
	const navigate = useNavigate();

	const [email, setEmail] = useState<string>('');

	const [password, setPassword] = useState<string>('');

	const { register, handleSubmit } = useForm();

	const mutation = useMutation((addData: FieldValues) => userApi.callSignInUser(addData), {
		onSuccess: (data) => {
			if (data) {
				localStorage.setItem('token', data.data);
				navigate('/');
			}
		},
	});

	const onSubmit = (data: FieldValues) => {
		mutation.mutate(data);
	};

	return (
		<InputContainer onSubmit={handleSubmit(onSubmit)}>
			<InputBox>
				<InputText
					type="text"
					placeholder="Email"
					{...register('email', { required: true, maxLength: 80 })}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
				/>
			</InputBox>
			<InputBox>
				<InputText
					type="password"
					placeholder="Password"
					{...register('password', { required: true, maxLength: 100 })}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
				/>
			</InputBox>
			<InputBox>
				{email && password ? (
					<InputSubmit type="submit" value="로그인" />
				) : (
					<InputSubmitDisable type="submit" value="로그인" disabled />
				)}
			</InputBox>
		</InputContainer>
	);
}
