import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import BoardAtom from '../../Atoms/BoardAtom';
import BoaderCard from '../../Components/BoaderCard';
import BoaderCard2 from '../../Components/BoaderCard2';
import BoaderCard3 from '../../Components/BoaderCard3';
import CustomButton from '../../Components/CustomButton';
import HeaderContainer from '../../Components/HeaderContainer';

const BoaderContainer = styled.div`
	width: 600px;
	margin: 10px auto;
`;

const BoaderAdd = styled.div`
	width: 80px;
	height: 80px;
	background-color: white;
	display: flex;
	position: sticky;
	bottom: 50px;
	border-radius: 160px;
	overflow: hidden;
	float: right;
	z-index: 999;
`;

const BackgroundImage = styled.img`
	z-index: -1;
	position: fixed;
	width: 100%;
	height: 105vh;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	-webkit-user-drag: none;
`;

export default function BoaderPagePresenter() {
	const navigate = useNavigate();
	const movePageAdd = () => {
		navigate('/write');
	};

	const count = useRecoilValue(BoardAtom);
	return (
		<div>
			{count ? (
				<div>
					<BackgroundImage src="/img/MOKOKO_2022_06.png" />
					<HeaderContainer />
					<BoaderContainer>
						{count.map((v) => {
							if (v.type === 1) {
								return <BoaderCard key={v.id} card={v} />;
							}
							if (v.type === 2) {
								return <BoaderCard2 key={v.id} card={v} />;
							}

							return <BoaderCard3 key={v.id} card={v} />;
						})}
						<BoaderAdd>
							<CustomButton
								onClickEvent={movePageAdd}
								item="글 작성"
								color="#1f1f1f"
								width={80}
								height={80}
								fSize={30}
							/>
						</BoaderAdd>
					</BoaderContainer>{' '}
				</div>
			) : (
				<div>data가 없습니다.</div>
			)}
		</div>
	);
}
