import React from 'react';
import { StyledInput, StyledInputBox } from './style';
import InfoIcon from '@mui/icons-material/Info';

export interface InputProps {
	pass: string;
	error: string;
	width: string;
	data?: React.ReactNode;
	login: string;
}

const Input = ({ pass, error, data, login, ...args }: InputProps) => {
	return (
		<StyledInputBox {...args}>
			{login && (
				<span className="login-error">
					<InfoIcon />
					{login}
				</span>
			)}
			<StyledInput error={error} {...args} />
			{data && <span className="icon">{data}</span>}
			{error && <span className="error">{error}</span>}
			{pass && <span className="pass">{pass}</span>}
		</StyledInputBox>
	);
};

export default Input;
