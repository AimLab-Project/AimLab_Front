import styled, { css } from 'styled-components';
import { TooltipProps } from './ToolTip';

const backColorCSS = {
	blue: css`
		background-color: #588cdf;
	`,
	red: css`
		background-color: #ff7bc3;
	`,
	yellow: css`
		background-color: #ffb546;
	`,
	black: css`
		background-color: #000;
	`,
};

const borderColorCSS = {
	blue: css`
		border-bottom: 10px solid transparent;
		border-top: 10px solid #588cdf;
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
	`,
	red: css`
		border-bottom: 10px solid transparent;
		border-top: 10px solid #ff7bc3;
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
	`,
	yellow: css`
		border-bottom: 10px solid transparent;
		border-top: 10px solid #ffb546;
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
	`,
	black: css`
		border-bottom: 10px solid transparent;
		border-top: 10px solid #000;
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
	`,
};

export const StyledTooltipWrapper = styled.div`
	max-width: 600px;
	height: auto;
	position: relative;
`;

export const StyledTooltip = styled.div<TooltipProps>`
	${({ colors }) => backColorCSS[colors]};
	position: absolute;
	width: 27px;
	height: 27px;
	color: #fff;
	border: 1px solid transparent;
	border-radius: 50%;
	cursor: pointer;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	&:hover .content {
		visibility: visible;
	}
`;

export const StyledTooltipMessage = styled.span<TooltipProps>`
	${({ colors }) => backColorCSS[colors]};
	visibility: hidden;
	position: absolute;
	white-space: nowrap;
	height: auto;
	color: #fff;
	border-radius: 9px;
	padding: 8px;
	display: flex;
	align-items: center;
	bottom: 150%;
	right: 0;

	&::after {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		right: 1.5%;
		bottom: -18px;
		${({ colors }) => borderColorCSS[colors]};
	}
`;
