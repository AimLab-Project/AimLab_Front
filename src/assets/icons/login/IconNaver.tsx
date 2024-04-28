import React, { FC } from 'react';

export const IconNaver: FC<{ color?: string }> = ({ color = 'white' }) => {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M10.8491 8.56267L4.91687 0H0V16H5.15088V7.436L11.0831 16H16V0H10.8491V8.56267Z"
				fill={color}
			/>
		</svg>
	);
};
