import React from 'react';
import styled from 'styled-components';
import TierImage from '../../../../assets/image/user/tier.png';

const Tier = () => {
	return (
		<Container>
			<Wrapper>
				<Image src={TierImage} />
				<span style={{ fontSize: '30px' }}>12357 위</span>
				<span style={{ fontSize: '15px', color: '#DEE1E7' }}>184383 점</span>
			</Wrapper>
		</Container>
	);
};

export default Tier;

const Container = styled.div`
	width: 100%;
	height: 100%;
	color: #fff;
`;

const Wrapper = styled.div`
	width: 160px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
`;

const Image = styled.img`
	width: 160px;
	height: 200px;
`;
