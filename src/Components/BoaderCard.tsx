/* eslint-disable camelcase */
import { useState } from 'react';
import styled from 'styled-components';
import { IBoaderList } from '../Types/boaderType';
import CustomButton from './CustomButton';
import ImageSlider from './ImageSlider';

const CardContainer = styled.div`
	width: 100%;
	box-sizing: border-box;
	background-color: white;
	border-radius: 20px;
	box-shadow: 3px 2px 2px black;
	justify-content: center;
	align-items: center;
	padding: 10px;
	margin: 20px;
`;
const ProfileBox = styled.div`
	height: 50px;
	padding: 5px;
	justify-content: space-between;
	box-sizing: border-box;
	align-items: center;
	display: flex;
`;
const CardBodyBox = styled.div`
	width: 100%;
`;
const ConotentBox = styled.div`
	font-family: 'Dongle', sans-serif;
	box-sizing: border-box;
	width: 100%;
	border-radius: 10px;
	padding-left: 20px;
	display: flex;
	justify-content: space-between;
	padding: 0px 30px;
`;

const Content = styled.p`
	width: 480px;
	font-size: 28px;
	color: black;
	margin: 0px;
	margin-bottom: 10px;
	white-space: pre-line;
	word-break: break-all;
	font-family: 'Gaegu';
`;
const Id = styled.p`
	font-size: 20px;
	color: black;
`;
const Profile = styled.div`
	display: flex;
	justify-content: center;
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
	border: 0.03em solid #1e1e1e;
`;
const ContentImageBox = styled.div`
	border-radius: 20px;
	background-color: white;
	margin: 0px;
	padding: 40px;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	border: 0.03em solid #cecece;
`;
const ContentImage = styled.img`
	width: 100%;
`;
const HeartBox = styled.div`
	width: 30px;
	object-fit: cover;
`;
const HeartImage = styled.img`
	width: 35px;
	object-fit: cover;
	cursor: pointer;
`;

export default function BoaderCard({ card }: { card: IBoaderList }): JSX.Element {
	const [heart, setHeart] = useState(false);
	const image_list = [
		'data:image/png;base64,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',
		'data:image/png;base64,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',
		'data:image/png;base64,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',
		'data:image/png;base64,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',
		'data:image/png;base64,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',
	];
	const buttonClick = () => {
		console.log('클릭했다');
	};
	const heartClick = () => {
		setHeart(!heart);
	};
	return (
		<CardContainer>
			<ProfileBox>
				<Profile>
					<ProfileImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLfRLuVBvaTLlnGskDUeo9yabe_cL2ulxPUA&usqp=CAU" />
					<Id>{card.id}</Id>
				</Profile>
				<CustomButton
					item="수정"
					onClickEvent={buttonClick}
					width={45}
					height={45}
					radius={70}
					color="#2e2e2e"
					fSize={25}
				/>
			</ProfileBox>
			<CardBodyBox>
				<ImageSlider>
					{image_list.map((v) => {
						return (
							<ContentImageBox>
								<ContentImage src={v} alt="" />
							</ContentImageBox>
						);
					})}
				</ImageSlider>
				<ConotentBox>
					<Content>{card.description.length < 150 ? card.description : card.description.substring(0, 150)}</Content>
					<HeartBox>
						<HeartImage onClick={heartClick} src={!heart ? '/img/heart.png' : '/img/heart_pick.png'} />
					</HeartBox>
				</ConotentBox>
			</CardBodyBox>
		</CardContainer>
	);
}
