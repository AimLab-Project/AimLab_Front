import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'primary' | 'secondary' | 'teriary'
	size: 'small' | 'medium' | 'large' | 'full'
	disable: 'true'
	color: 'white' | 'black'
	border: 'none' | 'primary' | 'secondary' | 'teriary'
}
