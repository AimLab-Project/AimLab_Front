import React from 'react';
import { StyledButton } from './style';
import PropTypes from 'prop-types';
export interface ButtonProps {
	variant: 'primary' | 'secondary' | 'teriary';
	size: 'small' | 'medium' | 'large' | 'xlarge' | 'full';
	disable: 'some' | 'none';
	label?: string;
	border: 'primary' | 'secondary' | 'teriary' | 'none';
	onClick?: () => void;
}
const Button = ({ ...args }: ButtonProps) => {
	return <StyledButton {...args}>{args.label}</StyledButton>;
};

Button.PropTypes = {
	/**
	 * 텍스트를 입력해주세요.
	 */
	label: PropTypes.string.isRequired,
	/**
	 * 버튼의 사이즈를 골라주세요.
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'full']),
	/**
	 * 버튼의 색상을 골라주세요.
	 */
	variant: PropTypes.oneOf(['primary', 'secondary', 'teriary']),
	/**
	 * 버튼 비활성화 하기
	 */
	disable: PropTypes.oneOf(['some', 'none']),
	/**
	 * 버튼 커버를 골라주세요.
	 */
	border: PropTypes.oneOf(['primary', 'secondary', 'teriary', 'none']),
};

Button.defaultProps = {
	size: 'xlarge',
	variant: 'primary',
};

export default Button;
