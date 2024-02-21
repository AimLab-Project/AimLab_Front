import React, { forwardRef, InputHTMLAttributes, useState } from 'react';
import { StyledInput, StyledInputBox } from './style';
import InfoIcon from '@mui/icons-material/Info';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	error?: string;
	width: string;
	time?: string;
	login?: string;
	icon?: React.ReactNode;
	placeholder: string;
	type?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{ error, time, login, icon, placeholder, width, type, ...rest }: InputProps,
		ref,
	) => {
		const [showPassword, setShowPassword] = useState(false);
		const [inputType, setInputType] = useState(type);

		const toggleShowPassword = () => {
			setShowPassword(!showPassword);
			if (inputType === 'password') {
				setInputType('text');
			} else {
				setInputType('password');
			}
		};

		return (
			<StyledInputBox width={width}>
				{login && (
					<span className="login-error">
						<InfoIcon />
						{login}
					</span>
				)}
				<StyledInput
					{...rest}
					ref={ref}
					width={width}
					placeholder={placeholder}
					type={inputType}
					error={error}
				/>
				{time && <span className="icon">{time}</span>}
				{icon && (
					<span className="icon" onClick={toggleShowPassword}>
						{showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
						{icon}
					</span>
				)}
				{error && <span className="error">{error}</span>}
			</StyledInputBox>
		);
	},
);

Input.displayName = 'Input';

export default Input;
