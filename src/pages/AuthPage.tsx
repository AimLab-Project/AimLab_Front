import LoginTemplate from 'components/templates/LoginTemplate/LoginTemplate';
import React from 'react';
import styled from 'styled-components';
import authBG from '../assets/BG/auth_bg.png';

const AuthPage = () => {
	return (
		<Wrapper>
			<LoginTemplate />
		</Wrapper>
	);
};

export default AuthPage;

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	background-image: url(${authBG});
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
`;
