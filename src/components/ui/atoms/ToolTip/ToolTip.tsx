import React from 'react';
import { StyledTooltip } from './style';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

export interface TootipProps {
	backColor: 'blue' | 'red' | 'yellow' | 'black';
}

const ToolTip = ({ backColor }: TootipProps) => {
	return (
		<StyledTooltip backColor={backColor}>
			<QuestionMarkIcon />
		</StyledTooltip>
	);
};

export default ToolTip;
