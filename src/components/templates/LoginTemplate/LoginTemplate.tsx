import Button from 'components/ui/atoms/Button/Button';
import CheckBox from 'components/ui/atoms/CheckBox/CheckBox';
import Input from 'components/ui/atoms/Input/Input';
import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

const LoginTemplate = () => {
	return (
		<Wrapper>
			<Container>
				<div>
					<div>E-MAIL</div>
					<div>
						<Input width="100%" placeholder="이메일" />
					</div>
				</div>
				<div>
					<div>PASSWORD</div>
					<div>
						<Input
							width="100%"
							placeholder="비밀번호(8자리 이상 문자, 숫자, 특수문자 사용)"
							type="password"
							icon={true}
						/>
					</div>
				</div>
				<div>
					<div>
						<CheckBox variant="primary" />
						<span>로그인 상태 유지</span>
					</div>
					<div>
						<CheckBox variant="primary" />
						<span>아이디 저장</span>
					</div>
				</div>
				<div>
					<Button
						label="LOGIN"
						variant="primary"
						size="large"
						disable="none"
						border="none"
					/>
				</div>
				<div>
					<a href="#">비밀번호 찾기</a>|<a href="#">회원가입</a>
				</div>
				<div>
					<div />
					<span>간편 로그인</span>
					<div />
				</div>
			</Container>
		</Wrapper>
	);
};

export default LoginTemplate;

const Wrapper = styled.form`
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
	color: ${theme.PALETTE.fwhite};
	font-size: ${theme.FONT_SIZE.small};
`;

const Container = styled.div`
	width: 100%;
	max-width: 400px;
`;
