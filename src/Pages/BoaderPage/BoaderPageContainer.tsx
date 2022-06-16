import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { boardApi } from '../../API/boadersApi';
import BoardAtom, { tokenState } from '../../Atoms/BoardAtom';
import { IBoaderList } from '../../Types/boaderType';
import BoaderPagePresenter from './BoaderPagePresenter';

export default function BoaderPageContainer() {
	const setBoarder = useSetRecoilState<Array<IBoaderList>>(BoardAtom);
	const token = useRecoilValue(tokenState);
	const navigate = useNavigate();
	const { isLoading } = useQuery(
		'boader_list',
		async ({ pageParam }) => {
			const res = await boardApi.callBoaderList(pageParam);
			return res;
		},
		{
			onSuccess: (test: { data: Array<IBoaderList> }) => {
				setBoarder(test.data);
			},
		}
	);
	if (!token) navigate('/login');
	return <div>{isLoading ? <div>로딩중...</div> : <BoaderPagePresenter />}</div>;
}
