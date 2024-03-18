import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';
import Discord from '../../../../assets/image/Logo/discord.png';

const MainFooter = () => {
	return (
		<Container>
			<Title>소셜 서비스</Title>
			<Logo src={Discord} />
			<ETC>버그 및 문의 : xxxxXXXX@gmail.com</ETC>
		</Container>
	);
};

export default MainFooter;

const Container = styled.div`
	width: 100%;
	height: 333px;
	background-color: #000;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

const Title = styled.span`
	color: ${theme.PALETTE.fwhite};
	font-weight: bold;
	font-size: 35px;
`;

const Logo = styled.img`
	width: 83px;
	height: 83px;
`;

const ETC = styled.span`
	color: ${theme.PALETTE.gray[700]};
	font-weight: bold;
	font-size: 20px;
`;
