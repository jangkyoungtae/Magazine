export interface IBoaderList {
	id: number;
	nickname: string;
	content: string;
	img_url: string;
	likes: number;
	type: number;
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

export interface IBorder {
	boders: Array<ITestList>;
}
