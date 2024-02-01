import React from 'react';
import { StyledInput, StyledInputBox } from './style';

export interface InputProps {
	pass: string;
	error: string;
	width: string;
	data?: React.ReactNode;
}

const Input = ({ pass, error, data, ...args }: InputProps) => {
	return (
		<StyledInputBox {...args}>
			<StyledInput error={error} {...args} />
			{data && <span className="icon">{data}</span>}
			{error && <span className="error">{error}</span>}
			{pass && <span className="pass">{pass}</span>}
		</StyledInputBox>
	);
};

export default Input;
