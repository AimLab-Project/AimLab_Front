import React from 'react';
import FmdBadIcon from '@mui/icons-material/FmdBad';
import styled from 'styled-components';

interface MyPageAlarmProps {
	text: string;
}

const MyPageAlarm = ({ text }: MyPageAlarmProps) => {
	return (
		<Container>
			<FmdBadIcon sx={{ color: '#999', fontSize: '30px' }} />
			<Span>{text}</Span>
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
	width: 250px;
	font-size: 12px;
	font-family: 'Old Standard TT';
	color: #fff;
`;
