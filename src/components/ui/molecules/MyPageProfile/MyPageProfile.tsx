import Profile from 'components/ui/atoms/Profile/Profile';
import React from 'react';
import styled from 'styled-components';

const MyPageProfile = () => {
	return (
		<Container>
			<div>
				<Profile width="200px" height="200px" add />
			</div>
			<Info>
				<Title>닉네임</Title>
				<Content>Guest038324</Content>
				<br />
				<Title>이메일</Title>
				<Content>Test2138@gamail.com</Content>
			</Info>
		</Container>
	);
};

export default MyPageProfile;

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	gap: 30px;
`;

const Info = styled.div`
	/* width: 100%;
	height: 100%; */
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const Title = styled.span`
	font-size: 20px;
	font-weight: bold;
	color: #588cdf;
	font-family: 'Roboto Mono';
`;
const Content = styled.span`
	font-size: 20px;
	color: #4d4d54;
	font-family: 'Roboto Mono';
	margin-left: 15px;
`;
