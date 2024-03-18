import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

const Tier = () => {
	return (
		<Container>
			<Wrapper>
				<Ranking>12,000 위</Ranking>
				<Update>2024년 01월 01일 13시 01분 기준</Update>
			</Wrapper>
			<Wrapper>
				<SpanTitle>상위</SpanTitle>
				<SpanContent>49%</SpanContent>
				<SpanTitle>최고 점수</SpanTitle>
				<SpanContent>19,999,000 점</SpanContent>
			</Wrapper>
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
	align-items: flex-start;
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
	opacity: 0.2;
`;

const SpanTitle = styled.span`
	font-family: 'Roboto Mono';
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	color: #fff;
`;
const SpanContent = styled.span`
	font-family: 'Roboto Mono';
	font-style: normal;
	font-weight: 700;
	font-size: 30px;
	text-shadow: 0 0 5px ${theme.PALETTE.secondary[200]},
		0 0 10px ${theme.PALETTE.secondary[200]},
		0 0 20px ${theme.PALETTE.secondary[200]},
		0 0 40px ${theme.PALETTE.secondary[200]},
		0 0 80px ${theme.PALETTE.secondary[200]},
		0 0 90px ${theme.PALETTE.secondary[200]};
	filter: blur(0.2px);
`;
