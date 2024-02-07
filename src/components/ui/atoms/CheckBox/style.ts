import styled, { css } from 'styled-components';
import theme from 'styles/theme';
import { CheckProps } from './CheckBox';

const variantCSS = {
	primary: css`
		border: 3px solid transparent;
		border-image: linear-gradient(
			270deg,
			${theme.PALETTE.primary[100]} 0%,
			${theme.PALETTE.primary[200]} 100%
		);
		border-image-slice: 1;
	`,
	secondary: css`
		border: 3px solid transparent;
		border-image: linear-gradient(
			270deg,
			${theme.PALETTE.secondary[100]} 0%,
			${theme.PALETTE.secondary[200]} 100%
		);
		border-image-slice: 1;
	`,
	teriary: css`
		border: 3px solid transparent;
		border-image: linear-gradient(
			270deg,
			${theme.PALETTE.tertiary[100]} 0%,
			${theme.PALETTE.tertiary[200]} 100%
		);
		border-image-slice: 1;
	`,
};

export const StyledCheckBox = styled.div<CheckProps>`
	${({ variant }) => variantCSS[variant]};
	background-color: #fff;
	width: 14px;
	height: 14px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;
