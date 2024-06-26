import React from 'react';

import styled from 'styled-components';
import theme from 'styles/theme';
import BG from '../../../assets/image/BG/main_BG.png';
import NotLogin from './NotLoginMyData';
import { useAuth } from 'context/AuthContext';
import LoginMyData from './LoginMyData';

const MainMyDataTemplate = () => {
	const { isLoggedIn } = useAuth();
	return <Container>{isLoggedIn ? <LoginMyData /> : <NotLogin />}</Container>;
};

export default MainMyDataTemplate;

const Container = styled.div`
	max-width: 1900px;
	width: 100%;
	height: 650px;
	border: 3px solid ${theme.PALETTE.primary[100]};
	background-image: url(${BG});
	border-radius: 60px;
`;
