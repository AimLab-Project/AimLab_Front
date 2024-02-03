import MainFooter from 'components/ui/organisms/MainFooter/MainFooter';
import MainHeader from 'components/ui/organisms/MainHeader/MainHeader';

import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const MainLayout = () => {
	return (
		<Wrapper>
			<MainHeader />
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
