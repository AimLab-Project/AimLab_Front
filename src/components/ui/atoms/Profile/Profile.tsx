import React from 'react';
import ProfileImage from '../../../../assets/image/user/default_profile.png';

const Profile = () => {
	// 프로필 이미지가 있을 경우 로직 추가해야됨
	return (
		<div>
			<img src={ProfileImage} alt="profile" />
		</div>
	);
};

export default Profile;
