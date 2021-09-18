import React, {useContext} from "react";
import {RadioGroupContext} from "./RadioGroupProvider";
import {RadioItem} from "../react-app-env";

export const RadioGroupItem: React.FC<RadioItem> = ({value, children}) => {
	let {name, checked, handleChange} = useContext(RadioGroupContext)
	return (
		<label>
			<input type="radio" name={name} value={value} checked={checked === value} onChange={handleChange}/>
			<span>{children}</span>
		</label>
	)
};