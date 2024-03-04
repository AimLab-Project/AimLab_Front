import { yupResolver } from '@hookform/resolvers/yup';
import { login } from 'api/user_api';
import Button from 'components/ui/atoms/Button/Button';
import CheckBox from 'components/ui/atoms/CheckBox/CheckBox';
import Input from 'components/ui/atoms/Input/Input';
import { LoginSchema } from 'components/validations/validations';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'styles/theme';

const LoginTemplate = () => {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(LoginSchema),
		mode: 'onChange',
	});

	const onSubmit = async (data: any) => {
		console.log(data);
		try {
			await login({
				user_email: data.email,
				user_password: data.password,
			});
			navigate('/');
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<Container height="650px" onSubmit={handleSubmit(onSubmit)}>
			<Content>
				<Wrapper>
					<InputTitle>E-MAIL</InputTitle>
					<Input
						width="100%"
						placeholder="이메일"
						{...register('email')}
						login={errors.email?.message || errors.password?.message}
					/>
				</Wrapper>
				<Wrapper>
					<InputTitle>PASSWORD</InputTitle>
					<Input
						width="100%"
						placeholder="비밀번호(8자리 이상 문자, 숫자, 특수문자 사용)"
						type="password"
						icon={true}
						{...register('password')}
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
							border="none"
						/>
					</ETC>
				</Wrapper>
				<Wrapper>
					<AuthLink>
						<Link to="/auth/repassword">비밀번호 찾기</Link>|
						<Link to="/auth/signup">회원가입</Link>
					</AuthLink>
				</Wrapper>
				<Wrapper>
					<ETC>
						<Line />
						<span>간편 로그인</span>
						<Line />
					</ETC>
				</Wrapper>
				{/* 간편 로그인 */}
			</Content>
		</Container>
	);
};

export default LoginTemplate;

export const Container = styled.form<{ height?: string }>`
	width: 800px;
	min-height: 650px;
	height: ${props => props.height || '100%'};
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
	justify-content: flex-start;
	color: ${theme.PALETTE.fwhite};
	font-size: ${theme.FONT_SIZE.small};
	padding-top: 40px;
`;

export const Content = styled.div`
	width: 100%;
	max-width: 500px;
`;

export const Wrapper = styled.div`
	padding: 15px 0;
	/* height: 50px; */
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
