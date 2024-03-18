import React from 'react';
import Timeline from './Timeline';
import dayjs from 'dayjs';

const CalHeatMap = () => {
	const startDate = dayjs().add(-365, 'days');
	const dateRange = [startDate, dayjs()];
	const data = Array.from(new Array(365)).map((_, index) => {
		return {
			date: dayjs(startDate).add(index, 'day'),
			value: Math.floor(Math.random() * 100),
		};
	});

	return <Timeline range={dateRange} data={data} />;
};

export default CalHeatMap;
