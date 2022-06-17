import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { tokenState } from '../../Atoms/BoardAtom';
import { IBoaderList } from '../../Types/boaderType';
import jwtUtils from '../../util/JwtUtil';
import WriteBoardPresenter from './WriteBoardPresenter';

export default function WriteBoardContainer() {
	const location = useLocation();
	const navigate = useNavigate();
	const token = useRecoilValue(tokenState);
	const state = location.state as { card: IBoaderList };
	const [isAuth, setIsAuth] = useState(false);
	useEffect(() => {
		if (jwtUtils.isAuth(token)) {
			setIsAuth(true);
		} else {
			setIsAuth(false);
			navigate('/');
		}
	}, [token]);
	return <WriteBoardPresenter state={state && state.card} />;
}
