import MainHeader from 'components/ui/organisms/MainHeader/MainHeader';
import React from 'react';
import styled from 'styled-components';
import BG from '../assets/image/BG/AimSharp_BG.png';
import Logo from '../assets/image/Logo/main_logo.png';

const MainPage = () => {
	return (
		<Container>
			<MainHeader />
			<Content>
				<Wrapper>
					<Image src={Logo} alt="logo" />
					<SubTitle>더 나은 게임 플레이를 위해</SubTitle>
				</Wrapper>
			</Content>
		</Container>
	);
};

export default MainPage;

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	background-image: url(${BG});
`;

const Content = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 200px;
	align-items: center;
	justify-content: space-between;
`;

const Image = styled.img`
	width: 500px;
	height: 65px;
	cursor: pointer;
`;

// const Title = styled.span`
// 	font-family: 'Old Standard TT';
// 	font-weight: 700;
// 	font-size: 80px;
// 	text-transform: uppercase;
// 	text-shadow: 0px 12px 4px rgba(81, 81, 81, 0.8), -1px 0px #fff, 0px 1px #fff,
// 		1px 0px #fff, 0px -1px #fff;
// `;

const SubTitle = styled.span`
	color: rgba(255, 255, 255, 0.8);
	font-weight: 400;
	font-size: 35px;
`;
