import React from 'react';
import {
	StyledTooltip,
	StyledTooltipMessage,
	StyledTooltipWrapper,
} from './style';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

export interface TooltipProps {
	colors: 'blue' | 'red' | 'yellow' | 'black';
	label?: string;
}

const ToolTip = ({ colors, label }: TooltipProps) => {
	return (
		<>
			<StyledTooltipWrapper>
				<StyledTooltip colors={colors}>
					<QuestionMarkIcon />
					<StyledTooltipMessage className="content" colors={colors}>
						{label}
					</StyledTooltipMessage>
				</StyledTooltip>
			</StyledTooltipWrapper>
		</>
	);
};

export default ToolTip;
