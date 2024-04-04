import styled from 'styled-components';

export const Header = styled.div<{ BG: string }>`
	width: 100%;
	height: 650px;
	background-image: url(${props => props.BG});
	display: flex;
	justify-content: space-around;
	align-items: center;
`;
