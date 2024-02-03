import React from 'react';
import styled from 'styled-components';
import authBG from '../assets/BG/auth_bg.png';

const AuthPage = () => {
	return <Wrapper></Wrapper>;
};

export default AuthPage;

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	background-image: url(${authBG});
	background-size: cover;
`;
