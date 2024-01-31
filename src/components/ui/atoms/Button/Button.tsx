import React from 'react';
import { ButtonProps } from 'types/button';
import { StyledButton } from './style';
import PropTypes from 'prop-types';

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
};

Button.defaultProps = {
	size: 'medium',
	variant: 'priamry',
};

export default Button;
