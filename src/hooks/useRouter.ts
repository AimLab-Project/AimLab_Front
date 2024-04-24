import API_KEY from 'constants/API_KEY';
import { useNavigate } from 'react-router-dom';

const useRouter = () => {
	const route = useNavigate();

	// 스크롤 위치 0인 상태로 페이지 이동을 합니다
	const toMove = (link: string) => {
		window.scrollTo({ top: 0 });
		route(link);
	};

	const moveMainPage = () => toMove(API_KEY.HOME);
	const moveGamePage = () => toMove(API_KEY.GAME);
	const moveMyDayaPage = () => toMove(API_KEY.MY_DATA);
	const moveMyPage = () => toMove(API_KEY.MY_PAGE);

	return {
		moveMainPage,
		moveGamePage,
		moveMyDayaPage,
		moveMyPage,
	};
};

export default useRouter;
