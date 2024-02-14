import MainFooter from 'components/ui/organisms/MainFooter/MainFooter';

import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const MainLayout = () => {
	return (
		<Wrapper>
			<Outlet />
			<MainFooter />
		</Wrapper>
	);
};

export default MainLayout;

export const Wrapper = styled.div`
	position: relative;
	min-height: 100vh;
`;
