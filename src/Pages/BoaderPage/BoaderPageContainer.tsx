import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { boardApi } from '../../API/BoaderApi';
import BoardAtom from '../../Atoms/BoardAtom';
import { IBoaderList } from '../../Types/boaderType';
import BoaderPagePresenter from './BoaderPagePresenter';

export default function BoaderPageContainer() {
	const setBoarder = useSetRecoilState<Array<IBoaderList>>(BoardAtom);
	const { isLoading } = useQuery(
		'boader_list',
		async ({ pageParam }) => {
			const res = await boardApi.callBoaderList(pageParam);
			return res;
		},
		{
			onSuccess: (test: { data: Array<IBoaderList> }) => setBoarder(test.data),
		}
	);

	return <div>{isLoading ? <div>로딩중...</div> : <BoaderPagePresenter />}</div>;
}
