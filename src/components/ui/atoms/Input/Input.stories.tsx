import Input from './Input';
import React from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default {
	title: 'Input',
	tags: ['autodocs'],
	component: Input,
};

export const Email = {
	args: {
		width: '315px',
		placeholder: '아이디(이메일)',
	},
};

export const ErrorEmail = {
	args: {
		width: '315px',
		placeholder: '아이디(이메일)',
		error: '이미 가입된 이메일 입니다.',
	},
};

export const PassEmail = {
	args: {
		width: '315px',
		placeholder: '아이디(이메일)',
		pass: '사용 가능한 이메일 입니다.',
	},
};

export const Verification = {
	args: {
		width: '315px',
		placeholder: '인증번호',
		data: '3:00',
		pass: '인증번호가 확인되었습니다.',
	},
};

export const ErrorNickName = {
	args: {
		width: '315px',
		placeholder: '닉네임',
		error: '중복된 닉네임입니다.',
	},
};

export const PassNickName = {
	args: {
		width: '315px',
		placeholer: '닉네임',
		pass: '사용 가능한 닉네임입니다.',
	},
};

export const Password = {
	args: {
		placeholder: '비밀번호(8자리 이상, 문자/숫자/기호 사용 가능)',
		error: '비밀번호는 8자리 이상 영문, 숫자를 포함해 주세요.',
		data: <VisibilityOffIcon />,
	},
};

export const PasswordConfirm = {
	args: {
		placeholder: '비밀번호 확인',
		error: '비밀번호가 다릅니다.',
	},
};
