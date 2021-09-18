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