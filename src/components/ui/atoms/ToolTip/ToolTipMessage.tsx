import React from 'react';
import {
	StyledTooltipMessage,
	StyledTooltipMessageTail,
	StyledTooltipWrapper,
} from './style';
import { TooltipProps } from './ToolTip';

const ToolTipMessage = ({ colors, label }: TooltipProps) => {
	return (
		<StyledTooltipWrapper>
			<StyledTooltipMessage colors={colors}>
				{label}
				<StyledTooltipMessageTail colors={colors}></StyledTooltipMessageTail>
			</StyledTooltipMessage>
		</StyledTooltipWrapper>
	);
};

export default ToolTipMessage;
