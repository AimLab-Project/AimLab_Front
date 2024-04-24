import React from 'react';
import { Celly } from './style';

interface CellProps {
	value: number;
}

const Cell = ({ value }: CellProps) => {
	const style = {
		backgroundColor: `rgba(255, 123, 195, ${value})`,
	};
	return (
		<Celly className="timeline-cells-cell" style={style}>
			{' '}
		</Celly>
	);
};

export default Cell;
