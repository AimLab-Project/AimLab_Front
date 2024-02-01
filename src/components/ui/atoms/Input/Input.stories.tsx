import Input from './Input';

export default {
	title: 'Input',
	tags: ['autodocs'],
	component: Input,
};

export const Email = {
	args: {
		placeholder: '아이디(이메일)',
	},
};

export const ErrorEmail = {
	args: {
		placeholder: '아이디(이메일)',
		error: '이미 가입된 이메일 입니다.',
	},
};
