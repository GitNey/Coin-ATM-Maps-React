import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../config/hooks';
import {
	decrement,
	increment,
	incrementByAmount
} from '../../reducers/counter';
import { selectCount } from '../../reducers/counter/selectors';
import {
	incrementAsync,
	incrementIfOdd
} from '../../reducers/counter/thunks';
import './counter.css';

export function Counter() {
	const count = useAppSelector(selectCount);
	const dispatch = useAppDispatch();
	const [incrementAmount, setIncrementAmount] = useState('2');

	const incrementValue = Number(incrementAmount) || 0;

	return (
		<div>
			<div className="row">
				<button
					className="button"
					aria-label="Decrement value"
					onClick={() => dispatch(decrement())}
				>
					-
				</button>
				<span className="value">{count}</span>
				<button
					className="button"
					aria-label="Increment value"
					onClick={() => dispatch(increment())}
				>
					+
				</button>
			</div>
			<div className="row">
				<input
					className="textbox"
					aria-label="Set increment amount"
					value={incrementAmount}
					onChange={(e) => setIncrementAmount(e.target.value)}
				/>
				<button
					aria-label="Increment by amount"
					className="button"
					onClick={() => dispatch(incrementByAmount(incrementValue))}
				>
					Add Amount
				</button>
				<button
					aria-label="Increment asynced"
					className="button asyncButton"
					onClick={() => dispatch(incrementAsync(incrementValue))}
				>
					Add Async
				</button>
				<button
					aria-label="Increment if odd"
					className="button"
					onClick={() => dispatch(incrementIfOdd(incrementValue))}
				>
					Add If Odd
				</button>
			</div>
		</div>
	);
}
