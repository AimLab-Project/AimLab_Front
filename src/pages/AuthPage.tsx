import LoginTemplate from 'components/templates/LoginTemplate/LoginTemplate';
import React from 'react';
import styled from 'styled-components';
import BG from '../assets/image/BG/auth_BG.png';

const AuthPage = () => {
	return (
		<Wrapper>
			<Title>aim sharp</Title>
			<LoginTemplate />
		</Wrapper>
	);
};

export default AuthPage;

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	background: url(${BG}),
		radial-gradient(
				111.38% 111.38% at 50% -17.49%,
				rgba(88, 140, 223, 0.4) 0%,
				rgba(103, 162, 255, 0.052) 100%
			)
			#171717;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Title = styled.span`
	text-shadow: -2px 0px #fff, 0px 2px #fff, 2px 0px #fff, 0px -2px #fff;
	text-transform: uppercase;
	font-family: 'Old Standard TT';
	font-weight: 400;
	font-size: 60px;
	width: 780px;
	text-align: left;
`;
