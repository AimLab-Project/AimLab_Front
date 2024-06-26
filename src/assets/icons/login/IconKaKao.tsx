import React, { FC } from 'react';

export const IconKaKao: FC<{ color?: string }> = ({ color = 'white' }) => {
	return (
		<svg
			width="36"
			height="36"
			viewBox="0 0 36 36"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				opacity="0.902"
				fillRule="evenodd"
				clipRule="evenodd"
				d="M18 1.888C8.58 1.888 0 9.46 0 15.866C0 20.666 3.116 24.9 7.862 27.416L5.866 34.748C5.688 35.398 6.426 35.914 6.992 35.54L15.746 29.73C16.484 29.802 17.236 29.844 18 29.844C27.94 29.844 36 23.586 36 15.866C36 9.46 27.94 1.888 18 1.888Z"
				fill={color}
			/>
		</svg>
	);
};
