import Button from 'components/ui/atoms/Button/Button';
import CheckBox from 'components/ui/atoms/CheckBox/CheckBox';
import Input from 'components/ui/atoms/Input/Input';
import InputGroup from 'components/ui/molecules/InputGroup/InputGroup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';
import theme from 'styles/theme';
import { Container, Content } from './LoginTemplate';
import { RegisterSchema } from 'components/validations/validations';
import { Link } from 'react-router-dom';

const SignupTemplate = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(RegisterSchema),
		mode: 'onChange',
	});

	const [disabled, setDisabled] = useState(false);
	const handleClick = () => {
		setDisabled(true);
	};

	const onSubmit = (data: any) => {
		console.log(data);
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
							disable={disabled}
							onClick={handleClick}
							type="button"
						/>
					</InputGroup>
				</Wrapper>
				<Wrapper>
					<InputGroup>
						<Input width="315px" placeholder="인증번호" time="3:00" />
						<Button
							label="인증번호 확인"
							size="small"
							variant="primary"
							border="none"
							disable={true}
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
						disable={true}
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
	box-sizing: none;
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
