import React, { useState } from 'react';
import styled from 'styled-components';
import backgroundImage from '../../img/MOKOKO_2022_08.png';
import TypeSelectBox from '../../Components/TypeSelectBox';
import WriteForm from '../../Components/WriteForm';
import { IBoaderList } from '../../Types/boaderType';

const MainContainer = styled.div`
	display: flex;

	justify-content: center;
	align-items: center;
	@media screen and (max-width: 1024px) {
		flex-direction: column;
	}
`;
const AddContainer = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const BackgroundImage = styled.img`
	z-index: -1;
	position: fixed;
	bottom: -50px;
	width: 100%;
	height: 120vh;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	-webkit-user-drag: none;
`;

const LoginText = styled.h1`
	font-family: 'Dongle';
	font-size: 60px;
	margin: 0px;
`;

export default function WriteBoardPresenter({ state }: { state: IBoaderList }) {
	return (
		<MainContainer>
			<AddContainer>
				<LoginText>글작성</LoginText>

				<WriteForm card={state} />
			</AddContainer>

			<BackgroundImage src={backgroundImage} />
		</MainContainer>
	);
}
