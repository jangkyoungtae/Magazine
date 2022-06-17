/* eslint-disable react/require-default-props */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/alt-text */
import React, { useCallback, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { boardApi } from '../API/boadersApi';
import useBoardHooks from '../Hooks/useBoardHooks';
import { IBoaderList } from '../Types/boaderType';

const InputText = styled.textarea`
	padding: 10px; /* label의 패딩값과 일치 */
	width: 100%;
	height: 100%;
	font-size: 30px;
	border: none;
	resize: none;
	font-family: 'Gaegu';
`;

const InputFile = styled.input`
	position: absolute;
	width: 30px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	border: 0;
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
	justify-content: center;
	align-items: center;
`;

const InputContentsBox = styled.div`
	padding: 30px;
	width: 100%;
	height: 400px;
	border: 1px solid black;
	display: flex;
	box-sizing: border-box;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	background-color: white;
`;

const InputImageBox = styled.div`
	margin: 40px;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	justify-content: center;
	align-items: center;
`;

const ImageBox = styled.div`
	width: 20%;
	padding: 10px;
	box-shadow: 2px 3px 3px black;
	border-radius: 20px;
	background-color: white;
`;

const InputImageLabel = styled.label`
	border-color: #2b923f;
	font-family: 'Dongle', sans-serif;
	color: white;
	display: flex;
	margin-top: 10px;
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
		background-color: white;
	}
`;
const InputContainer = styled.form`
	box-sizing: border-box;
	width: 100%;
	justify-content: center;
	align-items: center;
`;

const Image = styled.img`
	width: 100%;
	border-radius: 20px;
	object-fit: cover;
`;

export default function WriteForm({ card, type }: { card?: IBoaderList; type: number }) {
	const [imageUrl, setImageUrl] = useState<string | undefined>(card?.img_url);
	const [inputContents, setInputContents] = useState<string | undefined>(card?.content);
	const navigate = useNavigate();
	/*
	추가하는 R-Q Mutation
	addData :react-hook-form 에서 전달받은 값
	*/
	const { updateBoard, addBoard } = useBoardHooks();
	const { register, handleSubmit } = useForm();

	/*
	react-hook-form submit 실행시 시작
	data: form 안에 있는 input 의 데이터 값의 객체
	현재 게시물의 데이터를가지고 있다면 수정
	현재 게시물 정보가없다면 추가
	*/
	const onSubmit = useCallback((data: FieldValues) => {
		console.log('test');
		if (!card) addBoard({ addData: data, type });
		else updateBoard({ upData: data, type, card });
		navigate('/');
	}, []);

	/*
	react-hook-form 의 input 파일 형식의 데이텨 변경시
	image 의 url 변경
	*/
	const fileGetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const filename = e.target.files;

		if (filename) {
			const abc = filename[0];
			setImageUrl(URL.createObjectURL(abc));
		}
	};
	return (
		<InputContainer onSubmit={handleSubmit(onSubmit)}>
			<InputContentsBox>
				<InputText
					placeholder="Contents"
					{...register('Contents', { required: true, maxLength: 150 })}
					value={inputContents}
					onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInputContents(e.target.value)}
				/>
				{/* <InputText type="text" placeholder="ID" {...register('id', { required: false, maxLength: 80 })} /> */}
			</InputContentsBox>
			<InputImageBox>
				{imageUrl && (
					<ImageBox>
						<Image src={imageUrl} />
					</ImageBox>
				)}
				<InputImageLabel htmlFor="files">이미지 선택</InputImageLabel>
				<InputFile
					id="files"
					type="file"
					placeholder="image_files"
					{...register('image', { required: false, maxLength: 2000 })}
					onChange={fileGetChange}
				/>
			</InputImageBox>
			<InputBox>
				<InputSubmit type="submit" value="등록하기" />
			</InputBox>
		</InputContainer>
	);
}
