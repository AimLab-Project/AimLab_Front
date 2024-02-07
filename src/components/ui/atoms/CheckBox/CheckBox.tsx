import React, { useState } from 'react';
import { StyledCheckBox } from './style';
import CheckIcon from '@mui/icons-material/Check';
import theme from 'styles/theme';

export interface CheckProps {
	variant: 'primary' | 'secondary' | 'teriary';
}

const CheckBox = ({ variant }: CheckProps) => {
	const [check, setCheck] = useState(false);

	const handleCheck = () => {
		setCheck(!check);
	};

	let iconColor;
	switch (variant) {
		case 'primary':
			iconColor = theme.PALETTE.primary[200];
			break;
		case 'secondary':
			iconColor = theme.PALETTE.secondary[200];
			break;
		case 'teriary':
			iconColor = theme.PALETTE.tertiary[200];
			break;
		default:
			iconColor = 'black'; // default color
			break;
	}

	return (
		<StyledCheckBox variant={variant} onClick={handleCheck}>
			{check && <CheckIcon style={{ color: iconColor }} fontSize={'small'} />}
		</StyledCheckBox>
	);
};

export default CheckBox;
