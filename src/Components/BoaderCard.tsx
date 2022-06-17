/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { boardApi } from '../API/boadersApi';
import { tokenState } from '../Atoms/BoardAtom';
import { IBoaderList } from '../Types/boaderType';
import jwtUtils from '../util/JwtUtil';
import util from '../util/util';
import CustomButton from './CustomButton';
import TodoModal from './DetailModal';

const CardContainer = styled.article`
	box-sizing: border-box;
	background-color: white;
	justify-content: center;
	align-items: center;
	padding: 20px;
	width: 100%;
	height: 80%;
	margin: 20px;
	cursor: pointer;
`;

const CardContainerBox = styled.article`
	box-sizing: border-box;
	background-color: white;
	border-radius: 20px;
	box-shadow: 3px 2px 2px black;
	justify-content: center;
	align-items: center;
	padding: 20px;
	width: 80%;
	height: 80%;
	margin: 20px;

	&:hover {
		width: 100%;
		padding: 40px;
		box-shadow: 0 0 10px 10px #4e4e4e inset, 0 0 0 0 #4e4e4e;
		height: 100%;
	}
`;
const ProfileBox = styled.div`
	height: 50px;
	padding: 5px;
	justify-content: space-between;
	box-sizing: border-box;
	align-items: center;
	display: flex;
`;
const CardBodyBox = styled.div<{ type: number }>`
	width: 100%;
	display: ${(props) => (props.type === 1 ? 'block' : 'flex')};
	justify-content: space-between;
	align-items: center;
	.second {
		order: ${(props) => (props.type === 3 ? 0 : 1)};
	}
	.first {
		order: ${(props) => (props.type === 3 ? 1 : 0)};
	}
`;
const ConotentBox = styled.div<{ type: number }>`
	font-family: 'Dongle', sans-serif;
	box-sizing: border-box;
	border-radius: 10px;
	width: ${(props) => (props.type > 1 ? '40%' : '100%')};
	padding-top: 40px;
	padding-left: ${(props) => (props.type > 1 ? (props.type > 2 ? '0px' : '40px') : '40px')};
	padding-right: ${(props) => (props.type > 1 ? (props.type > 2 ? '40px' : '0px') : '40px')};
`;
const ContentImageBox = styled.div`
	background-color: white;
	padding: 10px;

	box-sizing: border-box;
	overflow: hidden;
`;

const Content = styled.p`
	font-size: 23px;
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

const ContentImage = styled.img<{ type: number }>`
	border-radius: 20px;
	width: ${(props) => (props.type === 1 ? '100%' : '200px')}; ;
`;
const HeartBox = styled.div`
	width: 100%;
	height: 50px;
	object-fit: cover;
	margin: 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	z-index: 100;
`;
const HeartImage = styled.img`
	width: 40px;
	object-fit: cover;
	cursor: pointer;
	margin-right: 40px;
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
	width: 40%;
	display: flex;
	justify-content: end;
`;

export default function BoaderCard({ card }: { card: IBoaderList }): JSX.Element {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};
	const token = useRecoilValue(tokenState);
	const [heart, setHeart] = useState<boolean>();
	const [myBoard, setHMyBoard] = useState(false);
	const [moreText, setMoreText] = useState(card.content && card.content.length < 30);
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const boadrDelMutate = useMutation((addData: IBoaderList) => boardApi.callDelBoard(addData), {
		onSuccess: () => {
			queryClient.invalidateQueries('boader_list');
		},
	});
	const likesAddMutate = useMutation((addData: number) => boardApi.callAddLikes(addData), {
		onSuccess: () => {
			queryClient.invalidateQueries('boader_list');
			setHeart(true);
		},
	});
	const likesDelMutate = useMutation((addData: number) => boardApi.callDelLikes(addData), {
		onSuccess: () => {
			queryClient.invalidateQueries('boader_list');
			setHeart(false);
		},
	});
	const heartClick = () => {
		if (!token && token === '') Swal.fire('로그인 요청', '로그인이 필요한 서비스 입니다 .', 'error');
		else likesAddMutate.mutate(card.id);
	};

	const heartDelClick = () => {
		likesDelMutate.mutate(card.id);
	};

	const deleteClick = () => {
		boadrDelMutate.mutate(card);
	};

	const modifyClick = () => {
		console.log('클릭했다test');
		navigate('/write', {
			state: {
				card,
			},
		});
	};

	useEffect(() => {
		if (jwtUtils.isAuth(token)) {
			const userId = jwtUtils.getId(token);
			setHeart(card.likes.includes(userId));
			setHMyBoard(card.userId === userId);
		}
	}, []);
	return (
		<CardContainerBox>
			<ProfileBox>
				<Profile>
					<ProfileImage src="https://d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/1bd033059e59464cbe7309a68ce6a569/5034f194ac3a4258aa4cdfa3e7f1205c_1650014872.jpg" />
					<Id>{card.nickname}</Id>
				</Profile>
				{myBoard && (
					<ButtonBox>
						<ButtonBox>
							<CustomButton
								item="수정"
								onClickEvent={modifyClick}
								width={100}
								height={45}
								radius={70}
								color="#2e2e2e"
								fSize={25}
							/>
						</ButtonBox>
						<ButtonBox>
							<CustomButton
								item="삭제"
								onClickEvent={deleteClick}
								width={100}
								height={45}
								radius={70}
								color="#2e2e2e"
								fSize={25}
							/>
						</ButtonBox>
					</ButtonBox>
				)}
			</ProfileBox>
			<CardContainer onClick={handleOpen}>
				<TodoModal open={open} setOpen={setOpen} card={card} heart={heart} setHeart={setHeart} />

				<CardBodyBox type={card.layoutType}>
					{card.content && (
						<ConotentBox className="first" type={card.layoutType}>
							<Content>{card.content.substring(0, 50)}...</Content>
						</ConotentBox>
					)}
					<ContentImageBox className="second">
						<ContentImage type={card.layoutType} src={card.img_url} alt="" />
					</ContentImageBox>
					{/* <ImageSlider>
					<ContentImageBox>
						<ContentImage src={card.img_url} alt="" />
					</ContentImageBox>
				</ImageSlider> */}
				</CardBodyBox>
			</CardContainer>
			<HeartBox>
				<HeartText>좋아요 {util.like(card.likes.length)}</HeartText>
				<HeartImage
					onClick={heart ? heartDelClick : heartClick}
					src={!heart ? '/img/heart.png' : '/img/heart_pick.png'}
				/>
			</HeartBox>
		</CardContainerBox>
	);
}
