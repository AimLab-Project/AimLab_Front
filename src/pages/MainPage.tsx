import MainHeader from 'components/ui/organisms/MainHeader/MainHeader';
import React from 'react';
import styled from 'styled-components';
import BG from '../assets/image/BG/AimSharp_BG.png';

const MainPage = () => {
	return (
		<Container>
			<MainHeader />
		</Container>
	);
};

export default MainPage;

const Container = styled.div`
	width: 100%;
	height: 100vh;
	background-image: url(${BG});
`;
