import React from "react";
import {RadioGroupItem} from "./RadioGroupItem";
import {RadioGroupProvider} from "./RadioGroupProvider";

export const RadioGroup = () => {
	return (
		<RadioGroupProvider name='size' legend='Shirt Size'>
			<RadioGroupItem value='small'>Small</RadioGroupItem>
			<RadioGroupItem value='medium'>Medium</RadioGroupItem>
			<RadioGroupItem value='large'>Large</RadioGroupItem>
		</RadioGroupProvider>
	)
}