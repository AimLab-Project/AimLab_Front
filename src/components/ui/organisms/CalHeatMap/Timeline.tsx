import React from 'react';
import dayjs from 'dayjs';
import { Dayjs } from 'dayjs';
import { Body, Cells, TimeLine } from './style';
import Cell from './Cell';
// import Week from './Week';

export interface CalHeatMapProps {
	range: Dayjs[];
	data: { date: Dayjs; value: number }[];
}

const Timeline = ({ range, data }: CalHeatMapProps) => {
	const days = Math.abs(range[0].diff(range[1], 'days'));
	const cells = Array.from(new Array(days));
	// const weeks = Array.from(new Array(7));
	// const months = Array.from(new Array(Math.floor(days / 7)));

	const min = Math.min(0, ...data.map(d => d.value));
	const max = Math.max(...data.map(d => d.value));

	const colorMultiplier = 1 / (max - min);

	const startDate = range[0];
	const DayFormat = 'DDMMYYYY';

	return (
		<TimeLine className="timeline">
			{/* <Months className="timeline-months">
				{months.map((_, index) => (
					<Month key={index} index={index} startDate={startDate} />
				))}
			</Months> */}
			<Body className="timeline-body">
				{/* <Weeks className="timeline-weeks">
					{weeks.map((_, index) => (
						<Week key={index} index={index} />
					))}
				</Weeks> */}
				<Cells className="timeline-cells">
					{cells.map((_, index) => {
						const date = dayjs(startDate).add(index, 'days');
						const dataPoint = data.find(
							d =>
								dayjs(date).format(DayFormat) ===
								dayjs(d.date).format(DayFormat),
						);
						// let value = colorMultiplier * dataPoint.value;
						const value = dataPoint ? colorMultiplier * dataPoint.value : 0;

						return <Cell value={value} key={index} />;
					})}
				</Cells>
			</Body>
		</TimeLine>
	);
};

export default Timeline;
