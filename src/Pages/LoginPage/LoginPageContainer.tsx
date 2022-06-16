/* eslint-disable no-alert */
import { useRecoilValue } from 'recoil';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { tokenState } from '../../Atoms/BoardAtom';
import LoginPagePresenter from './LoginPagePresenter';

export default function LoginPageContainer() {
	const isLogin = useRecoilValue(tokenState);
	const test = localStorage.getItem('recoil-persist');
	const navigate = useNavigate();
	if (test) {
		const toto = JSON.parse(test);

		console.log(toto.token.token);
		if (isLogin.token) {
			Swal.fire('로그인 에러', '이미 로그인 중 입니다.', 'error').then((result) => {
				if (result.value) {
					navigate('/');
				}
			});
		}
	}
	return <LoginPagePresenter />;
}
