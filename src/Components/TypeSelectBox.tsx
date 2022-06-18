/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import type1 from '../img/type1.png';
import type2 from '../img/type2.png';
import type3 from '../img/type3.png';

const TypeBoxContainer = styled.label`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 10px;
`;

const TypeBoxInput = styled.input`
	width: 50px;
	margin: 10px;
`;

const TypeBoxImage = styled.img`
	width: 150px;
`;

export default function TypeSelectBox({ type, selectType }: { type: number; selectType: number }) {
	const image = type === 1 ? type1 : type === 2 ? type2 : type3;
	return (
		<TypeBoxContainer>
			<TypeBoxInput
				style={{
					width: '50px',
				}}
				type="radio"
				name="type"
				defaultChecked={type === selectType}
				value={type}
			/>
			<TypeBoxImage
				style={{
					width: '150px',
				}}
				src={image}
				alt={`type${type}`}
			/>
		</TypeBoxContainer>
	);
}
