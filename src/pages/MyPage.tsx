import MyPageNav from 'components/ui/molecules/MyPage/MyPageNav/MyPageNav';
import MyPageHeader from 'components/ui/organisms/MyPageHeader/MyPageHeader';
import React from 'react';
import styled from 'styled-components';

const MyPage = () => {
	return (
		<>
			<Container>
				<Title>마이페이지</Title>
			</Container>
			<Wrapper>
				<MyPageNav />
				<MyPageHeader />
			</Wrapper>
		</>
	);
};

export default MyPage;

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 120px;
	background-color: #2d3f5b;
	display: flex;
	align-items: center;
`;

const Wrapper = styled.div`
	position: absolute;
	top: 100px;
	width: 100%;
	height: 100vh;
	background: radial-gradient(
			135% 85% at 50% 15%,
			rgba(0, 83, 216, 0.2) 0%,
			rgba(54, 132, 255, 0.2) 20%,
			rgba(203, 127, 203, 0.088) 60%,
			rgba(255, 255, 255, 0.07) 100%
		),
		#171717;
	border-top: 1px solid #fff;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	padding: 50px;
	display: flex;
	gap: 50px;
`;

const Title = styled.span`
	color: #fff;
	font-size: 50px;
	font-family: 'Old Standard TT';
	margin-left: 25px;
`;
