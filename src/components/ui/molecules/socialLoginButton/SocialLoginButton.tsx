import React from 'react';
import styled from 'styled-components';

export type SocialLoginProvider = 'kakao' | 'naver' | 'google';
type LoginButtonProps = {
	provider: 'naver' | 'kakao' | 'google';
};

const btnStyle = {
	naver: {
		backgroundColor: '#03c75a',
		iconColor: '#fff',
		textColor: '#fff',
	},
	kakao: {
		backgroundColor: '#FEE500',
		iconColor: '#000000',
		textColor: 'rgba(0, 0, 0, 0.85)',
	},
	google: {
		backgroundColor: '#ffffff',
		iconColor: '#fff',
		textColor: '#3c1e1e',
	},
};

const nameMap = {
	naver: '네이버',
	kakao: '카카오',
	google: 'Google',
};

// https://developers.kakao.com/docs/latest/ko/kakaologin/design-guide
// https://developers.google.com/identity/branding-guidelines?hl=ko
const Wrapper = styled.a`
	text-decoration: none;
	font-size: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 0.5rem;
	border-radius: 12px;
	height: 60px;
	font-family: Roboto-Medium, Helvetica, sans-serif;
	background-color: ${({ provider }: LoginButtonProps) =>
		btnStyle[provider].backgroundColor};
	color: ${({ provider }: LoginButtonProps) => btnStyle[provider].textColor};
`;

const Icon = styled.img`
	width: 1.125rem;
	height: 1.125rem;
	margin: 0 0.5rem;
	color: ${({ provider }: LoginButtonProps) => btnStyle[provider].iconColor};
`;

const Text = styled.p`
	width: 100%;
	text-align: center;
	margin: 0.5rem 2rem;
	font-size: 1rem;
`;

export default function SocialLoginButton({ provider }: LoginButtonProps) {
	return (
		<Wrapper
			href={`https://api.aimsharp.co.kr/oauth/${provider}`}
			provider={provider}
		>
			<Icon src={`/login/${provider}.png`} provider={provider} />
			<Text> {nameMap[provider]}로 시작하기 </Text>
		</Wrapper>
	);
}
