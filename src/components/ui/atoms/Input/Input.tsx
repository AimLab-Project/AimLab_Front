import React from 'react';
import { StyledInput, StyledInputBox } from './style';

export interface InputProps {
	error: string;
	width: string;
}

const Input = ({ error, ...args }: InputProps) => {
	return (
		<StyledInputBox {...args}>
			<StyledInput error={error} {...args} />
			{error && <span className="error">{error}</span>}
		</StyledInputBox>
	);
};

export default Input;
