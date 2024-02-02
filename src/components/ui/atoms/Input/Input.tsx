import React, { useState } from 'react';
import { StyledInput, StyledInputBox } from './style';
import InfoIcon from '@mui/icons-material/Info';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export interface InputProps {
	pass: string;
	error: string;
	width: string;
	time?: string;
	login: string;
	icon?: React.ReactNode;
}

const Input = ({ pass, error, time, login, icon, ...args }: InputProps) => {
	const [showPassword, setShowPassword] = useState(false);

	const toggleShowPassword = () => {
		setShowPassword(!showPassword);
	};
	return (
		<StyledInputBox {...args}>
			{login && (
				<span className="login-error">
					<InfoIcon />
					{login}
				</span>
			)}
			<StyledInput
				error={error}
				{...args}
				type={showPassword ? 'text' : 'password'}
			/>
			{time && <span className="icon">{time}</span>}
			{icon && (
				<span className="icon" onClick={toggleShowPassword}>
					{showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
					{icon}
				</span>
			)}
			{error && <span className="error">{error}</span>}
			{pass && <span className="pass">{pass}</span>}
		</StyledInputBox>
	);
};

export default Input;
