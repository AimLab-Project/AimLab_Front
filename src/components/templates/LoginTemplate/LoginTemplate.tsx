import Button from 'components/ui/atoms/Button/Button';
import CheckBox from 'components/ui/atoms/CheckBox/CheckBox';
import Input from 'components/ui/atoms/Input/Input';
import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

const LoginTemplate = () => {
	return (
		<Container>
			<Content>
				<Wrapper>
					<InputTitle>E-MAIL</InputTitle>

					<Input width="100%" placeholder="이메일" />
				</Wrapper>
				<Wrapper>
					<InputTitle>PASSWORD</InputTitle>
					<Input
						width="100%"
						placeholder="비밀번호(8자리 이상 문자, 숫자, 특수문자 사용)"
						type="password"
						icon={true}
					/>
				</Wrapper>
				<Wrapper>
					<Checks>
						<CheckBox variant="primary" />
						<span>로그인 상태 유지</span>
						<CheckBox variant="primary" />
						<span>아이디 저장</span>
					</Checks>
				</Wrapper>
				<Wrapper>
					<ETC>
						<Button
							label="LOGIN"
							variant="primary"
							size="large"
							disable="none"
							border="none"
						/>
					</ETC>
				</Wrapper>
				<Wrapper>
					<AuthLink>
						<a href="#">비밀번호 찾기</a>|<a href="#">회원가입</a>
					</AuthLink>
				</Wrapper>
				<Wrapper>
					<ETC>
						<Line />
						<span>간편 로그인</span>
						<Line />
					</ETC>
				</Wrapper>
			</Content>
		</Container>
	);
};

export default LoginTemplate;

const Container = styled.form`
	width: 800px;
	height: 650px;
	box-sizing: border-box;
	border-radius: 30px;
	background: radial-gradient(
			206.24% 127.38% at 50% 12.2%,
			rgba(100, 81, 224, 0.2) 0%,
			rgba(54, 132, 255, 0.2) 19.5%,
			rgba(203, 127, 203, 0.088) 57.5%,
			rgba(255, 255, 255, 0.07) 100%
		)
		#171717;
	border-radius: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: ${theme.PALETTE.fwhite};
	font-size: ${theme.FONT_SIZE.small};
`;

const Content = styled.div`
	width: 100%;
	max-width: 400px;
`;

const Wrapper = styled.div`
	padding: 15px 0;
`;

const InputTitle = styled.div`
	padding-bottom: 10px;
	font-family: 'Roboto Serif';
	font-weight: 400;
`;

const Checks = styled.div`
	display: flex;
	gap: 5px;
	span {
		font-family: 'Roboto Serif';
		font-weight: 400;
	}
`;

const AuthLink = styled.div`
	color: ${theme.PALETTE.primary[200]};
	a {
		color: ${theme.PALETTE.primary[200]};
		font-family: 'Roboto Mono';
		text-decoration: none;
		padding: 0 10px;
		font-weight: bold;
	}
	display: flex;
	justify-content: center;
`;

const ETC = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	span {
		padding: 0 10px;
		font-family: 'Roboto Mono';
		font-weight: 400;
	}
`;

const Line = styled.div`
	width: 130px;
	height: 0px;
	border: 1px solid #ffffff;
`;
