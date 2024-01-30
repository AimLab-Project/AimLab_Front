import React from 'react';
import { ButtonProps } from 'types/button';
import { StyledButton } from './style';

const Button = ({ size, variant, disable, label }: ButtonProps) => {
	return (
		<StyledButton size={size} variant={variant} disable={disable}>
			{label}
		</StyledButton>
	);
};

export default Button;
