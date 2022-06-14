/* eslint-disable no-alert */
import { useRecoilValue } from 'recoil';
import { Token } from '../../Atoms/BoardAtom';
import LoginPagePresenter from './LoginPagePresenter';

export default function LoginPageContainer() {
	const isLogin = useRecoilValue(Token);
	if (isLogin) {
		alert('이미 로그인이 되어있습니다.');
		window.history.back();
	}
	return <LoginPagePresenter />;
}
