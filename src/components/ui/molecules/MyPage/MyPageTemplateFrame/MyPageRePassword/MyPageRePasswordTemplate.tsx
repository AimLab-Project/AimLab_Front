import Button from 'components/ui/atoms/Button/Button';
import Input from 'components/ui/atoms/Input/Input';
import MyPageAlarm from 'components/ui/atoms/MyPageAlarm/MyPageAlarm';
import InputGroup from 'components/ui/molecules/InputGroup/InputGroup';
import React from 'react';
import {
	BtnWrapper,
	Container,
	Content,
	InputTitle,
	SideContent,
	SubContainer,
	Title,
	Wrapper,
} from '../MyPageStyles';

const MyPageRePasswordTemplate = () => {
	return (
		<Container height="570px">
			<SideContent>
				<Title>비밀번호 변경</Title>
				<div>
					<MyPageAlarm text="비밀번호는 30일 마다 변경을 권장드립니다. 2024.05.30일에 변경 가능합니다." />
				</div>
			</SideContent>
			<Content>
				<SubContainer>
					<Wrapper>
						<InputTitle>현재 비밀번호</InputTitle>
						<InputGroup>
							<Input
								width="490px"
								placeholder="비밀번호(8자리 이상, 문자/숫자/기호 사용 가능)"
							/>
						</InputGroup>
					</Wrapper>
					<Wrapper>
						<InputTitle>비밀번호 변경</InputTitle>
						<InputGroup>
							<Input
								width="490px"
								placeholder="비밀번호(8자리 이상, 문자/숫자/기호 사용 가능)"
							/>
						</InputGroup>
					</Wrapper>
					<Wrapper>
						<InputTitle>비밀번호 변경 확인</InputTitle>
						<InputGroup>
							<Input width="490px" placeholder="비밀번호 확인" />
						</InputGroup>
					</Wrapper>
					<BtnWrapper>
						<Button
							size="large"
							variant="teriary"
							border="teriary"
							label="비밀번호 재설정하기"
						/>
					</BtnWrapper>
				</SubContainer>
			</Content>
		</Container>
	);
};

export default MyPageRePasswordTemplate;
