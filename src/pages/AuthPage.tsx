import ToolTip from 'components/ui/atoms/ToolTip/ToolTip';
import React from 'react';
import styled from 'styled-components';
import authBG from '../assets/BG/auth_bg.png';

const AuthPage = () => {
	return (
		<Wrapper>
			<ToolTip colors="blue" label="개인정보 수집 이용 동의에 체크해 주세요." />
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
