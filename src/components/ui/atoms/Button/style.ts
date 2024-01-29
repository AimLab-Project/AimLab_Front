import { ButtonProps } from './../../../../types/button'

import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import theme from 'styles/theme'

const variantCSS = {
	primary: css`
		background: linear-gradient(
			180deg,
			${theme.PALETTE.primary[100]} 0%,
			${theme.PALETTE.primary[200]} 100%
		);
		/* border-image: linear-gradient(
			180deg,
			${theme.PALETTE.primary[100]} 0%,
			${theme.PALETTE.primary[200]} 100%
		); */
	`,
	secondary: css`
		background: linear-gradient(
			180deg,
			${theme.PALETTE.secondary[100]} 0%,
			${theme.PALETTE.secondary[200]} 100%
		);
		/* border-image: linear-gradient(
			180deg,
			${theme.PALETTE.secondary[100]} 0%,
			${theme.PALETTE.secondary[200]} 100%
		); */
	`,
	teriary: css`
		background: linear-gradient(
			180deg,
			${theme.PALETTE.tertiary[100]} 0%,
			${theme.PALETTE.tertiary[200]} 100%
		);
		/* border-image: linear-gradient(
			180deg,
			${theme.PALETTE.tertiary[100]} 0%,
			${theme.PALETTE.tertiary[200]} 100%
		); */
	`,
}

const sizeCSS = {
	small: css`
		width: 160px;
		height: 45px;
		font-size: 20px;
		font-weight: bold;
	`,

	medium: css`
		width: 280px;
		height: 75px;
		font-size: 30px;
		font-weight: bold;
	`,
	large: css`
		width: 470px;
		height: 110px;
		font-size: 50px;
		font-weight: bold;
	`,
	full: css`
		width: 695px;
		height: 85px;
		font-size: 50px;
		font-weight: bold;
	`,
}

const colorCSS = {
	white: css`
		color: ${({ theme }) => theme.PALETTE.fontColor.white};
	`,
	black: css`
		color: ${({ theme }) => theme.PALETTE.fontColor.black};
	`,
}

const borderCSS = {
	none: css`
		border: none;
	`,
	primary: css`
		border-image: linear-gradient(
			90deg,
			${theme.PALETTE.primary[100]} 0%,
			${theme.PALETTE.primary[200]} 100%
		);
	`,
	secondary: css`
		border-image: linear-gradient(
			90deg,
			${theme.PALETTE.secondary[100]} 0%,
			${theme.PALETTE.secondary[200]} 100%
		);
	`,
	teriary: css`
		border-image: linear-gradient(
			90deg,
			${theme.PALETTE.tertiary[100]} 0%,
			${theme.PALETTE.tertiary[200]} 100%
		);
	`,
}

const disabledCSS = {
	true: css`
		color: ${({ theme }) => theme.PALETTE.fontColor.white} !important;
		font-weight: bold !important;
		border: none !important;
		background: linear-gradient(
			180deg,
			${theme.PALETTE.gray[200]} 0%,
			${theme.PALETTE.gray[700]} 100%
		) !important;
		cursor: default !important;
	`,
}

export const Button = styled.button<ButtonProps>`
	${({ size }) => sizeCSS[size]};
	${({ variant }) => variantCSS[variant]};
	${({ disable }) => disabledCSS[disable]};
	${({ color }) => colorCSS[color]};
	${({ border }) => borderCSS[border]};
`
