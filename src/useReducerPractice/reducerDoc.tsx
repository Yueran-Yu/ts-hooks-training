import {ActionType, ICounter, IReducer} from "../react-app-env";
import {Reducer} from "react";


// the reducer expects a state of type ICounter and an action of type IReducer, With that, the counter can now be handled
export const reducer: Reducer<ICounter, IReducer> = (state, action) => {
	switch (action.type) {
		case ActionType.INCREMENT_COUNTER:
			return {result: state.result + action.count}
		case ActionType.DECREMENT_COUNTER:
			return {result: state.result - action.count}
		default:
			return state;
	}
}
