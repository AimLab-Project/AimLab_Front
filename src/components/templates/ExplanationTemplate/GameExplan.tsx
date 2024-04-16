import useRouter from 'hooks/useRouter';
import React, { useState } from 'react';
import styled from 'styled-components';
import PrimaryTemplate from './PrimaryTemplate/PrimaryTemplate';
import SecondaryTemplate from './SecondaryTemplate/SecondaryTemplate';
import TeriaryTemplate from './TeriaryTemplate/TeriaryTemplate';

const GameExplan = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const totalSlides = 3; // 총 템플릿 수

	const nextSlide = (slideNumber: number) => {
		setCurrentSlide(slideNumber);
	};

	const { moveGamePage } = useRouter();

	return (
		<div style={{ position: 'relative' }}>
			<Wrapper>
				<Container
					style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
				>
					<Inner>
						<SecondaryTemplate moveGamePage={moveGamePage} />
					</Inner>
					<Inner>
						<PrimaryTemplate moveGamePage={moveGamePage} />
					</Inner>
					<Inner>
						<TeriaryTemplate moveGamePage={moveGamePage} />
					</Inner>
				</Container>
			</Wrapper>
			<BtnBox>
				<BtnInner>
					{Array.from({ length: totalSlides }).map((_, index) => (
						<DotBtn
							key={index}
							onClick={() => nextSlide(index)}
							style={{
								backgroundColor: currentSlide === index ? '#FFB145' : '#fff',
							}}
						></DotBtn>
					))}
				</BtnInner>
			</BtnBox>
		</div>
	);
};

export default GameExplan;

const Wrapper = styled.div`
	overflow: hidden;
`;

const Container = styled.div`
	width: 300vw;
	display: flex;
	transition: transform 0.5s ease-out;
`;

const Inner = styled.div`
	width: 100vw;
	flex-shrink: 0;
`;

const BtnBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const BtnInner = styled.div`
	width: 300px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	position: absolute;
`;

const DotBtn = styled.div`
	width: 25px;
	height: 25px;
	border-radius: 50%;
	background-color: #fff;
	cursor: pointer;
`;
