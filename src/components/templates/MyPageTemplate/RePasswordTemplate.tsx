import Button from 'components/ui/atoms/Button/Button';
import Input from 'components/ui/atoms/Input/Input';
import InputGroup from 'components/ui/molecules/InputGroup/InputGroup';
import React from 'react';
import styled from 'styled-components';
import { Container, Content, Wrapper } from '../AuthPageTemplate/LoginTemplate';
import { ButtonBox } from '../AuthPageTemplate/SignupTemplate';

const RePasswordTemplate = () => {
	const data = {
		time: '3:00',
	};
	return (
		<Container height="650px">
			<Content>
				<Wrapper>
					<InputGroup>
						<Input width="315px" placeholder="아이디(이메일)" error="eee" />
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
						<Input
							width="315px"
							placeholder="인증번호"
							time={data.time}
							error="eee"
						/>
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
					/>
				</Wrapper>
				<Wrapper>
					<Input width="100%" placeholder="비밀번호 확인" />
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
