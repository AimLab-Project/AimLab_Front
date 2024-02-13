import Button from './Button';

export default {
	title: 'Button',
	tags: ['autodocs'],
	component: Button,
};

export const Small = {
	args: {
		label: '인증하기',
		size: 'small',
		variant: 'primary',
	},
};

export const Disabled = {
	args: {
		label: '인증하기',
		size: 'small',
		variant: 'primary',
		disable: true,
	},
};

export const Medium = {
	args: {
		label: '분석 보러가기',
		size: 'medium',
		variant: 'primary',
		border: 'primary',
	},
};

export const Large = {
	args: {
		label: '시작하기',
		size: 'large',
		variant: 'primary',
	},
};

export const Xlarge = {
	args: {
		label: '게임 하기',
		size: 'xlarge',
		variant: 'secondary',
	},
};

export const Full = {
	args: {
		label: '에임 커스텀 하러가기',
		size: 'full',
		variant: 'teriary',
	},
};
