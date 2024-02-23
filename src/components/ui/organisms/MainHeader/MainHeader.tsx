import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../../../assets/image/Logo/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import theme from 'styles/theme';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import FolderIcon from '@mui/icons-material/Folder';
import Discord from '../../../../assets/image/Logo/discord.png';

const MainHeader: React.FC = () => {
	return (
		<Container>
			<Content>
				<Link to={'#'}>
					<SLogo src={Logo} />
				</Link>

				<Wrapper>
					<HomeIcon sx={{ color: '#fff', width: '30px', height: '30px' }} />
					<Span>메인화면</Span>
				</Wrapper>
				<Wrapper>
					<CrisisAlertIcon
						sx={{ color: '#fff', width: '30px', height: '30px' }}
					/>
					<Span>게임</Span>
				</Wrapper>

				<Wrapper>
					<FolderIcon sx={{ color: '#fff', width: '30px', height: '30px' }} />
					<Span>마이 데이터</Span>
				</Wrapper>

				<Wrapper>
					<Image src={Discord} />
				</Wrapper>
			</Content>
		</Container>
	);
};

export default MainHeader;

const Container = styled.div`
	position: absolute;
	top: 40px;
	width: 90%;
	height: 80px;
	background: black;
	display: flex;
	align-items: center;
`;

const Content = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 10px;
`;

const Wrapper = styled.div`
	height: 75%;
	padding: 0 32px;
	display: flex;
	align-items: center;
	gap: 8px;
	cursor: pointer;
	&:hover {
		background-color: rgba(252, 252, 252, 0.4);
		border-radius: 40px;
	}
`;

const SLogo = styled.img`
	width: 60px;
	height: 60px;
	cursor: pointer;
`;

const Span = styled.span`
	font-size: 30px;
	color: ${theme.PALETTE.fwhite};
	white-space: nowrap;
`;

const Image = styled.img`
	width: 30px;
	height: 30px;
`;
