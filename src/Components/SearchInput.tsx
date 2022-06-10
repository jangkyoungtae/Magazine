import styled from 'styled-components';
import CustomButton from './CustomButton';

const InputContainer = styled.div`
	background-color: white;
	border-radius: 10px;
	display: flex;
	overflow: hidden;
	box-sizing: border-box;
`;

const InputSearch = styled.input`
	background-color: white;
	width: 400px;
	border: 0px;
	font-size: 30px;
	margin: 0px;
	padding-left: 15px;
	overflow: hidden;
	box-sizing: border-box;
	font-family: 'Dongle';
`;

export default function SearchInput() {
	const searchHandler = () => {
		console.log('검색하기');
	};
	return (
		<InputContainer>
			<InputSearch type="text" />
			<CustomButton item="검색" color="black" width={60} height={60} fSize={30} onClickEvent={searchHandler} />
		</InputContainer>
	);
}
