import React from 'react';
import { StyledTooltip } from './style';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

export interface TooltipProps {
	colors: 'blue' | 'red' | 'yellow' | 'black';
	label?: string;
}

const ToolTip = ({ colors }: TooltipProps) => {
	return (
		<StyledTooltip colors={colors}>
			<QuestionMarkIcon />
		</StyledTooltip>
	);
};

export default ToolTip;
