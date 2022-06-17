/* eslint-disable no-console */
/* eslint-disable camelcase */
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { tokenState } from '../Atoms/BoardAtom';
import CustomButton from './CustomButton';
// import SearchInput from './SearchInput';

const BoaderHeader = styled.div`
	height: 90px;
	background-color: black;
	position: sticky;
	top: 0px;
	z-index: 999;
	display: flex;
	align-items: center;
`;
const HeaderBox = styled.div`
	width: 33.33%;
	height: 90px;
	display: flex;
	overflow: hidden;
	align-items: center;
`;
const ProfileImage = styled.img`
	overflow: hidden;
	box-sizing: border-box;
	justify-content: center;
	align-items: center;
	object-fit: cover;
	margin-right: 8px;
	margin-top: 10px;
`;

const ButtonBox = styled.div`
	width: 7em;
	background-color: white;
	border-radius: 20px;
	margin-right: 30px;
`;

export default function HeaderContainer() {
	const navigate = useNavigate();
	const [token, setToken] = useRecoilState(tokenState);
	const logoutHandle = () => {
		setToken('');
		navigate('/login');
	};

	return (
		<BoaderHeader>
			<HeaderBox>
				<ProfileImage src="data:image/jpeg;base64,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" />
				{/* <Id>Magazine</Id> */}
			</HeaderBox>
			<HeaderBox
				style={{
					marginLeft: '70px',
					justifyContent: 'center',
				}}
			>
				{/* <SearchInput /> */}
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
					<CustomButton
						item={token ? '로그아웃' : '로그인'}
						color="#1f1f1f"
						onClickEvent={logoutHandle}
						fSize={30}
						width={100}
						radius={20}
					/>
				</ButtonBox>
			</HeaderBox>
		</BoaderHeader>
	);
}
