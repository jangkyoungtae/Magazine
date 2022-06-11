/* eslint-disable no-console */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import styled from 'styled-components';

const InputText = styled.textarea`
	display: inline-block;
	padding: 10px; /* label의 패딩값과 일치 */
	width: 550px;
	height: 300px;
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

const InputContentsBox = styled.div`
	margin: 40px;
	padding: 30px;
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
	width: 400px;
	padding: 20px;
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
		background-color: white;
	}
`;
const InputContainer = styled.form`
	box-sizing: border-box;
	justify-content: center;
	align-items: center;
`;

const Image = styled.img`
	width: 400px;
	object-fit: cover;
`;
export default function WriteForm() {
	const [imageUrl, setImageUrl] = useState<string>();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data: FieldValues) => {
		console.log('test ', data);
		// navigate('/login');
	};
	console.log(errors);
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
				<InputText placeholder="Contents" {...register('Contents', { required: true, maxLength: 150 })} />
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
					{...register('image', { required: true, maxLength: 100 })}
					onChange={fileGetChange}
				/>
			</InputImageBox>
			<InputBox>
				<InputSubmit type="submit" value="등록하기" />
			</InputBox>
		</InputContainer>
	);
}
