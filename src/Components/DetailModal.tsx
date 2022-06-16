/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/ban-types */
import { Box, Modal, Typography } from '@mui/material';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import styled from 'styled-components';
import { boardApi } from '../API/boadersApi';
import { IBoaderList } from '../Types/boaderType';
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
}: {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	card: IBoaderList;
}) {
	const [heart, setHeart] = useState(false);
	const handleClose = () => {
		setOpen(false);
	};
	const queryClient = useQueryClient();
	const likesAddMutate = useMutation((addData: number) => boardApi.callAddLikes(addData), {
		onSuccess: () => {
			queryClient.invalidateQueries('boader_list');
			setHeart(!heart);
		},
	});
	const likesDelMutate = useMutation((addData: number) => boardApi.callDelLikes(addData), {
		onSuccess: () => {
			queryClient.invalidateQueries('boader_list');
			setHeart(!heart);
		},
	});
	const heartClick = () => {
		likesAddMutate.mutate(card.id);
	};

	const heartDelClick = () => {
		likesDelMutate.mutate(card.id);
	};
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
						<HeartText>좋아요 {util.like(card.likes)}</HeartText>
						<HeartImage
							onClick={heart ? heartDelClick : heartClick}
							src={!heart ? '/img/heart.png' : '/img/heart_pick.png'}
						/>
					</ModalFoot>
				</ModalContainer>
			</Box>
		</Modal>
	);
}

export default TodoModal;
