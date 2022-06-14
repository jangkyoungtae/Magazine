/* eslint-disable react/button-has-type */
/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import BoardAtom from '../../Atoms/BoardAtom';
import BoaderCard from '../../Components/BoaderCard';
import BoaderCard2 from '../../Components/BoaderCard2';
import BoaderCard3 from '../../Components/BoaderCard3';
import CustomButton from '../../Components/CustomButton';
import HeaderContainer from '../../Components/HeaderContainer';
import useIntersectionObserver from '../../Hooks/useIntersectionObserver';

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

const BoaderBox = styled.div`
	width: 100%;
	padding: 10px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;
export default function BoaderPagePresenter() {
	const [itemCount, setItemCount] = useState(1);
	const navigate = useNavigate();
	const count = useRecoilValue(BoardAtom);
	const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
		if (isIntersecting) {
			setItemCount((v) => {
				if (count.length - 1 > v + 1) {
					return v + 1;
				}
				return count.length - 1;
			});
		}
	};
	const movePageAdd = () => {
		navigate('/write');
	};
	const { setTarget } = useIntersectionObserver({ onIntersect });

	return (
		<div>
			{count ? (
				<div>
					<BackgroundImage src="/img/MOKOKO_2022_06.png" />
					<HeaderContainer />
					<BoaderContainer>
						{count.map((v, i) => {
							if (i !== itemCount) {
								return (
									count.length >= itemCount &&
									i <= itemCount && (
										<BoaderBox key={v.id}>
											{v.type === 1 ? (
												<BoaderCard card={v} />
											) : v.type === 2 ? (
												<BoaderCard2 card={v} />
											) : (
												<BoaderCard3 card={v} />
											)}
										</BoaderBox>
									)
								);
							}
							return (
								count.length >= itemCount &&
								i <= itemCount && (
									<BoaderBox key={v.id} ref={setTarget}>
										{v.type === 1 ? (
											<BoaderCard card={v} />
										) : v.type === 2 ? (
											<BoaderCard2 card={v} />
										) : (
											<BoaderCard3 card={v} />
										)}
									</BoaderBox>
								)
							);
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
					</BoaderContainer>
				</div>
			) : (
				<div>data가 없습니다.</div>
			)}
		</div>
	);
}
