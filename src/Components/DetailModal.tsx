/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/ban-types */
import { Box, Modal } from '@mui/material';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import oulineHeart from '../img/heart.png';
import pickHeart from '../img/heart_pick.png';
import { tokenState } from '../Atoms/BoardAtom';
import useLikeHooks from '../Hooks/useLikeHooks';
import { IBoaderList } from '../Types/boaderType';
import jwtUtils from '../util/JwtUtil';
import util from '../util/util';

const modalStyle = {
	position: 'fixed',
	zIndex: 10,
	display: 'flex',
	justifyContent: 'center',
	alignItem: 'center',
	flexDirection: 'column',
	background: '#ffffe7',
	overflow: 'auto',
	top: '8vh',
	left: '18vw',
	right: '18vw',
	bottom: '8vh',
	WebkitOverflowScrolling: 'touch',
	borderRadius: '14px',
	outline: 'none',
};

const ModalContainer = styled.div`
	width: 100%;
	justify-content: 'center';
	display: flex;
	flex-direction: column;
	height: 100%;
	background-color: white;
	box-sizing: border-box;
	padding: 30px;
	overflow: hidden;
`;
const ModalHeader = styled.div`
	width: 100%;
	display: flex;
	height: 100px;
	justify-content: start;
	align-items: center;
`;
const ProFileImage = styled.img`
	width: 100px;
	height: 100px;
`;

const ProFileNickName = styled.p`
	font-size: 20px;
	font-weight: 900;
`;

const ModalBody = styled.div`
	width: 100%;
	height: 80%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;
const ModalFoot = styled.div`
	width: 100%;
	height: 10%;
	display: flex;
	justify-content: space-between;
`;

const ModalImage = styled.img`
	width: 56%;
	justify-content: center;
`;
const ModalContent = styled.p`
	width: 60%;
	justify-content: start;
	font-size: 35px;
	margin: 3px;
	font-family: 'Gaegu';
`;

const HeartImage = styled.img`
	width: 50px;
	height: 50px;
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

function TodoModal({
	open,
	setOpen,
	card,
	heart,
	setHeart,
}: {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	card: IBoaderList;
	heart: boolean | undefined;
	setHeart: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const token = useRecoilValue(tokenState);
	const handleClose = () => {
		setOpen(false);
	};
	const { likesAddMutate, likesDelMutate } = useLikeHooks(setHeart);

	const heartClick = () => {
		if (!token && token === '') Swal.fire('로그인 요청', '로그인이 필요한 서비스 입니다 .', 'error');
		else likesAddMutate(card.id);
	};

	const heartDelClick = () => {
		likesDelMutate(card.id);
	};
	useEffect(() => {
		if (jwtUtils.isAuth(token)) {
			const userId = jwtUtils.getId(token);
			setHeart(card.likes.includes(userId));
		}
	}, [card.likes, setHeart, token]);
	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={modalStyle}>
				<ModalContainer>
					<ModalHeader>
						<ProFileImage src="https://d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/1bd033059e59464cbe7309a68ce6a569/5034f194ac3a4258aa4cdfa3e7f1205c_1650014872.jpg" />
						<ProFileNickName>{card.nickname}</ProFileNickName>
					</ModalHeader>
					<ModalBody>
						<ModalImage src={card.img_url} />
						<ModalContent>{card.content}</ModalContent>
					</ModalBody>
					<ModalFoot>
						<HeartText>좋아요 {util.like(card.likes.length)}</HeartText>
						<HeartImage onClick={heart ? heartDelClick : heartClick} src={!heart ? oulineHeart : pickHeart} />
					</ModalFoot>
				</ModalContainer>
			</Box>
		</Modal>
	);
}

export default TodoModal;
