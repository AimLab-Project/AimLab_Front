import React from 'react';
import FmdBadIcon from '@mui/icons-material/FmdBad';
import styled from 'styled-components';

const MyPageAlarm = () => {
	return (
		<Container>
			<FmdBadIcon sx={{ color: '#999', fontSize: '30px' }} />
			<Span>
				비밀번호는 30일 마다 변경을 권장드립니다. <br />
				{/* 날짜는 변경한 날짜에 + 30일을 한 날짜로 계산합니다 */}
				2024.5.30일에 변경 가능합니다.
			</Span>
		</Container>
	);
};

export default MyPageAlarm;

const Container = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	gap: 10px;
`;

const Span = styled.span`
	font-size: 12px;
	font-family: 'Old Standard TT';
	color: #fff;
`;
