import styled from 'styled-components';
import theme from 'styles/theme';

export const StyledInputBox = styled.div<{ width: string }>`
	display: flex;
	flex-direction: column;
	position: relative;
	gap: 8px;
	${({ width }) => (width ? '' : 'flex-grow: 1;')};
	width: ${({ width }) => (width ? width : '100%')};
	.error {
		color: ${theme.PALETTE.error};
		font-size: ${theme.FONT_SIZE.small};
	}
	.pass {
		color: ${theme.PALETTE.pass};
		font-size: ${theme.FONT_SIZE.small};
	}
	.icon {
		height: 45px;
		position: absolute;
		right: 10px;
		color: ${theme.PALETTE.gray[700]};
		display: flex;
		align-items: center;
	}
	.login-error {
		padding: 0 8px;
		display: flex;
		align-items: center;
		gap: 4px;
		height: 45px;
		background: rgba(255, 114, 70, 0.2);
		border-radius: 10px;
		color: #ff7246;
		font-size: 14px;
		font-weight: 400;
	}
`;

export const StyledInput = styled.input<{ error: string }>`
	padding: 0 16px;
	height: 45px;
	line-height: 45px;
	font-size: ${theme.FONT_SIZE.large};
	color: ${theme.PALETTE.fblack};
	border: 1px solid
		${({ error }) => (error ? theme.PALETTE.error : theme.PALETTE.gray[500])};
	box-sizing: border-box;
	box-shadow: inset 0px 4px 4px 4px rgba(0, 0, 0, 0.1);
	svg {
		color: ${theme.PALETTE.gray[700]};
	}
	&::placeholder {
		color: #ccc;
	}
`;
