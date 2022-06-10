/* eslint-disable react/require-default-props */
import styled from 'styled-components';

const Container = styled.div<{ width?: number; height?: number; radius?: number; color: string; fSize: number }>`
	border-color: ${(props) => props.color};
	font-family: 'Dongle', sans-serif;
	color: white;
	box-shadow: 0 0 40px 40px ${(props) => props.color} inset, 0 0 0 0 ${(props) => props.color};
	transition: all 150ms ease-in-out;
	width: ${(props) => (props.width ? props.width : 100)}px;
	height: ${(props) => (props.height ? props.height : 50)}px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: ${(props) => (props.fSize ? props.fSize : 15)}px;
	border-radius: ${(props) => (props.radius ? props.radius : 0)}px;
	cursor: pointer;
	&:hover {
		box-shadow: 0 0 10px 0 ${(props) => props.color} inset, 0 0 10px 4px ${(props) => props.color};
		color: black;
		font-weight: bold;
	}
`;

type GreetFunction = () => void;
export default function CustomButton({
	item,
	onClickEvent,
	color,
	width = 100,
	height = 50,
	radius = 0,
	fSize = 15,
}: {
	item: string;
	color: string;
	radius?: number;
	width?: number;
	height?: number;
	fSize?: number;
	onClickEvent: GreetFunction;
}) {
	return (
		<Container onClick={onClickEvent} width={width} height={height} radius={radius} fSize={fSize} color={color}>
			{item}
		</Container>
	);
}
