import React, {useState} from "react";

export const UseStateComponent = () => {
	const [arr, setArr] = useState<number[]>([])
	const [name, setName] = useState<string | null>(null)
	return (
		<div>
			<div>
				<h1>useState</h1>
				<button onClick={() => setArr([...arr, arr.length + 1])}>Add to Array</button>
				{JSON.stringify(arr)}
			</div>
			<div>
				<button onClick={() => setName("Mike")}>Add Name</button>
				{JSON.stringify(name)}

			</div>
		</div>
	)
}