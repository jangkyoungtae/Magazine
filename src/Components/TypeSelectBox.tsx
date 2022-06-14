import styled from 'styled-components';

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

export default function TypeSelectBox({ type }: { type: number }) {
	return (
		<TypeBoxContainer>
			<TypeBoxInput
				style={{
					width: '50px',
				}}
				type="radio"
				name="type"
				value={type}
			/>
			<TypeBoxImage
				style={{
					width: '150px',
				}}
				src={`/img/type${type}.png`}
				alt={`type${type}`}
			/>
		</TypeBoxContainer>
	);
}
