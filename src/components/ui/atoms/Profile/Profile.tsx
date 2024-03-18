import React from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components';
import theme from 'styles/theme';

interface ProfileProps {
	width: string;
	height: string;
	add?: boolean;
}

const Profile = ({ width, height, add }: ProfileProps) => {
	// 프로필 이미지가 있을 경우 로직 추가해야됨
	return (
		<Container style={{ width: `${width}`, height: `${height}` }}>
			{/* 프로필이 없을 경우 */}
			<AccountCircleIcon
				sx={{
					width: '100%',
					height: '100%',
					color: '#fff',
				}}
			/>
			{add && (
				<Add>
					<AddIcon sx={{ width: '100%', height: '100%' }} />
				</Add>
			)}
			{/* 프로필이 있을 경우 */}
		</Container>
	);
};

export default Profile;

const Container = styled.div`
	position: relative;
	cursor: pointer;
`;

const Add = styled.div`
	width: 50px;
	height: 50px;
	background: ${theme.PALETTE.primary[200]};
	border-radius: 50%;
	color: ${theme.PALETTE.white};
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	right: 10px;
	bottom: 10px;
`;
