import React, { useState } from 'react';
import { CheckProps, StyledCheckBox } from './style';
import CheckIcon from '@mui/icons-material/Check';
import theme from 'styles/theme';

const CheckBox = ({ variant }: CheckProps) => {
	const [check, setCheck] = useState(false);

	const handleCheck = () => {
		setCheck(!check);
	};

	let iconColor;
	switch (variant) {
		case 'primary':
			iconColor = theme.PALETTE.primary[100];
			break;
		case 'secondary':
			iconColor = theme.PALETTE.secondary[100];
			break;
		case 'teriary':
			iconColor = theme.PALETTE.tertiary[100];
			break;
		default:
			iconColor = 'black'; // default color
			break;
	}

	return (
		<StyledCheckBox variant={variant} onClick={handleCheck}>
			{check && <CheckIcon style={{ color: iconColor }} fontSize={'large'} />}
		</StyledCheckBox>
	);
};

export default CheckBox;
