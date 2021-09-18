import React, {ChangeEvent, createContext, useState} from "react";
import {RadioGroupContextValue, RadioParam} from "../react-app-env";

export const RadioGroupContext = createContext<RadioGroupContextValue>({
	name: '',
	checked: null,
	handleChange(e: React.ChangeEvent<HTMLInputElement>) {}
})
export const RadioGroupProvider: React.FC<RadioParam> = ({name, legend, children}) => {
	let [checked, setChecked] = useState<string>('')

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		let value = e.target.value
		setChecked(value)
	}

	return (
		<fieldset>
			<legend>{legend}</legend>
			<RadioGroupContext.Provider value={{name, checked, handleChange}}>
				{children}
			</RadioGroupContext.Provider>
		</fieldset>
	)
}