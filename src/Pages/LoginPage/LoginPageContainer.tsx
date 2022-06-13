/* eslint-disable no-alert */
import LoginPagePresenter from './LoginPagePresenter';

export default function LoginPageContainer() {
	const token = localStorage.getItem('token');
	if (token) {
		alert('이미 로그인이 되어있습니다.');
		window.history.back();
	}
	return <LoginPagePresenter />;
}
