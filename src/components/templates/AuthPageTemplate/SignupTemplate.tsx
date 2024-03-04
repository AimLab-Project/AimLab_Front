import React from 'react'; // Import the 'React' module

import { yupResolver } from '@hookform/resolvers/yup';
// import { requestEmailVerification } from 'api/user_api';
import Button from 'components/ui/atoms/Button/Button';
import CheckBox from 'components/ui/atoms/CheckBox/CheckBox';
import Input from 'components/ui/atoms/Input/Input';
import InputGroup from 'components/ui/molecules/InputGroup/InputGroup';
import { RegisterSchema } from 'components/validations/validations';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'styles/theme';
import { Container, Content } from './LoginTemplate';
import {
	checkEmail,
	checkNickname,
	confirmEmailVerification,
	requestEmailVerification,
	signup,
	// signup,
} from 'api/user_api';

/**
 *
 * todo
 * - 에러 핸들링
 * - 이메일 인증 timer 기능 + time 조건 체크
 * - 조건 체크 후 noti
 */

const SignupTemplate = () => {
	const {
		register,
		getValues,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(RegisterSchema),
		mode: 'onChange',
	});

	const navigate = useNavigate();

	const [emailDisabled, setEmailDisabled] = useState(false);
	const [codeDisabled, setCodeDisabled] = useState(false);
	const [key, setKey] = useState('');

	const handleEmailVerification = async () => {
		const email = getValues('email');
		setEmailDisabled(true);
		try {
			const { exist } = await checkEmail(email);
			if (exist) {
				setEmailDisabled(false);
				return;
			}

			const { key } = await requestEmailVerification(email);
			setKey(key);
		} catch (err) {
			setEmailDisabled(false);
		}
	};

	const handleCodeVerification = async () => {
		const email = getValues('email');
		const code = getValues('code') ?? 0;
		try {
			setCodeDisabled(true);
			await confirmEmailVerification(email, code.toString(), key);
		} catch (err) {
			setCodeDisabled(false);
		}
	};

	const handleCheckNickname = async () => {
		const nickname = getValues('nickname');
		try {
			const { exist } = await checkNickname(nickname);
			console.log(exist ? '성공' : '실패');
		} catch (err) {
			console.log(err);
		}
	};

	const onSubmit = async (data: any) => {
		try {
			console.log(data);
			await signup({
				user_email: data.email,
				user_password: data.password,
				user_nickname: data.nickname,
				key,
			});

			navigate('/auth/login');
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Container height="800px" onSubmit={handleSubmit(onSubmit)}>
			<Content>
				<Wrapper>
					<InputGroup>
						<Input
							width="315px"
							placeholder="아이디(이메일)"
							{...register('email')}
							error={errors.email?.message}
						/>
						<Button
							label="인증하기"
							size="small"
							variant="primary"
							border="none"
							disable={emailDisabled}
							onClick={handleEmailVerification}
							type="button"
						/>
					</InputGroup>
				</Wrapper>
				<Wrapper>
					<InputGroup>
						<Input
							width="315px"
							placeholder="인증번호"
							time="3:00"
							{...register('code')}
						/>
						<Button
							label="인증번호 확인"
							size="small"
							variant="primary"
							border="none"
							disable={codeDisabled}
							onClick={handleCodeVerification}
							type="button"
						/>
					</InputGroup>
				</Wrapper>
				<Wrapper>
					<InputGroup>
						<Input
							width="315px"
							placeholder="닉네임"
							{...register('nickname')}
							error={errors.nickname?.message}
						/>
						<Button
							label="닉네임 확인"
							size="small"
							variant="primary"
							border="none"
							onClick={handleCheckNickname}
							type="button"
						/>
					</InputGroup>
				</Wrapper>
				<Wrapper>
					<Input
						width="100%"
						placeholder="비밀번호(8자리 이상 문자, 숫자, 특수문자 사용)"
						icon={true}
						type="password"
						{...register('password')}
						error={errors.password?.message}
					/>
				</Wrapper>
				<Wrapper>
					<Input
						width="100%"
						placeholder="비밀번호 확인"
						type="password"
						{...register('passwordConfirm')}
						error={errors.passwordConfirm?.message}
					/>
				</Wrapper>
				<Wrapper>
					<Checks>
						<span>
							<Link to="#">(필수) 개인 정보 처리 방침</Link>에 동의합니다.
						</span>
						<CheckBox variant="primary" />
					</Checks>
				</Wrapper>
				<ButtonBox>
					<Button
						label="시작하기"
						variant="primary"
						border="none"
						size="large"
						disable={false}
						type="submit"
					/>
				</ButtonBox>
			</Content>
		</Container>
	);
};

export default SignupTemplate;

const Wrapper = styled.div`
	padding: 20px 0;
	height: 50px;
`;

const Checks = styled.div`
	padding-top: 50px;
	display: flex;
	justify-content: space-between;
	a {
		text-decoration: none;
		color: ${theme.PALETTE.primary[100]};
	}
`;

export const ButtonBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 30px;
`;
