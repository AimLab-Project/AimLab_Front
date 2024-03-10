import Profile from 'components/ui/atoms/Profile/Profile';
import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';
import BG from '../../../assets/image/BG/main_BG.png';

const MainMyDataTemplate = () => {
	return (
		<Container>
			<div>
				<div>
					<div>
						<Profile width="200px" height="200px" add />
					</div>
					<div>{/* tier */}</div>
					<div>{/* progress */}</div>
				</div>
				<div>
					{/* cal-heatmap */}
					{/* button */}
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
