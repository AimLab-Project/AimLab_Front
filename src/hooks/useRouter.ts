import { useNavigate } from 'react-router-dom';

const useRouter = () => {
	const route = useNavigate();

	// 스크롤 위치 0인 상태로 페이지 이동을 합니다
	const toMove = (link: string) => {
		window.scrollTo({ top: 0 });
		route(link);
	};
};

export default useRouter;
