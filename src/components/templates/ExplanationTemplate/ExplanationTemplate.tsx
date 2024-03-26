import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';
import BG from '../../../assets/image/BG/explanation_BG.png';

const ExplanationTemplate = () => {
	return (
		<Container>
			<Header>
				<div></div>
				<div>
					<div></div>
					<div></div>
				</div>
			</Header>
			<Body></Body>
		</Container>
	);
};

export default ExplanationTemplate;

const Container = styled.div`
	width: 100%;
	height: 1300px;
`;
const Header = styled.div`
	width: 100%;
	height: 650px;
	background-image: url(${BG});
`;
const Body = styled.div`
	width: 100%;
	height: 650px;
	background-color: #000;
	border-top: 1px solid transparent;
	border-bottom: 1px solid transparent;
	border-image: linear-gradient(
		90deg,
		${theme.PALETTE.tertiary[200]} 0%,
		${theme.PALETTE.tertiary[100]} 20%,
		${theme.PALETTE.primary[100]} 40%,
		${theme.PALETTE.primary[200]} 60%,
		${theme.PALETTE.secondary[200]} 80%,
		${theme.PALETTE.secondary[100]} 100%
	);
	border-image-slice: 1;
`;
