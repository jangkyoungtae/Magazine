export interface IBoaderList {
	id: number;
	nickname: string;
	content: string;
	img_url: string;
	likes: number;
	type: number;
}

export interface IBorder {
	boders: Array<IBoaderList>;
}

export interface ISliderOption {
	dots: boolean;
	infinite: boolean;
	speed: number;
	slidesToShow: number;
	slidesToScroll: number;
}

export interface ITestList {
	nickname: string;
	content: string;
	img_url: string;
	likes: number;
}

export interface IToken {
	token: string;
	userId: string;
}
export interface ITokenDecode {
	sub: string;
}
