import { useCallback, useEffect, useRef, useState } from 'react';

function useTimer(duration: number) {
	const timerId = useRef<ReturnType<typeof setInterval> | null>(null);
	const [seconds, setSeconds] = useState(duration);
	const [isRunning, setIsRunning] = useState(false);

	useEffect(() => {
		if (seconds < 1) {
			stop();
		}
	}, [seconds]);

	const start = useCallback(() => {
		timerId.current = setInterval(() => {
			if (seconds === 0) {
				stop();
			}
			setSeconds(seconds => seconds - 1);
		}, 1000);
		setIsRunning(true);
	}, [setSeconds, setIsRunning]);

	const stop = useCallback(() => {
		setIsRunning(false);
		clearInterval(timerId.current as ReturnType<typeof setInterval>);
		setSeconds(duration);
	}, [setSeconds, setIsRunning]);

	useEffect(() => {
		return () => {
			clearInterval(timerId.current as ReturnType<typeof setInterval>);
		};
	}, [stop]);

	return { seconds, isRunning, start, stop };
}

export default useTimer;
