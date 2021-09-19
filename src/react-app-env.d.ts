/// <reference types="react-scripts" />
import {ChangeEvent, ReactNode} from "react";

interface RadioGroupContextValue {
	name: string;
	checked: string | null;

	handleChange(e: ChangeEvent<HTMLInputElement>): void
}

interface RadioParam {
	name: string;
	legend: string;
	children: ReactNode
}

interface RadioItem {
	value: string;
	children: ReactNode
}

enum ActionType {
	INCREMENT_COUNTER = "INCREMENT_COUNTER",
	DECREMENT_COUNTER = "DECREMENT_COUNTER"
}

interface IReducer {
	type: ActionType,
	count: number
}

interface ICounter {
	result: number
}

const initialState: ICounter = {
	result: 0
}
const countValue: number = 1

