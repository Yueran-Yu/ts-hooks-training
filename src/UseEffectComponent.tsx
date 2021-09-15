import React, {useState, useEffect} from "react";

export const UseEffectComponent = () => {
	const [val, setVal] = useState(1)
	useEffect(() => {
			const timer = setInterval(
				() => {
					setVal(val => val + 1)
				}, 1000)
			return () => clearInterval(timer)
		},
		[])
	return (
		<div>
			<h1>useEffect</h1>
			<div>{val}</div>
		</div>
	)
}