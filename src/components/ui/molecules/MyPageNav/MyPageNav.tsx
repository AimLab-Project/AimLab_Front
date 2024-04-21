import React from 'react';
import styled from 'styled-components';

const MyPageNav = () => {
	return (
		<Container>
			<Title>&lt; 목록 &gt;</Title>
			<List>
				<ol>
					<li>프로필 변경</li>
					<li>닉네임 변경</li>
					<li>비밀번호 변경</li>
					<li>마이데이터 삭제</li>
					<li>회원 탈퇴</li>
				</ol>
			</List>
		</Container>
	);
};

export default MyPageNav;

const Container = styled.div`
	width: 450px;
	height: 650px;
	background-color: #1a2537;
	border-radius: 30px;
	color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-start;
	margin: 50px;
`;

const Title = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	font-size: 40px;
	font-weight: bold;
`;

const List = styled.ul`
	margin: 0;
	padding: 0;
	font-size: 30px;
	font-weight: bold;
	width: 100%;
	height: 550px;
	display: flex;
	justify-content: center;
	ol {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		list-style: auto;
	}

	li {
		cursor: pointer;
		:hover {
			color: #ffb546;
		}
	}
`;
