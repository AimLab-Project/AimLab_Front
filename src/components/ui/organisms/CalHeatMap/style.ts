import styled from 'styled-components';

export const TimeLine = styled.div`
	/* .timeline의 스타일 */
`;

export const Cells = styled.div`
	display: inline-flex;
	flex-direction: column;
	flex-wrap: wrap;
	height: ${(10 + 4) * 8}px;
`;

export const Celly = styled.div`
	height: 10px;
	width: 10px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	margin: 2px;
	border-radius: 2px;
	background-color: rgba(0, 0, 0, 0.05);
	/* background-color: rgba(0, 0, 0, 0.05); */
	cursor: pointer;

	&:hover {
		border: 1px solid rgba(0, 0, 0, 0.5);
	}
`;

export const Body = styled.div`
	display: flex;
`;

export const Weeks = styled.div`
	display: inline-flex;
	flex-direction: column;
	width: 30px;
`;

export const Weeky = styled.div`
	font-size: 10px;
	height: 10px;
	/* width: 10px; */
	border: 1px solid transparent;
	margin: 2px;
	text-align: center;
	vertical-align: middle;
`;

export const Months = styled.div`
	display: flex;
	padding-left: 30px;
`;

export const Monthy = styled.div`
	width: 10px;
	margin: 2px;
	border: 1px solid transparent;
	font-size: 10px;

	.Jan ~ &.Jan,
	.Feb ~ &.Feb,
	.Mar ~ &.Mar,
	.Apr ~ &.Apr,
	.May ~ &.May,
	.Jun ~ &.Jun,
	.Jul ~ &.Jul,
	.Aug ~ &.Aug,
	.Sep ~ &.Sep,
	.Oct ~ &.Oct,
	.Nov ~ &.Nov,
	.Dec ~ &.Dec {
		visibility: hidden;
	}
`;
