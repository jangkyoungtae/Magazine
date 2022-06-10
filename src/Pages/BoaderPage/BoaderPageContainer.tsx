import React from 'react';
import { useQuery } from 'react-query';
import { callBoaderList } from '../../API/BoaderApi';
import BoaderPagePresenter from './BoaderPagePresenter';

export default function BoaderPageContainer() {
	const { isLoading, data } = useQuery('boader_list', callBoaderList, {
		onSuccess: (test) => test,
		staleTime: 20000,
	});

	return <div>{isLoading ? <div>로딩중...</div> : <BoaderPagePresenter item={data?.data} />}</div>;
}
