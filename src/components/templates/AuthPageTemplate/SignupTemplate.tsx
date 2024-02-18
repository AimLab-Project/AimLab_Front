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
import { RegisterSchema } from 'components/validations/registerValidation';

const SignupTemplate = () => {
	const {
		register,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		resolver: yupResolver(RegisterSchema),
	});
	const [disabled, setDisabled] = useState(false);
	const handleClick = () => {
		setDisabled(true);
	};
	const onSunmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	return (
		<Container height="800px" onSubmit={onSunmit}>
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
							<a href="#">(필수) 개인 정보 처리 방침</a>에 동의합니다.
						</span>
						<CheckBox variant="primary" {...register('check')} />
					</Checks>
				</Wrapper>
				<ButtonBox>
					<Button
						label="시작하기"
						variant="primary"
						border="none"
						size="large"
						disable={true}
					/>
				</ButtonBox>
			</Content>
		</Container>
	);
};

export default SignupTemplate;

const Wrapper = styled.div`
	padding: 20px 0;
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
