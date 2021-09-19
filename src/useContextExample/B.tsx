import React, {memo} from "react";
import {SimpleCtx} from "./Context";
import {useContext} from "react";
import {bStyle} from "./styles";

let renderCountC = 0;
const C = memo<{ valueB: any; setValueB: any }>(
	({valueB, setValueB}) => {
		renderCountC += 1;
		console.log(`C. renderCount`, renderCountC)
		return (
			<div style={bStyle}>
				<h2>Component B</h2>
				<div>value: {valueB}</div>
				<input onChange={e => setValueB(e.target.value)}/>
			</div>
		)
	}
)

let renderCountB: number = 0
const B = () => {
	renderCountB += 1
	console.log(`${B.name}. renderCount`, renderCountB)
	const {valueB, setValueB} = useContext(SimpleCtx)
	return (
		<C valueB={valueB} setValueB={setValueB}/>
	)
}
export default B

