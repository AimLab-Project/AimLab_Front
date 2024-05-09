import Button from 'components/ui/atoms/Button/Button';
import MyPageProfile from 'components/ui/molecules/MyPage/MyPageProfile/MyPageProfile';
import MyPageTier from 'components/ui/molecules/MyPage/MyPageTier/MyPageTier';
import React from 'react';
import styled from 'styled-components';
import BG from '../../../../assets/image/BG/MyPageProfile_BG.png';

const MyPageHeader = () => {
	return (
		<Container>
			<Wrapper>
				<div>
					<MyPageProfile />
					<Button
						label="프로필 바꾸기"
						variant="teriary"
						size="large"
						border="teriary"
					/>
				</div>
				<MyPageTier />
			</Wrapper>
		</Container>
	);
};

export default MyPageHeader;

const Container = styled.div`
	position: absolute;
	top: 50px;
	left: 550px;
	width: 1150px;
	height: 370px;
	border-radius: 30px;
	background-image: url(${BG});
`;
const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	border-radius: 30px;
	background-color: rgba(255, 255, 255, 0.65);
	align-items: center;
	justify-content: space-around;
`;
