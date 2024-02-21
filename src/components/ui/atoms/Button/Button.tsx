import React, { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './style';
import propTypes from 'prop-types';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'primary' | 'secondary' | 'teriary';
	size: 'small' | 'medium' | 'large' | 'xlarge' | 'full';
	disable?: boolean;
	label?: string;
	border: 'primary' | 'secondary' | 'teriary' | 'none';
	onClick?: () => void;
}
const Button = ({ ...args }: ButtonProps) => {
	return <StyledButton {...args}>{args.label}</StyledButton>;
};

Button.propTypes = {
	/**
	 * 텍스트를 입력해주세요.
	 */
	label: propTypes.string.isRequired,
	/**
	 * 버튼의 사이즈를 골라주세요.
	 */
	size: propTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'full']),
	/**
	 * 버튼의 색상을 골라주세요.
	 */
	variant: propTypes.oneOf(['primary', 'secondary', 'teriary']),
	/**
	 * 버튼 비활성화 하기
	 */
	disable: propTypes.bool,
	/**
	 * 버튼 커버를 골라주세요.
	 */
	border: propTypes.oneOf(['primary', 'secondary', 'teriary', 'none']),
};

Button.defaultProps = {
	size: 'xlarge',
	variant: 'primary',
};

export default Button;
