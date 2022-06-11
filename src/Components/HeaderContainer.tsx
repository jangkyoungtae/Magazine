/* eslint-disable no-console */
/* eslint-disable camelcase */
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IBoaderList } from '../Types/boaderType';
import CustomButton from './CustomButton';
import SearchInput from './SearchInput';

const BoaderHeader = styled.div`
	width: 100%;
	height: 90px;
	background-color: #1f1f1f;
	position: sticky;
	top: 0px;
	z-index: 999;
	display: flex;
	align-items: center;
`;
const HeaderBox = styled.div`
	width: 33.33%;
	height: 50px;
	display: flex;
	align-items: center;
`;
const ProfileImage = styled.img`
	border: 1px solid black;
	border-radius: 80px;
	overflow: hidden;
	box-sizing: border-box;
	justify-content: center;
	align-items: center;
	object-fit: cover;
	width: 50px;
	height: 50px;
	margin-right: 8px;
`;
const Id = styled.p`
	font-size: 20px;
	color: white;
`;
const ButtonBox = styled.div`
	background-color: white;
	border-radius: 20px;
	margin-right: 20px;
`;

export default function HeaderContainer({ item }: { item: IBoaderList }) {
	const navigate = useNavigate();
	const logoutHandle = () => {
		navigate('/login');
	};

	return (
		<BoaderHeader>
			<HeaderBox>
				<ProfileImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLfRLuVBvaTLlnGskDUeo9yabe_cL2ulxPUA&usqp=CAU" />
				<Id>{item.id}</Id>
			</HeaderBox>
			<HeaderBox
				style={{
					marginLeft: '70px',
					justifyContent: 'center',
				}}
			>
				<SearchInput />
			</HeaderBox>
			<HeaderBox
				style={{
					justifyContent: 'flex-end',
				}}
			>
				<ButtonBox>
					{/* <CustomButton item="알림" color="black" onClickEvent={alaramHandle} fSize={30} radius={20} /> */}
				</ButtonBox>
				<ButtonBox>
					<CustomButton item="로그아웃" color="black" onClickEvent={logoutHandle} fSize={30} radius={20} />
				</ButtonBox>
			</HeaderBox>
		</BoaderHeader>
	);
}
