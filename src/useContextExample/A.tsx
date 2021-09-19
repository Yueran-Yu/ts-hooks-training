import React from "react";
import {SimpleCtx} from "./Context";
import {useContext} from "react";
import {aStyle} from "./styles";

let renderCountA: number = 0
const A = () => {
	renderCountA += 1
	console.log(`${A.name}. renderCount`, renderCountA)
	const {valueA, setValueA} = useContext(SimpleCtx)
	return (
		<div style={aStyle}>
			<h2>Component A</h2>
			<div>value: {valueA}</div>
			<input onChange={e => setValueA(e.target.value)}/>
		</div>
	)
}
export default A