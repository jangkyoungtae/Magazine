/* eslint-disable no-alert */
/* eslint-disable no-console */
import { useCallback, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { userApi } from '../API/userApi';

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

const InputAllow = styled.span``;

const InputBox = styled.div`
	margin: 40px;
	display: flex;
	box-sizing: border-box;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
const InputContainer = styled.form`
	box-sizing: border-box;
	justify-content: center;
	align-items: center;
`;

export default function SignupForm() {
	const [, setName] = useState<string>('');
	const [, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [, setPasswordConfirm] = useState<string>('');

	const [nameMessage, setNameMessage] = useState<string>('');
	const [emailMessage, setEmailMessage] = useState<string>('');
	const [passwordMessage, setPasswordMessage] = useState<string>('');
	const [passwordConfirmMessage, setPasswordConfirmMessage] = useState<string>('');

	const [isName, setIsName] = useState<boolean>(false);
	const [isEmail, setIsEmail] = useState<boolean>(false);
	const [isPassword, setIsPassword] = useState<boolean>(false);
	const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false);

	const navigate = useNavigate();

	const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
		if (e.target.value.length < 2 || e.target.value.length > 5) {
			setNameMessage('2글자 이상 5글자 미만으로 입력해주세요.');
			setIsName(false);
		} else {
			setNameMessage('올바른 이름 형식입니다');
			setIsName(true);
		}
	}, []);

	// 이메일
	const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const emailRegex =
			/([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		const emailCurrent = e.target.value;
		setEmail(emailCurrent);

		if (!emailRegex.test(emailCurrent)) {
			setEmailMessage('이메일 형식이 틀렸어요! 다시 확인해주세요');
			setIsEmail(false);
		} else {
			setEmailMessage('올바른 이메일 형식이에요');
			setIsEmail(true);
		}
	}, []);

	// 비밀번호
	const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
		const passwordCurrent = e.target.value;
		setPassword(passwordCurrent);

		if (!passwordRegex.test(passwordCurrent)) {
			setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!');
			setIsPassword(false);
		} else {
			setPasswordMessage('안전한 비밀번호에요');
			setIsPassword(true);
		}
	}, []);

	// 비밀번호 확인
	const onChangePasswordConfirm = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const passwordConfirmCurrent = e.target.value;
			setPasswordConfirm(passwordConfirmCurrent);

			if (password === passwordConfirmCurrent) {
				setPasswordConfirmMessage('비밀번호를 똑같이 입력했어요');
				setIsPasswordConfirm(true);
			} else {
				setPasswordConfirmMessage('비밀번호가 틀려요. 다시 확인해주세요');
				setIsPasswordConfirm(false);
			}
		},
		[password]
	);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const mutation = useMutation((addUser: FieldValues) => userApi.callSignUpUser(addUser), {
		onSuccess: () => {
			alert('회원가입이 완료되었습니다.');
			navigate('/login');
		},
	});
	const onSubmit = (data: FieldValues) => {
		if (isName && isEmail && isPassword && isPasswordConfirm) mutation.mutate(data);
	};
	console.log(errors);

	return (
		<InputContainer onSubmit={handleSubmit(onSubmit)}>
			<InputBox>
				<InputText
					type="text"
					placeholder="Nickname"
					{...register('nickname', { required: true, maxLength: 80 })}
					onChange={onChangeName}
				/>
				<InputAllow>{nameMessage}</InputAllow>
			</InputBox>
			<InputBox>
				<InputText
					type="email"
					placeholder="Email"
					{...register('email', { required: true, maxLength: 80 })}
					onChange={onChangeEmail}
				/>
				<InputAllow>{emailMessage}</InputAllow>
			</InputBox>
			<InputBox>
				<InputText
					type="password"
					placeholder="Password"
					{...register('password', { required: true, maxLength: 100 })}
					onChange={onChangePassword}
				/>
				<InputAllow>{passwordMessage}</InputAllow>
			</InputBox>
			<InputBox>
				<InputText
					type="password"
					placeholder="Password_confirm"
					{...register('password_confirm', { required: true, maxLength: 100 })}
					onChange={onChangePasswordConfirm}
				/>
				<InputAllow>{passwordConfirmMessage}</InputAllow>
			</InputBox>
			<InputBox>
				{isName && isEmail && isPassword && isPasswordConfirm ? (
					<InputSubmit type="submit" value="가입하기" disabled={false} />
				) : (
					<InputSubmitDisable type="submit" value="가입하기" disabled />
				)}
			</InputBox>
		</InputContainer>
	);
}
