import { ButtonProps } from './../../../../types/button';

import styled, { css } from 'styled-components';
import theme from 'styles/theme';

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
		color: ${theme.PALETTE.white};
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
		color: ${theme.PALETTE.white};
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
};

const sizeCSS = {
	small: css`
		color: ${theme.PALETTE.white};
		width: 160px;
		height: 45px;
		font-size: 20px;
		font-weight: bold;
	`,

	medium: css`
		color: ${theme.PALETTE.fblack};
		width: 280px;
		height: 75px;
		font-size: 30px;
		font-weight: bold;
	`,
	large: css`
		color: ${theme.PALETTE.fblack};
		width: 470px;
		height: 110px;
		font-size: 50px;
		font-weight: bold;
	`,
	full: css`
		color: ${theme.PALETTE.fblack};
		width: 695px;
		height: 85px;
		font-size: 50px;
		font-weight: bold;
	`,
};

// const borderCSS = {
// 	none: css`
// 		border: none;
// 	`,
// 	primary: css`
// 		border-image: linear-gradient(
// 			90deg,
// 			${theme.PALETTE.primary[100]} 0%,
// 			${theme.PALETTE.primary[200]} 100%
// 		);
// 	`,
// 	secondary: css`
// 		border-image: linear-gradient(
// 			90deg,
// 			${theme.PALETTE.secondary[100]} 0%,
// 			${theme.PALETTE.secondary[200]} 100%
// 		);
// 	`,
// 	teriary: css`
// 		border-image: linear-gradient(
// 			90deg,
// 			${theme.PALETTE.tertiary[100]} 0%,
// 			${theme.PALETTE.tertiary[200]} 100%
// 		);
// 	`,
// };

const disabledCSS = {
	some: css`
		color: ${theme.PALETTE.white};
		font-weight: bold !important;
		border: none !important;
		background: linear-gradient(
			180deg,
			${theme.PALETTE.gray[200]} 0%,
			${theme.PALETTE.gray[700]} 100%
		) !important;
		cursor: default !important;
	`,
	none: css``,
};

export const StyledButton = styled.button<ButtonProps>`
	${({ size }) => sizeCSS[size]};
	${({ variant }) => variantCSS[variant]};
	${({ disable }) => disabledCSS[disable]};
	border: none;
	border-radius: 14px;
	cursor: pointer;
`;
