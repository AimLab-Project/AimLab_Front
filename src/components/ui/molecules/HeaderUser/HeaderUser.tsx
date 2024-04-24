import React from 'react';
import styled from 'styled-components';
import ProfileBg from '../../../../assets/image/BG/profile_BG.png';

import theme from 'styles/theme';

import Profile from 'components/ui/atoms/Profile/Profile';
import useRouter from 'hooks/useRouter';
import { useAuth } from 'context/AuthContext';
import { Link } from 'react-router-dom';

// import { Link } from 'react-router-dom';

const HeaderUser = () => {
	const { moveMyPage } = useRouter();
	const { isLoggedIn, user } = useAuth();
	return (
		<User>
			{isLoggedIn && (
				<Propfile onClick={moveMyPage}>
					<Span>{user.user_nickname}</Span>
					<Profile width="65px" height="65px" />
				</Propfile>
			)}

			{!isLoggedIn && (
				<Login>
					<Span>
						<Link to="/auth/login">로그인</Link>
					</Span>
					<Span>
						<Link to="/auth/signup">회원가입</Link>
					</Span>
				</Login>
			)}
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
	align-items: center;
	gap: 20px;
	color: ${theme.PALETTE.fblack};
`;

const Login = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 30px;
`;

const Span = styled.span`
	font-family: 'Roboto Mono';
	font-weight: bold;
	font-size: 25px;
	color: ${theme.PALETTE.fblack};
	cursor: pointer;
	a {
		text-decoration: none;
		color: ${theme.PALETTE.fblack};
	}
`;
