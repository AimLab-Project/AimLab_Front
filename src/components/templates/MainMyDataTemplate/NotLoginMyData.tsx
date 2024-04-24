import Button from 'components/ui/atoms/Button/Button';
import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';
import BG from '../../../assets/image/BG/main_blur.png';
import chart from '../../../assets/image/user/chart.png';

const NotLogin = () => {
	return (
		<Container>
			<Wrapper>
				<Content>
					<Text>
						<span>로그인 해야</span>
						<span>사용자 분석 데이터를 볼 수 있어요.</span>
						<Footer>
							<span>에임 향상</span>을 위해
							<span>실시간</span>
							분석 서비스를 이용해보세요.
						</Footer>
					</Text>
					<Image src={`${chart}`} alt="chart" />
				</Content>
				<ButtonBox>
					<Button
						size="xlarge"
						variant="primary"
						label="로그인 하기"
						border="none"
					/>
				</ButtonBox>
			</Wrapper>
		</Container>
	);
};

export default NotLogin;

const Container = styled.div`
	width: 100%;
	height: 100%;
	background-image: url(${BG});
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

const Content = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
`;

const Text = styled.div`
	color: #fff;
	display: flex;
	flex-direction: column;
	font-size: 60px;
	font-weight: bold;
	gap: 30px;
`;

const Footer = styled.div`
	font-size: 30px;
	font-weight: bold;

	> span:nth-child(1) {
		color: ${theme.PALETTE.secondary[100]};
	}

	> span:nth-child(2) {
		color: ${theme.PALETTE.primary[100]};
	}
`;

const Image = styled.img`
	width: 350px;
	height: 350px;
`;

const ButtonBox = styled.div`
	width: 100%;
	height: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
