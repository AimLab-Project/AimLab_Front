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
			<div>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-around',
					}}
				>
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
				</div>
				<div
					style={{
						width: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<CalHeatMap />
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-end',
						margin: '20px',
						marginRight: '80px',
					}}
				>
					<Link to={'#'}>
						<Button
							label="마이페이지 이동"
							size="medium"
							variant="primary"
							border="primary"
						/>
					</Link>
				</div>
			</div>
		</Container>
	);
};

export default MainMyDataTemplate;

const Container = styled.div`
	width: 1900px;
	height: 650px;
	border: 3px solid ${theme.PALETTE.primary[100]};
	background-image: url(${BG});
	border-radius: 60px;
`;
