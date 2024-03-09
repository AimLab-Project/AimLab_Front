import React from 'react';
import styled from 'styled-components';
import ProfileBg from '../../../../assets/image/BG/profile_BG.png';

import theme from 'styles/theme';
import { Link } from 'react-router-dom';
import useRouter from 'hooks/useRouter';
import Profile from 'components/ui/atoms/Profile/Profile';

// import { Link } from 'react-router-dom';

const HeaderUser = () => {
	const { moveMyPage } = useRouter();
	return (
		// 로그인을 했을 경우
		<User>
			<Propfile>
				<Link to="#" onClick={moveMyPage}>
					<Span>nickname</Span>
					<Profile />
				</Link>
			</Propfile>

			{/* 로그인을 하지 않았을 경우 */}
			{/* <Login>
				<Span>
					<Link to="#">로그인</Link>
				</Span>
				<Span>
					<Link to="#">회원가입</Link>
				</Span>
			</Login> */}
		</User>
	);
};

export default HeaderUser;

const User = styled.div`
	position: absolute;
	right: 0;
	width: 395px;
	height: 100%;
	background-image: url(${ProfileBg});
`;

const Propfile = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;

	a {
		text-decoration: none;
		display: flex;
		align-items: center;
		gap: 20px;
		color: ${theme.PALETTE.fblack};
	}
`;

// const Login = styled.div`
// 	height: 100%;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	gap: 30px;
// `;

const Span = styled.span`
	font-family: 'Roboto Mono';
	font-weight: bold;
	font-size: 25px;
	color: ${theme.PALETTE.fblack};

	a {
		text-decoration: none;
		color: ${theme.PALETTE.fblack};
	}
`;
