import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'primary' | 'secondary' | 'teriary';
	size: 'small' | 'medium' | 'large' | 'xlarge' | 'full';
	disable: 'some' | 'none';
	label?: string;
	border: 'primary' | 'secondary' | 'teriary' | 'none';
}
