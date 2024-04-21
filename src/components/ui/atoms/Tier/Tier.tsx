import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';
import Button from '../Button/Button';

const Tier = () => {
	return (
		<Container>
			{/* <Wrapper>
				<Ranking>12,000 위</Ranking>
				<Update>2024년 01월 01일 13시 01분 기준</Update>
			</Wrapper>
			<Wrapper>
				<SpanTitle>상위</SpanTitle>
				<SpanContent>49%</SpanContent>
				<SpanTitle>최고 점수</SpanTitle>
				<SpanContent>19,999,000 점</SpanContent>
			</Wrapper> */}
			{/* 랭크게임을 한번도 하지 않았을 경우 */}
			<UnrankContainer>
				<Wrapper>
					<Ranking>Unranked</Ranking>
					<Update>
						랭크 시스템을 이용하시려면
						<br />
						10번의 게임 플레이가 필요합니다.
					</Update>
				</Wrapper>
				{/* 게임 페이지 이동 추가 */}
				<Wrapper>
					<Button
						variant="secondary"
						border="secondary"
						label="게임하러가기"
						size="large"
					/>
				</Wrapper>
			</UnrankContainer>
		</Container>
	);
};

export default Tier;

const Container = styled.div`
	width: 100%;
	height: 100%;
	color: #fff;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 15px 0;
	gap: 10px;
`;

const Ranking = styled.span`
	color: #ffffff;
	text-shadow: 0 0 5px ${theme.PALETTE.secondary[100]},
		0 0 10px ${theme.PALETTE.secondary[100]},
		0 0 20px ${theme.PALETTE.secondary[100]},
		0 0 40px ${theme.PALETTE.secondary[100]},
		0 0 80px ${theme.PALETTE.secondary[100]},
		0 0 90px ${theme.PALETTE.secondary[100]};
	filter: blur(0.2px);
	font-family: 'Roboto Mono';
	font-style: normal;
	font-weight: 700;
	font-size: 58px;
`;

const Update = styled.span`
	font-family: 'Roboto Mono';
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	color: #be98ae;
	opacity: 0.7;
`;

// const SpanTitle = styled.span`
// 	font-family: 'Roboto Mono';
// 	font-style: normal;
// 	font-weight: 700;
// 	font-size: 16px;
// 	color: #fff;
// `;
// const SpanContent = styled.span`
// 	font-family: 'Roboto Mono';
// 	font-style: normal;
// 	font-weight: 700;
// 	font-size: 30px;
// 	text-shadow: 0 0 5px ${theme.PALETTE.secondary[200]},
// 		0 0 10px ${theme.PALETTE.secondary[200]},
// 		0 0 20px ${theme.PALETTE.secondary[200]},
// 		0 0 40px ${theme.PALETTE.secondary[200]},
// 		0 0 80px ${theme.PALETTE.secondary[200]},
// 		0 0 90px ${theme.PALETTE.secondary[200]};
// 	filter: blur(0.2px);
// `;

const UnrankContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
