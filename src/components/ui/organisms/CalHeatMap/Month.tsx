import dayjs, { Dayjs } from 'dayjs';
import React from 'react';
import { Monthy } from './style';

interface MonthProps {
	startDate: Dayjs;
	index: number;
}

const Month = ({ startDate, index }: MonthProps) => {
	const date = dayjs(startDate).add(index * 7, 'days');
	const monthName = date.format('MMM');
	return (
		<Monthy className={`timeline-months-month ${monthName}`}>
			{monthName}
		</Monthy>
	);
};

export default Month;
