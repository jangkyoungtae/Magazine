/* eslint-disable react-hooks/rules-of-hooks */
import { atom } from 'recoil';
import { IBoaderList, IToken } from '../Types/boaderType';

export default atom<Array<IBoaderList>>({
	key: 'myBoarders',
	default: [
		{
			id: 0,
			nickname: '지석진',
			content:
				'내가 너라면 다 알아볼 텐데 널 위할 사람 찾아낼 텐데 지난 오랜 시간 너의 그 곁을 지켜온 나라는 걸 내가 너였다면 참 행복할 텐데 한 사람을 다 가졌으니까 둔한 바보도 눈치챌 그 사랑을 너만 왜 모르니 너를 바라만 바라만 본다 외쳐 네 이름만 부른다 보고 싶은 맘에 너를 향한 그 발걸음 네 곁을 맴도는데 오늘도 그리고 그리워하다 애써 참았던 눈물이 흘러 그저 멀리서만 바라보다 또 소리쳐 네가 보고 싶다',
			img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIrt5lUed1ApFSNSKdlRAX-Zme6MZWu9-BuA&usqp=CAU',
			likes: 30,
			type: 3,
		},
	],
});
export const Token = atom<IToken>({
	key: 'Authorization',
	default: {
		Authorization: '',
	},
});
