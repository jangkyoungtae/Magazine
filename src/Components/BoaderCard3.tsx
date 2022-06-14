/* eslint-disable no-console */
/* eslint-disable camelcase */
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { boardApi } from '../API/BoaderApi';
import { IBoaderList } from '../Types/boaderType';
import CustomButton from './CustomButton';

const CardContainer = styled.article`
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
	display: flex;
	width: 100%;
`;

const ConotentBox = styled.div`
	font-family: 'Dongle', sans-serif;
	box-sizing: border-box;
	width: 70%;
	border-radius: 10px;
	padding-left: 20px;
	display: flex;
	justify-content: space-between;
	padding: 0px 30px;
`;

const Content = styled.p`
	font-size: 28px;
	color: black;
	margin: 0px;
	margin-bottom: 10px;
	white-space: pre-line;
	word-break: break-all;
	font-family: 'Gaegu';
`;
const Id = styled.p`
	font-size: 30px;
	color: black;
	font-family: 'Dongle';
`;
const Profile = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const ProfileImage = styled.img`
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
const ContentImageBox = styled.div`
	border-radius: 20px;
	background-color: white;
	margin: 0px;
	padding: 10px;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	border: 0.03em solid #cecece;
`;
const ContentImage = styled.img`
	width: 100%;
	object-fit: contain;
`;
const HeartBox = styled.div`
	width: 100%;
	height: 50px;
	object-fit: cover;
	padding: 40px;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const HeartImage = styled.img`
	width: 40px;
	object-fit: cover;
	cursor: pointer;
`;

const HeartText = styled.p`
	font-size: 20px;
	object-fit: cover;
	font-family: 'Gaegu';
	font-weight: 600;
`;

const TextMore = styled.span`
	font-size: 18px;
	cursor: pointer;
`;
const ButtonBox = styled.div`
	display: flex;
`;

export default function BoaderCard3({ card }: { card: IBoaderList }): JSX.Element {
	const [heart, setHeart] = useState(false);
	const [moreText, setMoreText] = useState(card.content && card.content.length < 30);

	const queryClient = useQueryClient();

	const mutation = useMutation((addData: IBoaderList) => boardApi.callDelBoard(addData), {
		onSuccess: () => {
			queryClient.invalidateQueries('boader_list');
		},
	});

	const deleteClick = () => {
		mutation.mutate(card);
	};

	const navigate = useNavigate();
	const modifyClick = () => {
		console.log('클릭했다');
		navigate('/write', {
			state: {
				card,
			},
		});
	};

	const heartClick = () => {
		setHeart(!heart);
	};

	const moreClick = () => {
		setMoreText(!moreText);
	};
	const like = (count: number) => {
		if (count > 10000) {
			return `${count / 1000}k`;
		}
		if (count > 500) {
			return `${count / 100 / 10}k`;
		}
		if (count === 0) {
			return '0';
		}
		return count;
	};
	return (
		<CardContainer>
			<ProfileBox>
				<Profile>
					<ProfileImage src="https://d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/1bd033059e59464cbe7309a68ce6a569/5034f194ac3a4258aa4cdfa3e7f1205c_1650014872.jpg" />
					<Id>{card.nickname}</Id>
				</Profile>
				<ButtonBox>
					<CustomButton
						item="수정"
						onClickEvent={modifyClick}
						width={45}
						height={45}
						radius={70}
						color="#2e2e2e"
						fSize={25}
					/>
					<CustomButton
						item="삭제"
						onClickEvent={deleteClick}
						width={45}
						height={45}
						radius={70}
						color="#2e2e2e"
						fSize={25}
					/>
				</ButtonBox>
			</ProfileBox>
			<CardBodyBox>
				<ContentImageBox>
					<ContentImage src={card.img_url} alt="" />
				</ContentImageBox>
				{/* <ImageSlider>
					<ContentImageBox>
						<ContentImage src={card.img_url} alt="" />
					</ContentImageBox>
				</ImageSlider> */}
				{card.content && (
					<ConotentBox>
						{moreText ? (
							<Content>
								{`${card.content}`}
								{card.content.length > 50 && <TextMore onClick={moreClick}>&nbsp;&nbsp;&nbsp;접기 </TextMore>}
							</Content>
						) : (
							<Content>
								{card.content.substring(0, 50)}...<TextMore onClick={moreClick}>더보기</TextMore>
							</Content>
						)}
					</ConotentBox>
				)}
			</CardBodyBox>
			<HeartBox>
				<HeartText>좋아요 {like(card.likes)}</HeartText>
				<HeartImage onClick={heartClick} src={!heart ? '/img/heart.png' : '/img/heart_pick.png'} />
			</HeartBox>
		</CardContainer>
	);
}
