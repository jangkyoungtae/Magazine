import styled from 'styled-components';
import WriteForm from '../../Components/WriteForm';

const MainContainer = styled.div`
	height: 100vh;
	width: 100%;
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const BackgroundImage = styled.img`
	z-index: -1;
	position: fixed;
	width: 100%;
	height: 115vh;
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
export default function WriteBoardPresenter() {
	return (
		<MainContainer>
			<BackgroundImage src="/img/MOKOKO_2022_08.png" />
			<LoginText>글작성</LoginText>
			<WriteForm />
		</MainContainer>
	);
}
