export interface IBoaderList {
	id: number;
	nickname: string;
	content: string;
	img_url: string;
	likes: Array<number>;
	userId: number;
	layoutType: number;
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
	token: string | null;
	userId: number | null;
}
export interface ITokenDecode {
	exp: number;
	userid: number;
}
