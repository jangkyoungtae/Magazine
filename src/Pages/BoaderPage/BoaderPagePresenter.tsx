import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BoaderCard from '../../Components/BoaderCard';
import CustomButton from '../../Components/CustomButton';
import HeaderContainer from '../../Components/HeaderContainer';

import { IBoaderList } from '../../Types/boaderType';

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

export default function BoaderPagePresenter({ item }: { item: Array<IBoaderList> }) {
	const navigate = useNavigate();
	const movePageAdd = () => {
		navigate('/write');
	};
	return (
		<>
			<BackgroundImage src="/img/MOKOKO_2022_06.png" />
			<HeaderContainer item={item[0]} />
			<BoaderContainer>
				{item.map((v) => {
					return <BoaderCard key={v.id} card={v} />;
				})}
				<BoaderAdd>
					<CustomButton onClickEvent={movePageAdd} item="글 작성" color="black" width={80} height={80} fSize={30} />
				</BoaderAdd>
			</BoaderContainer>
		</>
	);
}
