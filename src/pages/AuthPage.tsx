import SingupTemplate from 'components/templates/SingupTemplate/SingupTemplate';

import React from 'react';
import styled from 'styled-components';
import BG from '../assets/image/BG/auth_BG.png';

const AuthPage = () => {
	return (
		<Wrapper>
			<Title>aim sharp</Title>
			<SingupTemplate />
			{/* <LoginTemplate /> */}
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
	text-shadow: -1px 0px #fff, 0px 1px #fff, 1px 0px #fff, 0px -1px #fff;
	text-transform: uppercase;
	font-family: 'Old Standart TT';
	font-weight: 400;
	font-size: 60px;
	width: 780px;
	text-align: left;
`;
