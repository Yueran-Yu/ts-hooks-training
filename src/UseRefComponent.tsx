import {useRef} from "react";


export const UseRefComponent = () => {
	const inputRef = useRef<HTMLInputElement | null>(null)

	return (
		<div>
			<h1> Use Ref</h1>
			<input ref={inputRef}/>
		</div>
	)
}