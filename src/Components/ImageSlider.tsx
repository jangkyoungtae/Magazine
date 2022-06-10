import Carousel from 'react-material-ui-carousel';
import styled from 'styled-components';

const ImageBox = styled.div`
	width: 100%;
	box-sizing: border-box;
	padding: 20px;
	margin: 0px;
	justify-content: center;
	align-items: center;
`;
export default function ImageSlider({ children }: { children: Array<JSX.Element> }) {
	return (
		<ImageBox>
			<Carousel indicators={false} autoPlay={false}>
				{children}
			</Carousel>
		</ImageBox>
	);
}
