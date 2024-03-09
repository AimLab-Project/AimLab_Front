import React from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Profile = () => {
	// 프로필 이미지가 있을 경우 로직 추가해야됨
	return (
		<div>
			{/* 프로필이 없을 경우 */}
			<AccountCircleIcon sx={{ width: '65px', height: '65px' }} />
			{/* 프로필이 있을 경우 */}
		</div>
	);
};

export default Profile;
