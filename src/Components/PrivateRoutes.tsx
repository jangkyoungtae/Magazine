/* eslint-disable consistent-return */
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Swal from 'sweetalert2';
import { tokenState } from '../Atoms/BoardAtom';
import jwtUtils from '../util/JwtUtil';

interface PrivateRouteProps {
	component: React.FC;
	path: string;
}
// eslint-disable-next-line func-names
export default function (props: PrivateRouteProps) {
	// 넘어오는 props를 파악하는게 중요.
	// path, component ....
	// recoil에 토큰의 정보가 담겨있다!
	const token = useRecoilValue(tokenState);
	const navigate = useNavigate();
	const { component: RouteComponent, path } = props;
	// 토큰의 검증이 성공하면 redirectUrl은 로그인이 성공후 돌아갈 화면이다.
	if (!jwtUtils.isAuth(token)) {
		Swal.fire('로그인 요청', '로그인이 필요한 서비스 입니다 .\n 로그인 화면으로 이동합니다.', 'question').then(
			(result) => {
				if (result.value) {
					navigate(`/login?redirectUrl=${path}`);
				}
			}
		);
	}
	return <RouteComponent />;
}
