import React, { SetStateAction } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { boardApi } from '../API/boadersApi';

export default (setHeart: React.Dispatch<SetStateAction<boolean>>) => {
	const queryClient = useQueryClient();
	const { mutate: likesAddMutate } = useMutation((addData: number) => boardApi.callAddLikes(addData), {
		onSuccess: () => {
			queryClient.invalidateQueries('boader_list');
			setHeart(true);
		},
	});
	const { mutate: likesDelMutate } = useMutation((addData: number) => boardApi.callDelLikes(addData), {
		onSuccess: () => {
			queryClient.invalidateQueries('boader_list');
			setHeart(false);
		},
	});
	return { likesDelMutate, likesAddMutate };
};
