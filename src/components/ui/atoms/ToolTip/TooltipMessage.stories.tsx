import ToolTipMessage from './ToolTipMessage';

export default {
	title: 'TooltipMessage',
	tags: ['autodocs'],
	component: ToolTipMessage,
};

export const Blue = {
	args: {
		colors: 'blue',
		label:
			"'평균 명중률'은 여러 게임에서 얻은 명중률의 누적 평균으로, 전반적인 명중 정확도를 나타내는 지표입니다. ",
	},
};

export const Red = {
	args: {
		colors: 'red',
		label:
			"'반응속도 그래프'는 여러 게임에서 얻은 반응 속도의 누적 그래프로, 높은 명중률을 나타내기 위해 사용자가 빠르게 대응하는 시간을 순차적으로 보여줍니다. 값이 반비례할수록 우수합니다.",
	},
};

export const Yellow = {
	args: {
		colors: 'yellow',
		label: '안녕하세요.',
	},
};

export const Black = {
	args: {
		colors: 'black',
		label: '개인정보 수집 이용 동의에 체크해 주세요.',
	},
};
