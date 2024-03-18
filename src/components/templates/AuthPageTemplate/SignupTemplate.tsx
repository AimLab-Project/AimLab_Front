import React, { useEffect } from 'react'; // Import the 'React' module

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
import useTimer from 'hook/useTimer';
import { secondsToMMSS } from 'hook/util';

/**
 *
 * TODO :
 * onChange 이벤트 핸들러 추가 등록  - '사용 가능한 이메일 입니다' 표시 , disabled 상태 변경
 * 상태 나누기 + 최적화
 * onSubmit 필드 체크 추가
 * input props 세분화
 */

const SignupTemplate = () => {
	const {
		register,
		getValues,
		handleSubmit,
		formState: { errors },
		setError,
		trigger,
	} = useForm({
		resolver: yupResolver(RegisterSchema),
		mode: 'onChange',
	});

	const navigate = useNavigate();
	const [emailDisabled, setEmailDisabled] = useState(false);
	const [emailSuccess, setEmailSuccess] = useState(false);
	const [codeDisabled, setCodeDisabled] = useState(false);
	const [codeSuccess, setCodeSuccess] = useState(false);
	const [nicknameSuccess, setNicknameSuccess] = useState(false);
	const [key, setKey] = useState('');

	const { start, seconds, isRunning, stop } = useTimer(180);

	// timer start
	useEffect(() => {
		if (emailDisabled) {
			start();
		}
	}, [start]);

	const handleEmailVerification = async () => {
		stop();
		const isValid = await trigger('email');
		if (!isValid) {
			return;
		}
		setEmailDisabled(true);
		const email = getValues('email');
		try {
			const { exist } = await checkEmail(email);
			if (exist) {
				setEmailDisabled(false);
				setError('email', {
					type: 'exist',
					message: '이미 사용중인 이메일 입니다.',
				});
				return;
			}

			const { key } = await requestEmailVerification(email);
			start();
			setKey(key);
			setEmailSuccess(true);
			setCodeDisabled(false);
			setCodeSuccess(false);
		} catch (err) {
			setEmailDisabled(false);
		}
	};

	const handleCodeVerification = async () => {
		const isValid = await trigger('code');
		if (!isValid) {
			return;
		}

		if (!isRunning) {
			setError('code', {
				type: 'custom',
				message: '인증 번호가 만료되었습니다. 다시 시도해주세요.',
			});
		}

		const email = getValues('email');
		const code = getValues('code') ?? 0;
		try {
			setCodeDisabled(true);
			await confirmEmailVerification(email, code.toString(), key);
			setCodeSuccess(true);
			stop();
		} catch (err) {
			setCodeDisabled(false);
			setCodeSuccess(false);
			setError('code', {
				type: 'custom',
				message: '인증 번호가 알맞지 않습니다. 다시 입력해주세요.',
			});
		}
	};

	// 닉네임 중복 체크
	const handleCheckNickname = async () => {
		const nickname = getValues('nickname');
		try {
			const { exist } = await checkNickname(nickname);
			if (exist) {
				throw new Error(`${nickname} exist`);
			}
			setNicknameSuccess(true);
		} catch (err) {
			console.log(err);
			setError('nickname', {
				type: 'exist',
				message: '중복된 닉네임 입니다.',
			});
			setNicknameSuccess(false);
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
					{emailSuccess && <SuccessText>인증 번호를 확인해주세요.</SuccessText>}
				</Wrapper>
				<Wrapper>
					<InputGroup>
						<Input
							width="315px"
							placeholder="인증번호"
							time={isRunning ? secondsToMMSS(seconds) : ''}
							{...register('code')}
							error={
								errors.code?.type == 'custom'
									? errors.code?.message
									: errors.code?.message
									? '숫자만 입력 해주세요.'
									: ''
							}
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
					{codeSuccess && (
						<SuccessText>인증 번호가 확인 되었습니다.</SuccessText>
					)}
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
					{nicknameSuccess && (
						<SuccessText>사용 가능한 닉네임 입니다.</SuccessText>
					)}
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

const SuccessText = styled.p`
	color: #009900;
	font-size: ${theme.FONT_SIZE.small};
	font-family: 'Roboto Mono';
`;
