/* eslint-disable no-console */
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
	width: 445px;
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
	justify-content: center;
	align-items: center;
`;
const InputContainer = styled.form`
	box-sizing: border-box;
	justify-content: center;
	align-items: center;
`;

export default function LoginForm() {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data: any) => navigate('/');
	console.log(errors);

	return (
		<InputContainer onSubmit={handleSubmit(onSubmit)}>
			<InputBox>
				<InputText type="text" placeholder="ID" {...register('id', { required: true, maxLength: 80 })} />
			</InputBox>
			<InputBox>
				<InputText
					type="password"
					placeholder="Password"
					{...register('password', { required: true, maxLength: 100 })}
				/>
			</InputBox>
			<InputBox>
				<InputSubmit type="submit" value="로그인" />
			</InputBox>
		</InputContainer>
	);
}
