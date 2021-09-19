import React, {Reducer, useReducer} from "react";
import {reducer} from "./reducerDoc";
import {ActionType, ICounter, IReducer} from "../react-app-env";

const initialState: ICounter = {
	result: 0
}
const countValue: number = 1

export const Main = () => {
	/* the useReducer hook receives the reducer function and an initial state as arguments
	and returns two elements: the state of the counter and the dispatch action
	*/
	const [state, dispatch] = useReducer<Reducer<ICounter, IReducer>>(reducer, initialState)

	return (
		<div>
			<h1>How to use type in useReducer</h1>
			<h1>Result: {state.result}</h1>
			<button onClick={() => dispatch({type: ActionType.INCREMENT_COUNTER, count: countValue})}> + </button>
			<button onClick={() => dispatch({type: ActionType.DECREMENT_COUNTER, count: countValue})}> - </button>

		</div>
	)
}

// the useMemo hook allows you to memorize the output of a given function. It returns a memoized value
// the useCallback hook allows you to memoize a function to prevent unnecessary re-renders. It returns a memoized callback.