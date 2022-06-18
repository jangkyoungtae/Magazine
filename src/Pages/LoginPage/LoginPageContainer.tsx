/* eslint-disable no-alert */
import { useRecoilValue } from 'recoil';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { tokenState } from '../../Atoms/BoardAtom';
import LoginPagePresenter from './LoginPagePresenter';
import jwtUtils from '../../util/JwtUtil';

export default function LoginPageContainer() {
	const token = useRecoilValue(tokenState);
	const navigate = useNavigate();
	useEffect(() => {
		if (jwtUtils.isAuth(token)) {
			Swal.fire('로그인 에러', '이미 로그인 중 입니다.', 'error').then((result) => {
				if (result.value) {
					navigate('/');
				}
			});
		}
	}, [navigate, token]);

	return <LoginPagePresenter />;
}
