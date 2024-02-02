import Button from 'components/ui/atoms/Button/Button';
import Input from 'components/ui/atoms/Input/Input';
import InputGroup from './InputGroup';
import React from 'react';

export default {
	title: 'InputGroup',
	tags: ['autodocs'],
	component: InputGroup,
};

export const defaultGroup = {
	args: {
		children: (
			<>
				<Input placeholder={'아이디(이메일)'} width={'315px'} />
				<Button
					label={'인증하기'}
					size={'small'}
					variant={'primary'}
					disable={'none'}
					border={'none'}
				/>
			</>
		),
	},
};

export const Error = {
	args: {
		children: (
			<>
				<Input
					placeholder={'아이디(이메일)'}
					width={'315px'}
					error={'이미 가입된 이메일 입니다.'}
				/>
				<Button
					label={'인증하기'}
					size={'small'}
					variant={'primary'}
					disable={'none'}
					border={'none'}
				/>
			</>
		),
	},
};

export const Disabled = {
	args: {
		children: (
			<>
				<Input
					placeholder={'아이디(이메일)'}
					width={'315px'}
					pass={'사용 가능한 이메일 입니다.'}
				/>
				<Button
					label={'인증하기'}
					size={'small'}
					variant={'primary'}
					disable={'some'}
					border={'none'}
				/>
			</>
		),
	},
};

export const Verification = {
	args: {
		children: (
			<>
				<Input
					placeholder={'인증번호'}
					width={'315px'}
					pass={'인증번호가 확인되었습니다.'}
					time={'3:00'}
				/>
				<Button
					label={'인증번호 확인'}
					size={'small'}
					variant={'primary'}
					disable={'some'}
					border={'none'}
				/>
			</>
		),
	},
};

export const NickName = {
	args: {
		children: (
			<>
				<Input
					placeholder={'닉네임'}
					width={'315px'}
					error={'중복된 닉네임 입니다.'}
				/>
				<Button
					label={'닉네임 확인'}
					size={'small'}
					variant={'primary'}
					disable={'none'}
					border={'none'}
				/>
			</>
		),
	},
};

export const Password = {
	args: {
		children: (
			<>
				<Input
					width={'500px'}
					placeholder={'비밀번호'}
					error={'비밀번호는 8자리 이상 영문, 숫자를 포함해 주세요.'}
					icon={true}
					type={'password'}
				/>
			</>
		),
	},
};

export const PasswordConfirm = {
	args: {
		children: (
			<>
				<Input
					width={'500px'}
					placeholder={'비밀번호 확인'}
					error={'비밀번호가 다릅니다.'}
				/>
			</>
		),
	},
};
