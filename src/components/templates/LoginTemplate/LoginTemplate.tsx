import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

const LoginTemplate = () => {
	return <Wrapper></Wrapper>;
};

export default LoginTemplate;

const Wrapper = styled.div`
	width: 800px;
	height: 650px;
	background: rgba(0, 0, 0, 0.298);

	box-shadow: 0px 42px 60.8px -17px #000000;
	box-sizing: border-box;
	border-radius: 30px;
	background: rgba(0, 0, 0, 0.298),
		linear-gradient(
			180deg,
			${theme.PALETTE.primary[100]} 0%,
			${theme.PALETTE.primary[200]} 100%
		);
	background-origin: border-box;
	border: 1px solid transparent;
	background-clip: padding-box, border-box;
`;
