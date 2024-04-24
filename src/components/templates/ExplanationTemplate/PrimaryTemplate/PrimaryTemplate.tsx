import Button from 'components/ui/atoms/Button/Button';
import React from 'react';
import { HeaderContent, HeaderText, Image } from '../ExplanationTemplate';
import Youtube from '../../../../assets/image/item/Youtube.png';
import BG from '../../../../assets/image/BG/Nature.png';
import { Header } from '../style';

export interface GamePageRouteProps {
	moveGamePage: () => void;
}

const PrimaryTemplate = ({ moveGamePage }: GamePageRouteProps) => {
	return (
		<>
			<Header BG={BG}>
				<div style={{ width: '900px' }}>
					<Image src={Youtube} alt="youtube" />
				</div>
				<HeaderContent>
					<HeaderText>
						<span>민첩성과 집중력을 향상시키는</span>
						<span>움직이는 에임 봇 게임을 도전하세요!</span>
					</HeaderText>
					<Button
						size="xlarge"
						variant="primary"
						border="primary"
						label="게임 하기"
						onClick={moveGamePage}
					/>
				</HeaderContent>
			</Header>
		</>
	);
};

export default PrimaryTemplate;
