import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';
import rank1Img from '../../../assets/image/ranking/ranking_yellow.png';
import rank2Img from '../../../assets/image/ranking/ranking_mint.png';
import rank3Img from '../../../assets/image/ranking/ranking_purple.png';
import crownImg from '../../../assets/image/ranking/crown.png';
import rankersData from '../../../../data/gamerank.json';

export default function Ranking() {
	const { rankers } = rankersData;
	return (
		<Container>
			<Title>Ranking</Title>
			<TitleDesc>
				마지막 업데이트 : 2024년 4월 29일 오전 10시 34분 45초
			</TitleDesc>
			<TopRankerImages>
				{rankers.map(ranker => {
					return <RankerImage key={ranker.user_id} gameUser={ranker} />;
				})}
			</TopRankerImages>
		</Container>
	);
}

const Container = styled.section`
	width: 516px;
	height: 1184px;
	background-color: ${theme.PALETTE.background.black[200]};
	border: 1px solid ${theme.PALETTE.white};
	border-radius: 30px;
	padding: 2rem;
	font-family: 'Roboto Mono';
`;

const Title = styled.h1`
	color: ${theme.PALETTE.primary[100]};
	font-size: 40px;
	line-height: 53px;
	font-weight: bold;
`;

const TitleDesc = styled.p`
	color: ${theme.PALETTE.gray[1000]};
	font-weight: 500;
	font-size: 15px;
	line-height: 20px;
`;

const TopRankerImages = styled.div`
	display: flex;
	justify- content: space-between;
`;

type gameUser = {
	user_id: string;
	nickname: string;
	profile_image: string;
	rank: number;
	score: number;
};

type RankerImageProps = {
	gameUser: gameUser;
};

const RankerImage: React.FC<RankerImageProps> = ({ gameUser: gameUser }) => {
	const { nickname, rank, profile_image } = gameUser;

	console.log(`${nickname} ${rank} ${profile_image}`);
	const targetBottomImage =
		rank === 1 ? rank1Img : rank == 2 ? rank2Img : rank3Img;
	return (
		<>
			<ProfileImageWrapper>
				<CrownImage src={crownImg} />
				<ProfileImage src={profile_image} />
				<BottomImage src={targetBottomImage} />
			</ProfileImageWrapper>
		</>
	);
};

const ProfileImageWrapper = styled.div`
	position: relative;
	border-radius: 50%;
	border: 4px solid #7aeebe;
	background-color: #7aeebe;
`;

const ProfileImage = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 50%;
`;

const CrownImage = styled.img`
	width: 70px;
	height: 64px;
	position: absolute;
	top: -48px;
	right: 0px;
`;

const BottomImage = styled.img`
	position: absolute;
	left: 10px;
	top: 80px;
`;
