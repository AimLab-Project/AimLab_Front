import Button from 'components/ui/atoms/Button/Button';
import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';
import GameExplan from './GameExplan';

const ExplanationTemplate = () => {
	return (
		<Container>
			<GameExplan />
			<Body>
				<BodyContent>
					<BodyText>
						<span>에임을 직접 설정하세요!</span>
						<span>
							서비스의 커스터마이징 옵션으로 속도와 정확도를 조절하고,
						</span>
						<span>다양한 환경에서 실력을 향상 시켜보세요.</span>
					</BodyText>
					<Button
						size="full"
						label="에임 커스텀 하러가기"
						variant="teriary"
						border="teriary"
					/>
				</BodyContent>
			</Body>
		</Container>
	);
};

export default ExplanationTemplate;

const Container = styled.div`
	width: 100%;
	height: 1300px;
`;

const Body = styled.div`
	width: 100%;
	height: 650px;
	background-color: #000;
	border-top: 1px solid transparent;
	border-bottom: 1px solid transparent;
	border-image: linear-gradient(
		90deg,
		${theme.PALETTE.tertiary[200]} 0%,
		${theme.PALETTE.tertiary[100]} 20%,
		${theme.PALETTE.primary[100]} 40%,
		${theme.PALETTE.primary[200]} 60%,
		${theme.PALETTE.secondary[200]} 80%,
		${theme.PALETTE.secondary[100]} 100%
	);
	border-image-slice: 1;
`;

const BodyContent = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	color: #fff;
`;
const BodyText = styled.div`
	display: flex;
	flex-direction: column;

	font-size: 30px;
	font-weight: bold;
	height: 200px;
	justify-content: space-between;
	align-items: center;
`;

export const HeaderContent = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: space-around;
	align-items: center;
	font-size: 24px;
	font-weight: bold;
`;

export const HeaderText = styled.div`
	color: rgb(255, 255, 255);
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 200px;
	justify-content: flex-end;
	align-items: center;
	gap: 25px;
`;

export const Image = styled.img`
	width: 900px;
`;
