import React from 'react';
import styled from 'styled-components';

const UpdateBox = () => {
	return (
		<Container>
			{/* 업데이트 내역 */}
			<UpdateText>
				업데이트 내역 : (2024.03.10 패치) 회원 정보 누락 이슈 수정 | 게임 데이터
				전달 이슈 수정
			</UpdateText>
		</Container>
	);
};

export default UpdateBox;

const Container = styled.div`
	position: absolute;
	width: 100%;
	height: 70px;
	background: rgba(120, 233, 191, 0.5);
	bottom: 30px;
	border: 5px solid rgba(120, 233, 191, 1);
`;

const UpdateText = styled.span`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	color: #fff;
	font-size: 25px;
	padding: 0 10px;
`;
