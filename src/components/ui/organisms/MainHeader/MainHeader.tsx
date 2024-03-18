import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../../../assets/image/Logo/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import theme from 'styles/theme';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import FolderIcon from '@mui/icons-material/Folder';
import Discord from '../../../../assets/image/Logo/discord.png';
import HeaderUser from 'components/ui/molecules/HeaderUser/HeaderUser';
import useRouter from 'hooks/useRouter';

const MainHeader: React.FC = () => {
	const { moveMainPage, moveGamePage, moveMyDayaPage } = useRouter();
	return (
		<Container>
			<Content>
				<Link to={'#'} onClick={moveMainPage}>
					<SLogo src={Logo} />
				</Link>

				<Wrapper onClick={moveMainPage}>
					<HomeIcon sx={{ color: '#fff', width: '30px', height: '30px' }} />
					<Span>메인화면</Span>
				</Wrapper>
				<Wrapper>
					<CrisisAlertIcon
						sx={{ color: '#fff', width: '30px', height: '30px' }}
					/>
					<Span>게임</Span>
					<Dropdown>
						<li onClick={moveGamePage}>사격게임</li>
						<li onClick={moveGamePage}>에임 봇 게임</li>
						<li onClick={moveGamePage}>에임 커스텀</li>
					</Dropdown>
				</Wrapper>

				<Wrapper onClick={moveMyDayaPage}>
					<FolderIcon sx={{ color: '#fff', width: '30px', height: '30px' }} />
					<Span>마이 데이터</Span>
				</Wrapper>

				<Wrapper>
					<Image src={Discord} />
				</Wrapper>
				<HeaderUser />
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
		background-color: ${theme.PALETTE.primary[200]};
		border-radius: 40px;
	}
	&:hover ${() => Dropdown} {
		display: flex;
	}
	transition: all 0.3s ease-in-out;
`;

const SLogo = styled.img`
	width: 60px;
	height: 60px;
	cursor: pointer;
`;

const Span = styled.ul`
	font-size: 30px;
	color: ${theme.PALETTE.fwhite};
	white-space: nowrap;
	padding: 0;
`;

const Image = styled.img`
	width: 30px;
	height: 30px;
`;

const Dropdown = styled.ul`
	list-style: none;
	color: ${theme.PALETTE.fwhite};
	display: none;
	width: 300px;
	height: 50px;
	background: #000;
	border-radius: 40px;
	padding: 0 20px;
	align-items: center;
	font-size: 20px;
	justify-content: space-between;

	li {
		&:hover {
			color: ${theme.PALETTE.primary[200]};
		}
	}
`;
