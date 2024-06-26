import Button from 'components/ui/atoms/Button/Button';
import React from 'react';
import Youtube from '../../../../assets/image/item/Youtube.png';
import BG from '../../../../assets/image/BG/explanation_BG.png';
import { HeaderContent, HeaderText, Image } from '../ExplanationTemplate';
import { Header } from '../style';
import { GamePageRouteProps } from '../PrimaryTemplate/PrimaryTemplate';

const SecondaryTemplate = ({ moveGamePage }: GamePageRouteProps) => {
	return (
		<>
			<Header BG={BG}>
				<div style={{ width: '900px' }}>
					<Image src={Youtube} alt="youtube" />
				</div>
				<HeaderContent>
					<HeaderText>
						<span>정교한 사격 기술을 갖추고</span>
						<span>명중률을 최대로 끌어올리세요.</span>
						<span>에임 향상 게임으로 실력을 업그레이드 해보세요!</span>
					</HeaderText>
					<Button
						size="xlarge"
						variant="secondary"
						border="secondary"
						label="게임 하기"
						onClick={moveGamePage}
					/>
				</HeaderContent>
			</Header>
		</>
	);
};

export default SecondaryTemplate;
