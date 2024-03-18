import React from 'react';
import { Weeky } from './style';

interface WeekProps {
	index: number;
}

interface DayNamesType {
	[key: number]: string;
}

const Week = ({ index }: WeekProps) => {
	const DayNames: DayNamesType = {
		1: 'Mon',
		3: 'Wed',
		5: 'Fri',
	};
	return <Weeky className="timeline-weeks-week">{DayNames[index]}</Weeky>;
};

export default Week;
