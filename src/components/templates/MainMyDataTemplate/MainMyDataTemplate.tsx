import Button from 'components/ui/atoms/Button/Button';
import Profile from 'components/ui/atoms/Profile/Profile';
import Tier from 'components/ui/atoms/Tier/Tier';
import CalHeatMap from 'components/ui/organisms/CalHeatMap/CalHeatMap';

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'styles/theme';
import BG from '../../../assets/image/BG/main_BG.png';

const MainMyDataTemplate = () => {
	return (
		<Container>
			<Content>
				<UserData>
					<div>
						<Profile width="200px" height="200px" add />
					</div>
					<div>
						<Tier />
					</div>
					<div>
						{/* progress */}
						<div
							style={{ width: '1000px', height: '250px', background: 'orange' }}
						></div>
					</div>
				</UserData>
				<HeatMap>
					<CalHeatMap />
					<Link to={'#'}>
						<Button
							label="마이페이지 이동"
							size="medium"
							variant="primary"
							border="primary"
						/>
					</Link>
				</HeatMap>
			</Content>
		</Container>
	);
};

export default MainMyDataTemplate;

const Container = styled.div`
	max-width: 1900px;
	width: 100%;
	height: 650px;
	border: 3px solid ${theme.PALETTE.primary[100]};
	background-image: url(${BG});
	border-radius: 60px;
`;

const UserData = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

const HeatMap = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-end;
	justify-content: space-around;
`;

const Content = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;
