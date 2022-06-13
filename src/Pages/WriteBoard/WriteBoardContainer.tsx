import { useLocation } from 'react-router-dom';
import { IBoaderList } from '../../Types/boaderType';
import WriteBoardPresenter from './WriteBoardPresenter';

export default function WriteBoardContainer() {
	const location = useLocation();
	const state = location.state as { card: IBoaderList };
	return <WriteBoardPresenter state={state && state.card} />;
}
