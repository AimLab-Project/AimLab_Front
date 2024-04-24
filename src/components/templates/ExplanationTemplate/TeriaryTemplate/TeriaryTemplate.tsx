import React from 'react';
import { Header } from '../style';
import BG from '../../../../assets/image/BG/TeriaryNature.png';
import Button from 'components/ui/atoms/Button/Button';
import Mascotte from '../../../../assets/image/item/mascotte.png';
import styled from 'styled-components';
import { GamePageRouteProps } from '../PrimaryTemplate/PrimaryTemplate';

const TeriaryTemplate = ({ moveGamePage }: GamePageRouteProps) => {
	return (
		<Header BG={BG}>
			<Content>
				<Text>
					<span>에임 향상 모드를 통해</span>
					<span>피지컬을 키워보세요!</span>
				</Text>
				<Button
					size="xlarge"
					variant="teriary"
					border="teriary"
					label="게임 하기"
					onClick={moveGamePage}
				/>
			</Content>
			<Image src={Mascotte} alt="마스코트" />
		</Header>
	);
};

export default TeriaryTemplate;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	justify-content: space-evenly;
	align-items: center;
	font-size: 50px;
	font-weight: bold;
`;

const Text = styled.div`
	color: rgb(255, 255, 255);
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 200px;
	justify-content: space-evenly;
	align-items: center;
	gap: 25px;
`;

const Image = styled.img`
	width: 900px;
`;
