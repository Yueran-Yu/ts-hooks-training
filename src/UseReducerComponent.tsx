import React, {useReducer} from "react";

const initialState = {
	counter: 100,
}

type ACTIONTYPES =
	| { type: "increment"; payload: number }
	| { type: "decrement"; payload: number }


const counterReducer = (state: typeof initialState, action: ACTIONTYPES) => {
	switch (action.type) {
		case "increment":
			return {
				...state,
				counter: state.counter + action.payload
			}
		case "decrement":
			return {
				...state,
				counter: state.counter - action.payload
			}
		default:
			throw new Error("Bad action")
	}
}
export const UseReducerComponent = () => {
	const [state, dispatch] = useReducer(counterReducer, initialState)

	return (
		<div>
			<h1>useReducer</h1>
			<h2>Counter: {state.counter}</h2>
			<button onClick={() => dispatch({type: 'increment', payload: 10})}>Increment</button>
			<br/>
			<button onClick={() => dispatch({type: 'decrement', payload: 5})}>Decrement</button>
		</div>
	)
}