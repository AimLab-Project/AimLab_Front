import React from 'react';
import styled from 'styled-components';
// import { IconGoogle } from 'assets/icons/login/IconGoogle';
// import { IconKaKao } from 'assets/icons/login/IconKaKao';
// import { IconNaver } from 'assets/icons/login/IconNaver';
import IconGoogle from 'assets/icons/login/google.png';
import IconKaKao from 'assets/icons/login/kakao.png';
import IconNaver from 'assets/icons/login/naver.png';

export type SocialLoginProvider = 'kakao' | 'naver' | 'google';
type LoginButtonProps = {
	provider: 'naver' | 'kakao' | 'google';
};

const btnStyle = {
	naver: {
		backgroundColor: '#03c75a',
		textColor: '#ffffff',
		icon: IconNaver,
		fontFamily: 'Roboto, sans-serif',
	},
	kakao: {
		backgroundColor: '#fee500',
		textColor: '#000000d9',
		icon: IconKaKao,
		fontFamily: 'Roboto, sans-serif',
	},
	google: {
		backgroundColor: '#ffffff',
		textColor: '#3c1e1e',
		icon: IconGoogle,
		fontFamily: 'Roboto, sans-serif',
	},
};

const nameMap = {
	naver: '네이버',
	kakao: '카카오',
	google: 'Google',
};

// https://developers.kakao.com/docs/latest/ko/kakaologin/design-guide
// https://developers.google.com/identity/branding-guidelines?hl=ko
// https://developers.naver.com/docs/login/bi/bi.md
const Wrapper = styled.a`
	text-decoration: none;
	font-size: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 12px;
	border-radius: 12px;
	height: 60px;
	font-family: 'Roboto-Medium', Helvetica, sans-serif;
	background-color: ${({ provider }: LoginButtonProps) =>
		btnStyle[provider].backgroundColor};
	color: ${({ provider }: LoginButtonProps) => btnStyle[provider].textColor};
	gap: 1rem;
`;

const Icon = styled.img`
	width: 18px;
	height: 18px;
	margin: 0 0.5rem;
	color: ${({ provider }: LoginButtonProps) => btnStyle[provider]};
`;

const Text = styled.p`
	text-align: center;
	margin: 0.5rem 0;
	font-size: 1rem;
	font-family: ${({ provider }: LoginButtonProps) =>
		btnStyle[provider].fontFamily};
`;

export default function SocialLoginButton({ provider }: LoginButtonProps) {
	return (
		<Wrapper
			href={`https://api.aimsharp.co.kr/oauth/${provider}`}
			provider={provider}
		>
			<Icon src={btnStyle[provider].icon} provider={provider} />
			<Text provider={provider}> {nameMap[provider]}로 시작하기 </Text>
		</Wrapper>
	);
}
