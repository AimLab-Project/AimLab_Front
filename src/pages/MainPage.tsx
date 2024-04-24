import ExplanationTemplate from 'components/templates/ExplanationTemplate/ExplanationTemplate';
import MainMyDataTemplate from 'components/templates/MainMyDataTemplate/MainMyDataTemplate';
import UpdateBox from 'components/ui/atoms/UpdateBox/UpdateBox';
import MainHeader from 'components/ui/organisms/MainHeader/MainHeader';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BG from '../assets/image/BG/AimSharp_BG.png';
import { useAuth } from 'context/AuthContext';

const MainPage = () => {
	const { user, isLoggedIn } = useAuth();
	console.log(`user : `, user);
	console.log(`isLoggedIn : `, isLoggedIn);
	return (
		<>
			<Main>
				<Container>
					<MainHeader />
					<Content>
						<Wrapper>
							<Title>
								<Link to={'#'}>aim sharp</Link>
							</Title>
							<SubTitle>더 나은 게임 플레이를 위해</SubTitle>
						</Wrapper>
					</Content>
					<UpdateBox />
				</Container>
				<MainMyDataTemplate />
				<ExplanationTemplate />
			</Main>
		</>
	);
};

export default MainPage;

const Main = styled.div`
	width: 100%;
	background-color: #000;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	background-image: url(${BG});
	display: flex;
	justify-content: center;
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

const Title = styled.span`
	font-family: 'Old Standard TT';
	font-weight: 700;
	font-size: 80px;
	text-transform: uppercase;
	white-space: nowrap;
	text-shadow: 0px 12px 4px rgba(81, 81, 81, 0.8), -1px 0px #fff, 0px 1px #fff,
		1px 0px #fff, 0px -1px #fff;
	a {
		cursor: pointer;
		color: #000;
		text-decoration: none;
	}
`;

const SubTitle = styled.span`
	color: rgba(255, 255, 255, 0.8);
	font-weight: 400;
	font-size: 35px;
	white-space: nowrap;
`;
