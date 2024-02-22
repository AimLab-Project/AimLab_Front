import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'components/ui/atoms/Button/Button';
import Input from 'components/ui/atoms/Input/Input';
import InputGroup from 'components/ui/molecules/InputGroup/InputGroup';
import { PasswordReset } from 'components/validations/validations';
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Container, Content, Wrapper } from '../AuthPageTemplate/LoginTemplate';
import { ButtonBox } from '../AuthPageTemplate/SignupTemplate';

const RePasswordTemplate = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(PasswordReset),
		mode: 'onChange',
	});

	const onSubmit = (data: any) => {
		console.log(data);
	};

	const data = {
		time: '3:00',
	};
	return (
		<Container height="650px" onSubmit={handleSubmit(onSubmit)}>
			<Content>
				<Wrapper>
					<InputGroup>
						<Input
							width="315px"
							placeholder="아이디(이메일)"
							value={'dbsrnr2747@naver.com'}
						/>
						<Button
							size="small"
							variant="primary"
							label="인증하기"
							border="none"
							disable={false}
						/>
					</InputGroup>
				</Wrapper>
				<Wrapper>
					<InputGroup>
						<Input width="315px" placeholder="인증번호" time={data.time} />
						<Button
							size="small"
							variant="primary"
							label="인증번호 확인"
							border="none"
							disable={false}
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
					<Space />
				</Wrapper>
				<ButtonBox>
					<Button
						label="비밀번호 재설정"
						size="large"
						variant="primary"
						border="none"
					/>
				</ButtonBox>
			</Content>
		</Container>
	);
};

export default RePasswordTemplate;

const Space = styled.div`
	height: 50px;
`;
