import React from 'react';
import { useParams } from 'react-router-dom';

const GamePage = () => {
	const { gameType } = useParams();
	console.log(gameType);
	/**
	 * <webgl>
	 * <header>
	 * <게임 결과 section>
	 * <평균 명중률 section>
	 * <반응 속도 section>
	 * <집중력 section>
	 * <Ranking>
	 */
	return <></>;
};

export default GamePage;
