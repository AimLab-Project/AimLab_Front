import Tier from 'components/ui/atoms/Tier/Tier';
import React from 'react';
import styled from 'styled-components';

const MyPageTier = () => {
	return (
		<Container>
			<Tier />
		</Container>
	);
};

export default MyPageTier;

const Container = styled.div`
	width: 500px;
	height: 300px;
	background-color: #1b2a43;
	border-radius: 20px;
	padding: 30px;
`;
