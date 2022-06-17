import { FieldValues } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { boardApi } from '../API/boadersApi';
import { IBoaderList } from '../Types/boaderType';

export default () => {
	const queryClient = useQueryClient();
	const { mutate: boadrDelMutate } = useMutation((addData: IBoaderList) => boardApi.callDelBoard(addData), {
		onSuccess: () => {
			queryClient.invalidateQueries('boader_list');
		},
	});
	const { mutate: addBoard } = useMutation(
		({ addData, type }: { addData: FieldValues; type: number }) => boardApi.callAddBoard(addData, type),
		{
			onSuccess: () => {
				queryClient.invalidateQueries('boader_list');
			},
		}
	);

	const { mutate: updateBoard } = useMutation(
		({ upData, type, card }: { upData: FieldValues; type: number; card: IBoaderList }) =>
			boardApi.callModifyBoard(upData, type, card),
		{
			onSuccess: () => {
				queryClient.invalidateQueries('boader_list');
			},
		}
	);

	return { updateBoard, addBoard, boadrDelMutate };
};
