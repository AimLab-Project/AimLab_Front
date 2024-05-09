import Button from 'components/ui/atoms/Button/Button';
import Input from 'components/ui/atoms/Input/Input';
import MyPageAlarm from 'components/ui/atoms/MyPageAlarm/MyPageAlarm';
import React from 'react';
import {
	BtnWrapper,
	Container,
	Content,
	SideContent,
	SubContainer,
	SubTitle,
	Tip,
	Title,
	UserName,
	Wrapper,
} from '../MyPageStyles';

const MyPageNickNameTemplate = () => {
	return (
		<Container height="265px">
			<SideContent>
				<Title>닉네임 변경</Title>
				<Tip>
					각 게임 별 실시간 랭킹에서 노출되는 <br />
					사용자 정보 입니다.
				</Tip>
				<div>
					<MyPageAlarm text="해당 정보는 30일 마다 변경할 수 있습니다. 2024.05.30일에 변경 가능합니다." />
				</div>
			</SideContent>
			<Content>
				<SubContainer>
					<Wrapper>
						<SubTitle>사용중인 닉네임</SubTitle>
						<UserName>
							{/* 유저 닉네임 */}
							GUEST038324
						</UserName>
					</Wrapper>
					<Wrapper>
						<SubTitle>변경할 닉네임</SubTitle>
						<Input width="480px" placeholder="" value={'GUEST038324'} />
					</Wrapper>
					<BtnWrapper>
						<Button
							variant="teriary"
							border="teriary"
							label="닉네임 변경하기"
							size="large"
						/>
					</BtnWrapper>
				</SubContainer>
			</Content>
		</Container>
	);
};

export default MyPageNickNameTemplate;
