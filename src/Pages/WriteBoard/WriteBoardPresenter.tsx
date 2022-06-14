import React, { useState } from 'react';
import styled from 'styled-components';
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

const TypeContainer = styled.div`
	width: 20%;
	display: flex;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 1024px) {
		flex-direction: column;
	}
`;

const TypeBox = styled.div`
	width: 100%;
	padding: 20px;

	@media screen and (max-width: 1024px) {
		display: flex;
	}
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
	const [tpye, setType] = useState<number>(1);

	return (
		<MainContainer>
			<AddContainer>
				<LoginText>글작성</LoginText>

				<WriteForm card={state} types={(state && state.type) || tpye} />
			</AddContainer>
			<TypeContainer>
				<TypeBox onChange={(e: React.ChangeEvent<HTMLInputElement>) => setType(Number(e.target.value))}>
					<TypeSelectBox type={1} />
					<TypeSelectBox type={2} />
					<TypeSelectBox type={3} />
				</TypeBox>
			</TypeContainer>
			<BackgroundImage src="/img/MOKOKO_2022_08.png" />
		</MainContainer>
	);
}
