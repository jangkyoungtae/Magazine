import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { boardApi } from '../../API/boadersApi';
import BoardAtom from '../../Atoms/BoardAtom';
import { IBoaderList } from '../../Types/boaderType';
import BoaderPagePresenter from './BoaderPagePresenter';

export default function BoaderPageContainer() {
	const setBoarder = useSetRecoilState<Array<IBoaderList>>(BoardAtom);
	const { isSuccess } = useQuery(
		'boader_list',
		async () => {
			const res = await boardApi.callBoaderList();
			console.log('test5', res);
			return res;
		},
		{
			onSuccess: (test: { data: Array<IBoaderList> }) => {
				setBoarder(test.data);
			},
		}
	);

	return <div>{!isSuccess ? <div>로딩중...</div> : <BoaderPagePresenter />}</div>;
}
